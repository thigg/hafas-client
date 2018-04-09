'use strict'

const createClient = require('../..')
const mobiliteitProfile = require('.')

const client = createClient(mobiliteitProfile)

// from Mersch to Bruxelles Central
// client.journeys('160904001', '300000079', {results: 1})
client.departures('160904001', { duration: 5 })
// client.locations('mersch', {results: 3})
// client.location('160904001') // Mersch
// client.nearby({
// 	type: 'location',
// 	latitude: 49.7523,
// 	longitude: 6.1103
// }, {distance: 500})
// client.radar({
// 	north: 49.9,
// 	west: 6.11,
// 	south: 49.7,
// 	east: 6.13
// }, {results: 10})

// .then(([journey]) => {
// 	const leg = journey.legs[0]
// 	return client.journeyLeg(leg.id, leg.line.name)
// })

.then(data => {
	console.log(require('util').inspect(data, { depth: null }))
})
.catch(console.error)
