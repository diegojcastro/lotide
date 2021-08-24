const assert = require("chai").assert;
const flatten = require("../flatten");

describe("#flatten()", () => {
  it('should flatten a 1-level array', () => {
    const embeddedTestOne = [1, 2, [3, 4, 5], 6];
    const targetTestOne = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(embeddedTestOne), targetTestOne);
  })

  it('should flatten a 2-level array', () => {
    const doubleEmbeddedTestTwo = [1, 2, [3, 4, [5, 6], 7], 8];
    const targetTestTwo = [1, 2, 3, 4, 5, 6, 7, 8];
    assert.deepEqual(flatten(doubleEmbeddedTestTwo), targetTestTwo);
  })

  it('should flatten a 4-level array', () => {
    const quadEmbedTestThree = [1, [2, [3, [4, 5], 6], 7], 8, 9];
    const targetTestThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.deepEqual(flatten(quadEmbedTestThree), targetTestThree);
  })

  it('should recognize unflattened arrays as unequal', () => {
    const quadEmbedTestThree = [1, [2, [3, [4, 5], 6], 7], 8, 9];
    const targetTestThree = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.notDeepEqual(quadEmbedTestThree, targetTestThree);
  })


  
});
