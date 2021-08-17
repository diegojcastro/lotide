const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ?
    console.log(`✅✅✅ Assertion Passed! ${arr1} === ${arr2}`) :
    console.log(`❌❌❌ Assertion Failed! ${arr1} !== ${arr2}`);
};

const flatten = function(input) {
  let finalArray = [];
  for (let elem of input) {
    Array.isArray(elem) ? flattenIntoArray(elem, finalArray) : finalArray.push(elem);
  }
  return finalArray;
};

// Helper function for flatten()
const flattenIntoArray = function(input, targetArray) {
  for (let elem of input) {
    Array.isArray(elem) ? flattenIntoArray(elem, targetArray) : targetArray.push(elem);
  }
};

// Test code for 1-level flatten
let embeddedTestOne = [1, 2, [3, 4, 5], 6];
let targetTestOne = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(embeddedTestOne), targetTestOne);

// Test code for 2-level flatten
let doubleEmbeddedTestTwo = [1, 2, [3, 4, [5, 6], 7], 8];
let targetTestTwo = [1, 2, 3, 4, 5, 6, 7, 8];
assertArraysEqual(flatten(doubleEmbeddedTestTwo), targetTestTwo);

// Four-level embedded
let quadEmbedTestThree = [1, [2, [3, [4, 5], 6], 7], 8, 9];
let targetTestThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
assertArraysEqual(flatten(quadEmbedTestThree), targetTestThree);

// The last two tests should fail
console.log("The following should FAIL:");
assertArraysEqual(quadEmbedTestThree, targetTestThree);
assertArraysEqual(embeddedTestOne, targetTestOne);