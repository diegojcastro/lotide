const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed! ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed! ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const noSpaces = sentence.split(' ').join('');
  if (noSpaces.length === 0) return {};

  const letterTotals = {};
  for (let char of noSpaces) {
    if (letterTotals[char]) letterTotals[char] += 1;
    else letterTotals[char] = 1;
  }

  return letterTotals;

};

// Helper testing function
const stringifyLetterCount = function(countObj) {
  let output = '';
  for (let letter in countObj) {
    output += letter;
    output += countObj[letter];
  }

  return output;
};

// Test:
let test1 = countLetters("hello");
let test2 = countLetters(" hel lo");
let test3 = countLetters("abcdefggg");

assertEqual(stringifyLetterCount(test1), 'h1e1l2o1');
assertEqual(stringifyLetterCount(test2), 'h1e1l2o1');
assertEqual(stringifyLetterCount(test3), 'a1b1c1d1e1f1g3');