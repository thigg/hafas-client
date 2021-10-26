'use strict'

const formatStopReq = (ctx, stopRef) => {
	return {
		// todo: there's also `StationDetails`, are there differences?
		meth: 'LocDetails',
		req: {
			locL: [stopRef]
		}
	}
}

module.exports = formatStopReq
