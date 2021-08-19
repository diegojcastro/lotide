const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let prop in obj) {
    if (callback(obj[prop])) return prop;
  }
  return undefined;
};


// Test
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"

assertEqual(findKey({
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
}, v => v > 3 ), "four");