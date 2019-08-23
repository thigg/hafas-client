'use strict'

const scanner = require('object-scan')
const toPath = require('lodash/toPath')
const get = require('lodash/get')

const findIdxRefs = (tree, selector, onRef) => {
	const scan = scanner([selector])
	for (const pathStr of scan(tree)) {
		const path = toPath(pathStr)
		const val = get(tree, path)
		const parent = get(tree, path.slice(0, -1), {})
		onRef(val, parent, path)
	}
}

const resolveIdxRefs = (tree, selector, source, prop) => {
	findIdxRefs(tree, selector, (idx, parent) => {
		if ('number' === typeof idx) parent[prop] = source[idx]
	})
}

module.exports = {
	findIdxRefs,
	resolveIdxRefs
}
