const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for ['hi', 'two']", () => {
    assert.deepEqual(middle(['hi', 'two']), []); 
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns ['two', 'three'] for ['one', 'two', 'three', 'four']", () => {
    assert.deepEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']); 
  });


});
