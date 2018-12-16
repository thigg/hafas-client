'use strict'

const createClient = require('../../')
const dbProfile = require('.')

const client = createClient(dbProfile, 'hafas-client-example')

// Berlin Jungfernheide to München Hbf
// client.journeys('8011167', '8000261', {results: 1}})
// client.departures('8011167', {duration: 1})
// client.arrivals('8011167', {duration: 10, stationLines: true})
// client.locations('frankfurt hbf', {results: 3})
// client.locations('Atze Musiktheater', {poi: true, addressses: false, fuzzy: false})
// client.station('8000309') // Regensburg Hbf
// client.nearby({
// 	type: 'location',
// 	latitude: 52.4751309,
// 	longitude: 13.3656537
// }, {results: 1})
// client.reachableFrom({
// 	type: 'location',
// 	address: '13353 Berlin-Wedding, Torfstr. 17',
// 	latitude: 52.541797,
// 	longitude: 13.350042
// }, {
// 	when: new Date('2018-08-27T10:00:00+0200'),
// 	maxDuration: 50
// })
client.radar({
	// around Berlin Hbf
	north: 52.528010, west: 13.359856,
	south: 52.522728, east: 13.377594
}, {results: 20})

// .then((data) => {
// 	const leg = data[0].legs.find(l => l.line)
// 	return client.trip(leg.id, leg.line.name, {stopovers: true})
// })

.then((data) => {
	console.log(data)
	// console.log(require('util').inspect(data, {depth: null, colors: true}))
}, console.error)
