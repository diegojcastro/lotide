// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');

// Ignoring the ones for which I haven't refactored in an export
module.exports = {
  head,
  tail,
  middle,
  flatten,
  countOnly,
  letterPositions,
  findKeyByValue,
  eqObjects,
  eqArrays
};