const numbers = [1, 3, 5, 4, 7, 2, 6, 5, 11, 33];

Array.prototype.sortedUnique = function () {
  let set = [...new Set(this)].sort((a, b) => a - b);

  return set;
};

console.log(numbers.sortedUnique());  // [ 1, 2,  3,  4, 5, 6, 7, 11, 33 ] 
