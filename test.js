const test = require("ava")
const medianAverage = require(".")

test("main", t => {
	t.is(medianAverage([1, 2, 6]), 2)
	t.is(medianAverage([1, 2, 6, 8]), 4)
})
