const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects()", () => {
  it('should return true when objects have same k,v pairs in different orders', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true); // => true
  })

  it('should return false when one object has additional keys', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), false); // => false
  })

  it('should return true when the value of object keys is an array', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true); // => true
  })

  it('should return false when the array values of two object keys do not match', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), false); // => false
  })


})