/**
 * Problem Statement: Rotate the by input number of elements.
 * Input: arr = [1, 2, 3, 4, 5], n = 2
 * Output: [3, 4 ,5, 1, 2]
 */

//* Solution #01 - using slice and push method
function rotateArray(arr, n) {
  let first = arr.slice(0, n);
  let last = arr.slice(n);

  last.push(...first);

  return last;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [ 3, 4, 5, 1, 2 ]
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // [ 4, 5, 1, 2, 3 ]

// TODO: implement using shift and push methods
