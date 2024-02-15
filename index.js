import isObj from 'lodash/isObject.js';
import sortBy from 'lodash/sortBy.js';
import omit from 'lodash/omit.js';

import {defaultProfile} from './lib/default-profile.js';
import {validateProfile} from './lib/validate-profile.js';
import {INVALID_REQUEST} from './lib/errors.js';
import {sliceLeg} from './lib/slice-leg.js';
import {HafasError} from './lib/errors.js';

/**
 * @typedef {import("./types").HafasClient} HafasClient
 * @typedef {import("./types").Profile} Profile
 * @typedef {import("./types").Location} Location
 * @typedef {import("./types").Station} Station
 * @typedef {import("./types").Stop} Stop
 * @typedef {import("./types").Line} Line
 * @typedef {import("./types").Alternative} Alternative
 * @typedef {import("./types").Departures} Departures
 * @typedef {import("./types").Arrivals} Arrivals
 * @typedef {import("./types").DeparturesArrivalsOptions} DeparturesArrivalsOptions
 * @typedef {import("./types").JourneysOptions} JourneysOptions
 * @typedef {import("./types").Journey} Journey
 * @typedef {import("./types").Journeys} Journeys
 * @typedef {import("./types").BoundingBox} BoundingBox
 * @typedef {import("./types").StopOver} StopOver
 * @typedef {import("./types").RefreshJourneyOptions} RefreshJourneyOptions
 * @typedef {import("./types").JourneysFromTripOptions} JourneysFromTripOptions
 * @typedef {import("./types").LocationsOptions} LocationsOptions
 * @typedef {import("./types").StopOptions} StopOptions
 * @typedef {import("./types").NearByOptions} NearByOptions
 * @typedef {import("./types").TripOptions} TripOptions
 * @typedef {import("./types").RadarOptions} RadarOptions
 * @typedef {import("./types").ReachableFromOptions} ReachableFromOptions
 * @typedef {import("./types").TripsByNameOptions} TripsByNameOptions
 * @typedef {import("./types").RemarksOptions} RemarksOptions
 * @typedef {import("./types").LinesOptions} LinesOptions
 * @typedef {import("./types").ServerOptions} ServerOptions
 * @typedef {import("./types-private").ProfileEx} ProfileEx
 * @typedef {import("./types-raw-api").Loc} Loc
 * @typedef {import("./types-raw-api").JourneyMatchRequest} JourneyMatchRequest
 */

// background info: https://github.com/public-transport/hafas-client/issues/286
const FORBIDDEN_USER_AGENTS = [
	'my-awesome-program', // previously used in readme.md, p/*/readme.md & docs/*.md
	'hafas-client-example', // previously used in p/*/example.js
	'link-to-your-project-or-email', // now used throughout
];

const isNonEmptyString = str => 'string' === typeof str && str.length > 0;

/**
 * @param {Location} loc
 */
const validateLocation = (loc, name = 'location') => {
	if (!isObj(loc)) {
		throw new TypeError(name + ' must be an object.');
	} else if (loc.type !== 'location') {
		throw new TypeError('invalid location object.');
	} else if ('number' !== typeof loc.latitude) {
		throw new TypeError(name + '.latitude must be a number.');
	} else if ('number' !== typeof loc.longitude) {
		throw new TypeError(name + '.longitude must be a number.');
	}
};

const validateWhen = (when, name = 'when') => {
	if (Number.isNaN(Number(when))) {
		throw new TypeError(name + ' is invalid');
	}
};

/**
 *
 * @param {Profile} commonProfile
 * @param {string} userAgent
 * @param {any} opt
 */
