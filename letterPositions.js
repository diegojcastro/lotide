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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (results[char]) results[char].push(i);
      else results[char] = [i];
    }
  }

  return results;
};

// Test
let testStr1 = "hello";
assertArraysEqual(letterPositions(testStr1).h, [0]);
assertArraysEqual(letterPositions(testStr1).e, [1]);
assertArraysEqual(letterPositions(testStr1).l, [2, 3]);
assertArraysEqual(letterPositions(testStr1).o, [4]);
let testStr2 = "another test";
assertArraysEqual(letterPositions(testStr2).t, [3, 8, 11]);