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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Test
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
const results2 = map(['Somebody', 'Once', 'Told', 'Me'], word => word.length);
assertArraysEqual(results2, [8, 4, 4, 2]);
const results3 = map([1,2,3,4,5], num => num * num);
assertArraysEqual(results3, [1, 4, 9, 16, 25]);