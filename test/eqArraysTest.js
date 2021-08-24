const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// Testing
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
// assertEqual(eqArrays([], []), true); // => should PASS
// assertEqual(eqArrays(["1"], [1]), false); // => should FAIL


// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
// assertEqual(eqArrays([[3],[4,5]], [[3],[4]]), false); // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false