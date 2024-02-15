/**
 * @typedef {import("../../types").AgeGroup} AgeGroup
 */

const ageGroup = {
	BABY: /** @type {AgeGroup} */('B'),
	CHILD: /** @type {AgeGroup} */('K'),
	YOUNG: /** @type {AgeGroup} */('Y'),
	ADULT: /** @type {AgeGroup} */('E'),
	SENIOR: /** @type {AgeGroup} */('S'),
	upperBoundOf: {
		BABY: 6,
		CHILD: 15,
		YOUNG: 27,
		ADULT: 65,
		SENIOR: Infinity,
	},
};

/**
 * @param {number} age
 * @returns {AgeGroup}
 */
const ageGroupFromAge = (age) => {
	const {upperBoundOf} = ageGroup;
	if (age < upperBoundOf.BABY) {
		return ageGroup.BABY;
	}
	if (age < upperBoundOf.CHILD) {
		return ageGroup.CHILD;
	}
	if (age < upperBoundOf.YOUNG) {
		return ageGroup.YOUNG;
	}
	if (age < upperBoundOf.ADULT) {
		return ageGroup.ADULT;
	}
	if (age < upperBoundOf.SENIOR) {
		return ageGroup.SENIOR;
	}
	throw new TypeError(`Invalid age '${age}'`);
};

export {
	ageGroup,
	ageGroupFromAge,
};
