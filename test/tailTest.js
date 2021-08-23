const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result.length, 2);
  });

  it("returns 'Lighthouse' for the first element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[0], 'Lighthouse');
  });

  it("returns 'Labs' for the second element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.equal(result[1], 'Labs');
  });

  it("does not modify the original array from which .tail() is called", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.equal(words.length, 3); // original array should still have 3 elements!
  });

});


// // Testing original array unmodified
// console.log("Testing original array is unmodified:");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!