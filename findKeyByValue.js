const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {

  for (let key in obj) {
    if (obj[key] === val) return key;
  }

  return undefined;

};


// Tests
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const testNums = {
  a: 5,
  b: 6,
  c: 7,
  d: "hello",
  e: 9
};
assertEqual(findKeyByValue(testNums, "hello"), "d");
assertEqual(findKeyByValue(testNums, 7), "c");