'use strict'

const tapePromise = require('tape-promise').default
const tape = require('tape')

const createClient = require('..')
const rawProfile = require('../p/db')
const raw = require('./fixtures/db-unreachable-journey.json')
// const expected = require('./fixtures/db-unreachable-journey.js')

const test = tapePromise(tape)
const client = createClient(rawProfile, 'public-transport/hafas-client:test')
const {profile} = client

const opt = {
	results: null,
	via: null,
	stopovers: true,
	transfers: -1,
	transferTime: 0,
	accessibility: 'none',
	bike: false,
	tickets: true,
	polylines: true,
	remarks: true,
	walkingSpeed: 'normal',
	startWithWalking: true,
	scheduledDays: true,
	departure: '2019-09-03T20:20:00+02:00',
	products: {}
}

const isUnreachableRemark = (remark) => {
	const t = (remark.text || '').toLowerCase()
	return t.includes('may not be reached in time')
}

test('parses an unreachable journey correctly (DB)', (t) => {
	const common = profile.parseCommon(profile, opt, raw)
	const parseJourney = profile.parseJourney(profile, opt, common)
	const journey = parseJourney(common.outConL[0])

	t.ok(journey.remarks.some(isUnreachableRemark))
	t.ok(journey.legs[1].remarks.some(isUnreachableRemark))
	t.end()
})
