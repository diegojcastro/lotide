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

const middle = function(arr) {
  let len = arr.length;
  if (len <= 2) return [];

  if (len % 2 === 1) return [arr[Math.floor(len / 2)]];
  else return [arr[(len / 2 - 1)], arr[(len / 2)]];
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(['hi', 'two']), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']);