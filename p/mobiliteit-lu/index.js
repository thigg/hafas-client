'use strict'

const products = require('./products')

const transformReqBody = (body) => {
	body.client = {
		type: 'IPH',
		id: 'HAFAS',
		v: '4000200',
		name: 'mobiliteit.luPROD',
		os: 'iPhone OS 9.3.5'
	}
	body.ver = '1.15'
	body.auth = {aid: 'Aqf9kNqJLjxFx6vv'}
	body.lang = 'de'

	return body
}

const insaProfile = {
	locale: 'de-DE',
	timezone: 'Europe/Berlin',
	endpoint: 'https://travelplanner.mobiliteit.lu/hafas/mgate.exe',
	transformReqBody,

	products: products,

	journeyLeg: true,
	radar: true
}

module.exports = insaProfile;
