const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const eqObjects = function(object1, object2) {
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  for (let key in object2) {
    if (Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed! ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`❌❌❌ Assertion Failed! ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST
let obj1 = {a:1, b:2};
let obj2 = {a:1, b:2};
let diffObj = {a:1, b:2, c:3};
assertObjectsEqual(obj1, obj2);
assertObjectsEqual({a:[1, 2], b:[3, 4]}, {b: [3, 4], a: [1, 2]});
console.log("Next one should fail:");
assertObjectsEqual(obj1, diffObj);