const middle = function(arr) {
  let len = arr.length;
  if (len <= 2) return [];

  if (len % 2 === 1) return [arr[Math.floor(len / 2)]];
  else return [arr[(len / 2 - 1)], arr[(len / 2)]];
};

module.exports = middle;