/**
 * @typedef {import("../types-private").DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["formatLinesReq"]} */
const formatLinesReq = (ctx, query) => {
	return {
		meth: 'LineMatch',
		req: {
			input: query,
		},
	};
};

export {
	formatLinesReq,
};
