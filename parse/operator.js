import slugg from 'slugg';

/**
 * @typedef {import("../types-private").DefaultProfile} DefaultProfile
 */

/** @type {DefaultProfile["parseOperator"]} */
const parseOperator = (ctx, a) => {
	const name = a.name && a.name.trim();
	if (!name) {
		return null;
	}
	return {
		type: 'operator',
		id: slugg(a.name), // todo: find a more reliable way
		name,
	};
};

export {
	parseOperator,
};
