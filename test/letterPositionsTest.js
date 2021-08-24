const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions()", () => {
  it('should return the correct index for a letter found once', () => {
    const testStr1 = "hello";
    assert.deepEqual(letterPositions(testStr1).h, [0]);
  })

  it('should return the correct indexes for a letter found twice', () => {
    const testStr1 = "hello";
    assert.deepEqual(letterPositions(testStr1).l, [2,3]);
  })

  it('should return the correct indexes for a letter multiple times, accounting for spaces', () => {
    const testStr1 = "another test";
    assert.deepEqual(letterPositions(testStr1).t, [3, 8, 11]);
  })
})
