//* Problem Statement -
// Given an array of numbers. Create another array that contains the product of all the members in the array except the current element.
// For example, if you have an array of 3 elements such as:  A[0] = 2, A[1] = 4, A[2] = 6. Then the resulting array will be B[0] = 24, B[1] = 12, B[2] = 8. i.e A = [2, 4, 6] , B = [24, 12, 8]

// Solution -
let array = [2, 4, 6];

let res = array.map(
  (ele, _, arr) => arr.reduce((acc, curr) => acc * curr) / ele
);

console.log(res); // [ 24, 12, 8 ]
