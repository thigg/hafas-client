'use strict'

const isRoughlyEqual = require('is-roughly-equal')
const {DateTime} = require('luxon')
const a = require('assert')
const {join} = require('path')
const tape = require('tape')

const hour = 60 * 60 * 1000
const day = 24 * hour
const week = 7 * day

// next Monday 10 am
const createWhen = (timezone, locale) => {
	return DateTime.fromMillis(Date.now(), {
		zone: timezone,
		locale,
	}).startOf('week').plus({weeks: 1, hours: 10}).toJSDate()
}

const assertValidWhen = (actual, expected, name) => {
	const ts = +new Date(actual)
	a.ok(!Number.isNaN(ts), name + ' is not parsable by Date')
	// the timestamps might be from long-distance trains
	a.ok(isRoughlyEqual(day + 6 * hour, +expected, ts), name + ' is out of range')
}

// HTTP request mocking
if (process.env.VCR_MODE && !process.env.VCR_OFF) {
	const replayer = require('replayer')
	replayer.configure({
		headerWhitelist: [
			'Content-Type', 'Accept-Encoding', 'Accept',
		],
		includeHeaderValues: true,
		touchHits: false,
	})
	replayer.fixtureDir(join(__dirname, '..', 'fixtures'))
}
const test = tape

module.exports = {
	hour, createWhen, assertValidWhen,
	test,
}
