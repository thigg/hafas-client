/**
 * @typedef {import("../types-private").DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["parseWhen"]} */
const parseWhen = (ctx, date, timeS, timeR, tzOffset, cncl = false) => {
	const parse = ctx.profile.parseDateTime;

	let planned = timeS
		? /** @type {string} */(parse(ctx, date, timeS, tzOffset, false))
		: null;
	let prognosed = timeR
		? /** @type {string} */(parse(ctx, date, timeR, tzOffset, false))
		: null;
	let delay = null;

	if (planned && prognosed) {
		const tPlanned = parse(ctx, date, timeS, tzOffset, true);
		const tPrognosed = parse(ctx, date, timeR, tzOffset, true);
		delay = Math.round((/** @type {number} */(tPrognosed) - /** @type {number} */(tPlanned)) / 1000);
	}

	if (cncl) {
		return {
			when: null,
			plannedWhen: planned,
			prognosedWhen: prognosed,
			delay,
		};
	}
	return {
		when: prognosed || planned,
		plannedWhen: planned,
		delay,
	};
};

export {
	parseWhen,
};
