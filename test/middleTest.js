const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(['hi', 'two']), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']);