const createClient = (commonProfile, userAgent, opt = {}) => {

	/** @author Jürgen Bergmann
	 *  commonProfile and profile have differnt types */
	const profile = /** @type {ProfileEx} */(/** @type {unknown} */(Object.assign({}, defaultProfile, commonProfile)));
	validateProfile(profile);

	if ('string' !== typeof userAgent) {
		throw new TypeError('userAgent must be a string');
	}
	if (FORBIDDEN_USER_AGENTS.includes(userAgent.toLowerCase())) {
		throw new TypeError(`userAgent should tell the HAFAS API operators how to contact you. If you have copied "${userAgent}" value from the documentation, please adapt it.`);
	}

	/**
     * @param {string | Station | Stop | Location} _station
     * @param {(cty: any, s: any) => Alternative} parse
     * @param {DeparturesArrivalsOptions} opt
     */
	const _stationBoard = async (_station, type, resultsField, parse, opt = {}) => {
		/** @author Jürgen Bergmann, cast to other type of station */
		/** @type {Loc} */
		let station;
		if (isObj(_station)) {
			station = profile.formatStation(/** @type {Station | Stop | Location} */(_station).id);
		} else if ('string' === typeof _station) {
			station = profile.formatStation(_station);
		} else {
			throw new TypeError('station must be an object or a string.');
		}

		if ('string' !== typeof type || !type) {
			throw new TypeError('type must be a non-empty string.');
		}

		if (!profile.departuresGetPasslist && 'stopovers' in opt) {
			throw new Error('opt.stopovers is not supported by this endpoint');
		}
		if (!profile.departuresStbFltrEquiv && 'includeRelatedStations' in opt) {
			throw new Error('opt.includeRelatedStations is not supported by this endpoint');
		}

		/** @type {DeparturesArrivalsOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			// todo: for arrivals(), this is actually a station it *has already* stopped by
			direction: null, // only show departures stopping by this station
			line: null, // filter by line ID
			duration: 10, // show departures for the next n minutes
			results: null, // max. number of results; `null` means "whatever HAFAS wants"
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			linesOfStops: false, // parse & expose lines at the stop/station?
			remarks: true, // parse & expose hints & warnings?
			stopovers: false, // fetch & parse previous/next stopovers?
			// departures at related stations
			// e.g. those that belong together on the metro map.
			includeRelatedStations: true,
		}, opt);
		opt.when = new Date(opt.when || Date.now());
		if (Number.isNaN(Number(opt.when))) {
			throw new Error('opt.when is invalid');
		}

		const req = profile.formatStationBoardReq({profile, opt}, station, type);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);

		const ctx = {profile, opt, common, res};
		const jnyL = Array.isArray(res.jnyL)
			? res.jnyL
			: [];
		const results = jnyL.map(res => parse(ctx, res))
			/** @author Jürgen Bergmann, add getDate() */
			.sort((a, b) => new Date(a.when)
				.getDate()
				- new Date(b.when)
					.getDate()); // todo

		return {
			[resultsField]: results,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 * @param {string | Station | Stop | Location} station
	 * @param {DeparturesArrivalsOptions} opt
	 * @returns {Promise<Departures>}
	 */
	const departures = async (station, opt = {}) => {
		return /** @type {any} */(await _stationBoard(station, 'DEP', 'departures', profile.parseDeparture, opt));
	};

	/**
	 * @param {string | Station | Stop | Location} station
	 * @param {DeparturesArrivalsOptions} opt
	 * @returns {Promise<Arrivals>}
	 */
	const arrivals = async (station, opt = {}) => {
		return /** @type {any} */(await _stationBoard(station, 'ARR', 'arrivals', profile.parseArrival, opt));
	};

	/**
	 * @param {string | Station | Stop | Location} _from
	 * @param {string | Station | Stop | Location} _to
	 * @param {JourneysOptions | undefined} opt
	 */
	const journeys = async (_from, _to, opt = {}) => {
		/** @author Jürgen Bergmann, cast to other type of from and to */

		/** @type {Loc} */
		let from = profile.formatLocation(profile, _from, 'from');

		/** @type {Loc} */
		let to = profile.formatLocation(profile, _to, 'to');

		if ('earlierThan' in opt && 'laterThan' in opt) {
			throw new TypeError('opt.earlierThan and opt.laterThan are mutually exclusive.');
		}
		if ('departure' in opt && 'arrival' in opt) {
			throw new TypeError('opt.departure and opt.arrival are mutually exclusive.');
		}
		let journeysRef = null;
		if ('earlierThan' in opt) {
			if (!isNonEmptyString(opt.earlierThan)) {
				throw new TypeError('opt.earlierThan must be a non-empty string.');
			}
			if ('departure' in opt || 'arrival' in opt) {
				throw new TypeError('opt.earlierThan and opt.departure/opt.arrival are mutually exclusive.');
			}
			journeysRef = opt.earlierThan;
		}
		if ('laterThan' in opt) {
			if (!isNonEmptyString(opt.laterThan)) {
				throw new TypeError('opt.laterThan must be a non-empty string.');
			}
			if ('departure' in opt || 'arrival' in opt) {
				throw new TypeError('opt.laterThan and opt.departure/opt.arrival are mutually exclusive.');
			}
			journeysRef = opt.laterThan;
		}

		/** @type {JourneysOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			results: null, // number of journeys – `null` means "whatever HAFAS returns"
			via: null, // let journeys pass this station?
			stopovers: false, // return stations on the way?
			transfers: -1, // maximum nr of transfers
			transferTime: 0, // minimum time for a single transfer in minutes
			// todo: does this work with every endpoint?
			accessibility: 'none', // 'none', 'partial' or 'complete'
			bike: false, // only bike-friendly journeys
			walkingSpeed: 'normal', // 'slow', 'normal', 'fast'
			// Consider walking to nearby stations at the beginning of a journey?
			startWithWalking: true,
			tickets: false, // return tickets?
			polylines: false, // return leg shapes?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			remarks: true, // parse & expose hints & warnings?
			scheduledDays: false, // parse & expose dates each journey is valid on?
		}, opt);
		if (opt.via) {
			opt.via = /** @type {any} */(profile.formatLocation(profile, opt.via, 'opt.via'));
		}

		if (opt.when !== undefined) {
			throw new Error('opt.when is not supported anymore. Use opt.departure/opt.arrival.');
		}
		let when = new Date(), outFrwd = true;
		if (opt.departure !== undefined && opt.departure !== null) {
			when = new Date(opt.departure);
			if (Number.isNaN(Number(when))) {
				throw new TypeError('opt.departure is invalid');
			}
		} else if (opt.arrival !== undefined && opt.arrival !== null) {
			if (!profile.journeysOutFrwd) {
				throw new Error('opt.arrival is unsupported');
			}
			when = new Date(opt.arrival);
			if (Number.isNaN(Number(when))) {
				throw new TypeError('opt.arrival is invalid');
			}
			outFrwd = false;
		}

		const filters = [
			profile.formatProductsFilter({profile}, opt.products || {}),
		];
		if (
			opt.accessibility
			&& profile.filters
			&& profile.filters.accessibility
			&& profile.filters.accessibility[opt.accessibility]
		) {
			filters.push(profile.filters.accessibility[opt.accessibility]);
		}

		if (!['slow', 'normal', 'fast'].includes(opt.walkingSpeed)) {
			throw new Error('opt.walkingSpeed must be one of these values: "slow", "normal", "fast".');
		}
		const gisFltrL = [];
		if (profile.journeysWalkingSpeed) {
			gisFltrL.push({
				meta: 'foot_speed_' + opt.walkingSpeed,
				mode: 'FB',
				type: 'M',
			});
		}

		const query = {
			getPasslist: Boolean(opt.stopovers),
			maxChg: opt.transfers,
			minChgTime: opt.transferTime,
			depLocL: [from],
			viaLocL: opt.via
				? [{loc: opt.via}]
				: [],
			arrLocL: [to],
			jnyFltrL: filters,
			gisFltrL,
			getTariff: Boolean(opt.tickets),
			// todo: this is actually "take additional stations nearby the given start and destination station into account"
			// see rest.exe docs
			ushrp: Boolean(opt.startWithWalking),

			getPT: true, // todo: what is this?
			getIV: false, // todo: walk & bike as alternatives?
			getPolyline: Boolean(opt.polylines),
			// todo: `getConGroups: false` what is this?
			// todo: what is getEco, fwrd?
		};
		if (journeysRef) {
			query.ctxScr = journeysRef;
		} else {
			query.outDate = profile.formatDate(profile, when);
			query.outTime = profile.formatTime(profile, when);
		}
		if (opt.results !== null) {
			query.numF = opt.results;
		}
		if (profile.journeysOutFrwd) {
			query.outFrwd = outFrwd;
		}

		const {res, common} = await profile.request({profile, opt}, userAgent, {
			cfg: {polyEnc: 'GPA'},
			meth: 'TripSearch',
			req: profile.transformJourneysQuery({profile, opt}, query),
		});
		if (!Array.isArray(res.outConL)) {
			return [];
		}
		// todo: outConGrpL

		const ctx = {profile, opt, common, res};
		const journeys = res.outConL
			.map(j => profile.parseJourney(ctx, j));

		return {
			earlierRef: res.outCtxScrB || null,
			laterRef: res.outCtxScrF || null,
			journeys,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {string} refreshToken
	 * @param {RefreshJourneyOptions} opt
	 */
	const refreshJourney = async (refreshToken, opt = {}) => {
		if ('string' !== typeof refreshToken || !refreshToken) {
			throw new TypeError('refreshToken must be a non-empty string.');
		}

		/** @type {RefreshJourneyOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			stopovers: false, // return stations on the way?
			tickets: false, // return tickets?
			polylines: false, // return leg shapes? (not supported by all endpoints)
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			remarks: true, // parse & expose hints & warnings?
			scheduledDays: false, // parse & expose dates the journey is valid on?
		}, opt);

		const req = profile.formatRefreshJourneyReq({profile, opt}, refreshToken);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!Array.isArray(res.outConL) || !res.outConL[0]) {
			throw new HafasError('invalid response, expected outConL[0]', null, {});
		}

		const ctx = {profile, opt, common, res};

		return {
			journey: profile.parseJourney(ctx, res.outConL[0]),
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	// Although the DB Navigator app passes the *first* stopover of the trip
	// (instead of the previous one), it seems to work with the previous one as well.
	/**
	 * @param {string} fromTripId
	 * @param {StopOver} previousStopover
	 * @param {string | Station | Stop} _to
	 * @param {JourneysFromTripOptions | undefined} opt
	 */
	const journeysFromTrip = async (fromTripId, previousStopover, _to, opt = {}) => {
		if (!isNonEmptyString(fromTripId)) {
			throw new Error('fromTripId must be a non-empty string.');
		}

		/** @author Jürgen Bergmann, cast to other type of station */
		/** @type {Loc}*/
		let to;
		if ('string' === typeof _to) {
			to = profile.formatStation(_to);
		} else if (isObj(to) && (to.type === 'station' || to.type === 'stop')) {
			to = profile.formatStation(_to.id);
		} else {
			throw new Error('to must be a valid stop or station.');
		}

		if (!isObj(previousStopover)) {
			throw new Error('previousStopover must be an object.');
		}

		/** @author Jürgen Bergmann, cast to other type of station */
		/** @type {Loc}*/
		let prevStop;
		if (isObj(previousStopover.stop)) {
			prevStop = profile.formatStation(previousStopover.stop.id);
		} else if ('string' === typeof previousStopover.stop) {
			prevStop = profile.formatStation(previousStopover.stop);
		} else {
			throw new Error('previousStopover.stop must be a valid stop or station.');
		}

		/** @type {string|number}*/
		let depAtPrevStop = previousStopover.departure || previousStopover.plannedDeparture;
		if (!isNonEmptyString(depAtPrevStop)) {
			throw new Error('previousStopover.(planned)departure must be a string');
		}
		depAtPrevStop = Date.parse(depAtPrevStop);
		if (Number.isNaN(depAtPrevStop)) {
			throw new Error('previousStopover.(planned)departure is invalid');
		}
		if (depAtPrevStop > Date.now()) {
			throw new Error('previousStopover.(planned)departure must be in the past');
		}

		opt = Object.assign({
			stopovers: false, // return stations on the way?
			transferTime: 0, // minimum time for a single transfer in minutes
			accessibility: 'none', // 'none', 'partial' or 'complete'
			tickets: false, // return tickets?
			polylines: false, // return leg shapes?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			remarks: true, // parse & expose hints & warnings?
		}, opt);

		// make clear that `departure`/`arrival`/`when` are not supported
		if (/** @type {any} */(opt).departure) {
			throw new Error('journeysFromTrip + opt.departure is not supported by HAFAS.');
		}
		if (/** @type {any} */(opt).arrival) {
			throw new Error('journeysFromTrip + opt.arrival is not supported by HAFAS.');
		}
		if (/** @type {any} */(opt).when) {
			throw new Error('journeysFromTrip + opt.when is not supported by HAFAS.');
		}

		const filters = [
			profile.formatProductsFilter({profile}, opt.products || {}),
		];
		if (
			opt.accessibility
			&& profile.filters
			&& profile.filters.accessibility
			&& profile.filters.accessibility[opt.accessibility]
		) {
			filters.push(profile.filters.accessibility[opt.accessibility]);
		}
		// todo: support walking speed filter

		// todo: are these supported?
		// - getPT
		// - getIV
		// - trfReq
		// features from `journeys()` not supported here:
		// - `maxChg`: maximum nr of transfers
		// - `bike`: only bike-friendly journeys
		// - `numF`: how many journeys?
		// - `via`: let journeys pass this station
		// todo: find a way to support them

		const query = {
			// https://github.com/marudor/BahnhofsAbfahrten/blob/49ebf8b36576547112e61a6273bee770f0769660/packages/types/HAFAS/SearchOnTrip.ts#L16-L30
			// todo: support search by `journey.refreshToken` (a.k.a. `ctxRecon`) via `sotMode: RC`?
			sotMode: 'JI', // seach by trip ID (a.k.a. "JID")
			jid: fromTripId,
			locData: { // when & where the trip has been entered
				loc: prevStop,
				type: 'DEP', // todo: are there other values?
				date: profile.formatDate(profile, depAtPrevStop),
				time: profile.formatTime(profile, depAtPrevStop),
			},
			arrLocL: [to],
			jnyFltrL: filters,
			getPasslist: Boolean(opt.stopovers),
			getPolyline: Boolean(opt.polylines),
			minChgTime: opt.transferTime,
			getTariff: Boolean(opt.tickets),
		};

		const {res, common} = await profile.request({profile, opt}, userAgent, {
			cfg: {polyEnc: 'GPA'},
			meth: 'SearchOnTrip',
			req: query,
		});
		if (!Array.isArray(res.outConL)) {
			return [];
		}

		const ctx = {profile, opt, common, res};
		const journeys = res.outConL
			.map(rawJourney => profile.parseJourney(ctx, rawJourney))
			.map((journey) => {
			// For the first (transit) leg, HAFAS sometimes returns *all* past
			// stopovers of the trip, even though it should only return stopovers
			// between the specified `depAtPrevStop` and the arrival at the
			// interchange station. We slice the leg accordingly.
				const fromLegI = journey.legs.findIndex(l => l.tripId === fromTripId);
				if (fromLegI < 0) {
					return journey;
				}
				const fromLeg = journey.legs[fromLegI];
				return {
					...journey,
					legs: [
						...journey.legs.slice(0, fromLegI),
						sliceLeg(fromLeg, previousStopover.stop, fromLeg.destination),
						...journey.legs.slice(fromLegI + 2),
					],
				};
			});

		return {
			journeys,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 * @param {string} query
	 * @param {LocationsOptions | undefined} opt
	 */
	const locations = async (query, opt = {}) => {
		if (!isNonEmptyString(query)) {
			throw new TypeError('query must be a non-empty string.');
		}

		/** @type {LocationsOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			fuzzy: true, // find only exact matches?
			results: 5, // how many search results?
			stops: true, // return stops/stations?
			addresses: true,
			poi: true, // points of interest
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			linesOfStops: false, // parse & expose lines at each stop/station?
		}, opt);

		const req = profile.formatLocationsReq({profile, opt}, query);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!res.match || !Array.isArray(res.match.locL)) {
			return [];
		}

		const ctx = {profile, opt, common, res};
		return res.match.locL.map(loc => profile.parseLocation(ctx, loc));
	};

	/**
	 *
	 * @param {string | Stop} _stop
	 * @param {StopOptions} opt
	 */
	const stop = async (_stop, opt = {}) => {
		/** @author Jürgen Bergmann, cast to other type of stop */
		/** @type {Loc} */
		let stop;
		if ('object' === typeof _stop) {
			stop = profile.formatStation(_stop.id);
		} else if ('string' === typeof _stop) {
			stop = profile.formatStation(_stop);
		} else {
			throw new TypeError('stop must be an object or a string.');
		}

		/** @type {StopOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			linesOfStops: false, // parse & expose lines at the stop/station?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			remarks: true, // parse & expose hints & warnings?
		}, opt);

		const req = profile.formatStopReq({profile, opt}, stop);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!res || !Array.isArray(res.locL) || !res.locL[0]) {
			throw new HafasError('invalid response, expected locL[0]', null, {
				// This problem occurs on invalid input. 🙄
				code: INVALID_REQUEST,
			});
		}

		const ctx = {profile, opt, res, common};
		return profile.parseLocation(ctx, res.locL[0]);
	};

	/**
	 *
	 * @param {Location} location
	 * @param {NearByOptions} opt
	 */
	const nearby = async (location, opt = {}) => {
		validateLocation(location, 'location');

		/** @type {NearByOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			results: 8, // maximum number of results
			distance: null, // maximum walking distance in meters
			poi: false, // return points of interest?
			stops: true, // return stops/stations?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			linesOfStops: false, // parse & expose lines at each stop/station?
		}, opt);

		const req = profile.formatNearbyReq({profile, opt}, location);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!Array.isArray(res.locL)) {
			return [];
		}

		// todo: parse `.dur` – walking duration?
		const ctx = {profile, opt, common, res};
		const results = res.locL.map(loc => profile.parseNearby(ctx, loc));
		return Number.isInteger(opt.results)
			? results.slice(0, opt.results)
			: results;
	};

	/**
	 *
	 * @param {string} id
	 * @param {TripOptions} opt
	 */
	const trip = async (id, opt = {}) => {
		if (!isNonEmptyString(id)) {
			throw new TypeError('id must be a non-empty string.');
		}
		opt = Object.assign({
			stopovers: true, // return stations on the way?
			polyline: false, // return a track shape?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			remarks: true, // parse & expose hints & warnings?
			scheduledDays: false, // parse & expose dates trip is valid on?
		}, opt);

		const req = profile.formatTripReq({profile, opt}, id);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		const ctx = {profile, opt, common, res};

		const trip = profile.parseTrip(ctx, res.journey);

		return {
			trip,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {string} lineNameOrFahrtNr
	 * @param {TripsByNameOptions} opt
	 */
	// todo [breaking]: rename to trips()?
	const tripsByName = async (lineNameOrFahrtNr = '*', opt = {}) => {
		if (!isNonEmptyString(lineNameOrFahrtNr)) {
			throw new TypeError('lineNameOrFahrtNr must be a non-empty string.');
		}
		opt = Object.assign({
			when: null,
			fromWhen: null, untilWhen: null,
			onlyCurrentlyRunning: true,
			products: {},
			currentlyStoppingAt: null,
			lineName: null,
			operatorNames: null,
			additionalFilters: [], // undocumented
		}, opt);

		/** @type {JourneyMatchRequest} */
		const req = {
			// fields: https://github.com/marudor/BahnhofsAbfahrten/blob/f619e754f212980261eb7e2b151cd73ba0213da8/packages/types/HAFAS/JourneyMatch.ts#L4-L23
			input: lineNameOrFahrtNr,
			onlyCR: opt.onlyCurrentlyRunning,
			jnyFltrL: [
				profile.formatProductsFilter({profile}, opt.products),
			],
			// todo: passing `tripId` yields a `CGI_READ_FAILED` error
			// todo: passing a stop ID as `extId` yields a `PARAMETER` error
			// todo: `onlyRT: true` reduces the number of results, but filters recent trips 🤔
			// todo: `onlyTN: true` yields a `NO_MATCH` error
			// todo: useAeqi
		};
		if (opt.when !== null) {
			req.date = profile.formatDate(profile, new Date(opt.when));
			req.time = profile.formatTime(profile, new Date(opt.when));
		}
		// todo: fromWhen doesn't work yet, but untilWhen does
		if (opt.fromWhen !== null) {
			req.dateB = profile.formatDate(profile, new Date(opt.fromWhen));
			req.timeB = profile.formatTime(profile, new Date(opt.fromWhen));
		}
		if (opt.untilWhen !== null) {
			req.dateE = profile.formatDate(profile, new Date(opt.untilWhen));
			req.timeE = profile.formatTime(profile, new Date(opt.untilWhen));
		}
		const filter = (mode, type, value) => ({mode, type, value});
		if (opt.currentlyStoppingAt !== null) {
			if (!isNonEmptyString(opt.currentlyStoppingAt)) {
				throw new TypeError('opt.currentlyStoppingAt must be a non-empty string.');
			}
			req.jnyFltrL.push(filter('INC', 'STATIONS', opt.currentlyStoppingAt));
		}
		if (opt.lineName !== null) {
			if (!isNonEmptyString(opt.lineName)) {
				throw new TypeError('opt.lineName must be a non-empty string.');
			}
			// todo: does this target `line` or `lineId`?
			req.jnyFltrL.push(filter('INC', 'LINE', opt.lineName));
		}
		if (opt.operatorNames !== null) {
			if (
				!Array.isArray(opt.operatorNames)
				|| opt.operatorNames.length === 0
				|| !opt.operatorNames.every(isNonEmptyString)
			) {
				throw new TypeError('opt.operatorNames must be an array of non-empty strings.');
			}
			// todo: is the an escaping mechanism for ","
			req.jnyFltrL.push(filter('INC', 'OP', opt.operatorNames.join(',')));
		}
		req.jnyFltrL = [...req.jnyFltrL, ...opt.additionalFilters];

		const {res, common} = await profile.request({profile, opt}, userAgent, {
			cfg: {polyEnc: 'GPA'},
			meth: 'JourneyMatch',
			req,
		});
		// todo [breaking]: catch `NO_MATCH` errors, return []
		const ctx = {profile, opt, common, res};

		const trips = res.jnyL.map(t => profile.parseTrip(ctx, t));

		return {
			trips,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {BoundingBox} param
	 * @param {RadarOptions} opt
	 */
	const radar = async ({north, west, south, east}, opt) => {
		if ('number' !== typeof north) {
			throw new TypeError('north must be a number.');
		}
		if ('number' !== typeof west) {
			throw new TypeError('west must be a number.');
		}
		if ('number' !== typeof south) {
			throw new TypeError('south must be a number.');
		}
		if ('number' !== typeof east) {
			throw new TypeError('east must be a number.');
		}
		if (north <= south) {
			throw new Error('north must be larger than south.');
		}
		if (east <= west) {
			throw new Error('east must be larger than west.');
		}

		/** @type {RadarOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			results: 256, // maximum number of vehicles
			duration: 30, // compute frames for the next n seconds
			// todo: what happens with `frames: 0`?
			frames: 3, // nr of frames to compute
			products: null, // optionally an object of booleans
			polylines: true, // return a track shape for each vehicle?
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
		}, opt || {});
		opt.when = new Date(opt.when || Date.now());
		if (Number.isNaN(Number(opt.when))) {
			throw new TypeError('opt.when is invalid');
		}

		const req = profile.formatRadarReq({profile, opt}, north, west, south, east);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!Array.isArray(res.jnyL)) {
			return [];
		}
		const ctx = {profile, opt, common, res};

		const movements = res.jnyL.map(m => profile.parseMovement(ctx, m));

		return {
			movements,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {Location} address
	 * @param {ReachableFromOptions} opt
	 */
	const reachableFrom = async (address, opt = {}) => {
		validateLocation(address, 'address');

		/** @type {ReachableFromOptions} */
		let target;
		// eslint-disable-next-line no-unused-vars
		opt = Object.assign(target = {
			/** @author Jürgen Bergmann
			 * Date.now() is no date */
			when: new Date(Date.now()),
			maxTransfers: 5, // maximum of 5 transfers
			maxDuration: 20, // maximum travel duration in minutes, pass `null` for infinite
			products: {},
			subStops: true, // parse & expose sub-stops of stations?
			entrances: true, // parse & expose entrances of stops/stations?
			polylines: false, // return leg shapes?
		}, opt);
		if (Number.isNaN(Number(opt.when))) {
			throw new TypeError('opt.when is invalid');
		}

		const req = profile.formatReachableFromReq({profile, opt}, address);

		const {res, common} = await profile.request({profile, opt}, userAgent, req);
		if (!Array.isArray(res.posL)) {
			throw new HafasError('invalid response, expected posL[0]', null, {
				shouldRetry: true,
			});
		}

		const byDuration = [];
		let i = 0, lastDuration = NaN;
		for (const pos of sortBy(res.posL, 'dur')) {
			const loc = common.locations[pos.locX];
			if (!loc) {
				continue;
			}
			if (pos.dur !== lastDuration) {
				lastDuration = pos.dur;
				i = byDuration.length;
				byDuration.push({
					duration: pos.dur,
					stations: [loc],
				});
			} else {
				byDuration[i].stations.push(loc);
			}
		}

		return {
			reachable: byDuration,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {RemarksOptions} opt
	 */
	const remarks = async (opt = {}) => {
		opt = {
			results: 100, // maximum number of remarks
			// filter by time
			from: Date.now(),
			to: null,
			products: null, // filter by affected products
			polylines: false, // return leg shapes? (not supported by all endpoints)
			...opt,
		};

		if (opt.from !== null) {
			opt.from = new Date(opt.from);
			validateWhen(opt.from, 'opt.from');
		}
		if (opt.to !== null) {
			opt.to = new Date(opt.to);
			validateWhen(opt.to, 'opt.to');
		}

		const req = profile.formatRemarksReq({profile, opt});
		const {
			res, common,
		} = await profile.request({profile, opt}, userAgent, req);

		const ctx = {profile, opt, common, res};
		const remarks = (res.msgL || [])
			.map(w => profile.parseWarning(ctx, w));

		return {
			remarks,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {string} query
	 * @param {LinesOptions} opt
	 */
	const lines = async (query, opt = {}) => {
		if (!isNonEmptyString(query)) {
			throw new TypeError('query must be a non-empty string.');
		}

		const req = profile.formatLinesReq({profile, opt}, query);
		const {
			res, common,
		} = await profile.request({profile, opt}, userAgent, req);

		if (!Array.isArray(res.lineL)) {
			return [];
		}
		const ctx = {profile, opt, common, res};
		const lines = res.lineL.map(l => {
			const parseDirRef = i => (res.common.dirL[i] || {}).txt || null;
			return {
				...omit(/** @type {Line} */(l.line), ['id', 'fahrtNr']),
				id: l.lineId,
				// todo: what is locX?
				directions: Array.isArray(l.dirRefL)
					? l.dirRefL.map(parseDirRef)
					: null,
				trips: Array.isArray(l.jnyL)
					? l.jnyL.map(t => profile.parseTrip(ctx, t))
					: null,
			};
		});

		return {
			lines,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	/**
	 *
	 * @param {ServerOptions} opt
	 */
	const serverInfo = async (opt = {}) => {
		opt = {
			versionInfo: true, // query HAFAS versions?
			...opt,
		};

		const {res, common} = await profile.request({profile, opt}, userAgent, {
			meth: 'ServerInfo',
			req: {
				getVersionInfo: opt.versionInfo,
			},
		});

		const ctx = {profile, opt, common, res};
		return {
			// todo: what are .serverVersion & .clientVersion?
			hciVersion: res.hciVersion || null,
			timetableStart: res.fpB || null,
			timetableEnd: res.fpE || null,
			serverTime: res.sD && res.sT
				? profile.parseDateTime(ctx, res.sD, res.sT)
				: null,
			realtimeDataUpdatedAt: res.planrtTS && res.planrtTS !== '0'
				? parseInt(res.planrtTS)
				: null,
		};
	};

	const client = {
		departures,
		arrivals,
		journeys,
		locations,
		stop,
		nearby,
		serverInfo,
	};
	if (profile.trip) {
		client.trip = trip;
	}
	if (profile.radar) {
		client.radar = radar;
	}
	if (profile.refreshJourney) {
		client.refreshJourney = refreshJourney;
	}
	if (profile.journeysFromTrip) {
		client.journeysFromTrip = journeysFromTrip;
	}
	if (profile.reachableFrom) {
		client.reachableFrom = reachableFrom;
	}
	if (profile.tripsByName) {
		client.tripsByName = tripsByName;
	}
	if (profile.remarks !== false) {
		client.remarks = remarks;
	}
	if (profile.lines !== false) {
		client.lines = lines;
	}
	Object.defineProperty(client, 'profile', {value: profile});
	return client;
};

export {
	createClient,
};
