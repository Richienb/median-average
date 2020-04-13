"use strict"

const numberSort = require("num-sort")
const meanAverage = require("mean-average")

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError("An array of numbers must be provided!")
	}

	if (array.length === 0) {
		return NaN
	}

	const sortedArray = array.sort(numberSort.ascending)

	if (sortedArray.length % 2 === 0) {
		return meanAverage([sortedArray[(sortedArray.length / 2) - 1], sortedArray[(sortedArray.length / 2)]])
	}

	return sortedArray[Math.floor(sortedArray.length / 2)]
}
