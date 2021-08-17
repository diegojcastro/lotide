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

const without = function(source, itemsToRemove) {
  let finalArray = [];

  for (let item of source) {
    if (!itemsToRemove.includes(item))
      finalArray.push(item);
  }

  return finalArray;

};

// Test cases
const grossCandy = ["Gum", "Jolly Rancher", "Snickers", "Smarties", "M&Ms", "Toothpaste"];
const betterCandy = ["Jolly Rancher", "Snickers", "Smarties", "M&Ms"];

assertArraysEqual(betterCandy, without(grossCandy, ["Gum", "Toothpaste"]));

// Special test case to verify original array is not modified.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);