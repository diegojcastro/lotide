const flatten = function(input) {
  let finalArray = [];
  for (let elem of input) {
    Array.isArray(elem) ? flattenIntoArray(elem, finalArray) : finalArray.push(elem);
  }
  return finalArray;
};

// Helper function for flatten()
const flattenIntoArray = function(input, targetArray) {
  for (let elem of input) {
    Array.isArray(elem) ? flattenIntoArray(elem, targetArray) : targetArray.push(elem);
  }
};

module.exports = flatten;