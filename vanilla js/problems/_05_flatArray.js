//** In this implementation order doesn't matter */

function flatArray(arr) {
  let stack = [...arr];
  let res = [];

  while (stack.length) {
    let item = stack.pop();
    if (Array.isArray(item)) stack.push(...item);
    else res.push(item);
  }
  return res;
}

console.log(flatArray([1, [2, [3, 4, [5]]]])); // [ 5, 4, 3, 2, 1 ]
console.log(flatArray([1, [2, [3, 4, [5], 6, 7], 8], 9])); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

//** Using recursion */
function flatArray2(inputArr) {
  let result = [];

  for (let arr of inputArr) {
    if (Array.isArray(arr)) {
      result.push(...flatArray2(arr));
    } else {
      result.push(arr);
    }
  }
  return result;
}

console.log(flatArray2([1, [2, [3, 4, [5]]]])); // [ 1, 2, 3, 4, 5 ]
console.log(flatArray2([1, [2, [3, 4, [5], 6, 7], 8], 9])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//** Flat array with level of nesting */

function flat(arr, level = 1) {

  if (level < 1) return arr;

  return arr.reduce((acc, cur)=>{  
    if (Array.isArray(cur)) {
      acc.push(...flat(cur, level - 1));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(flat(nestedArray)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flat(nestedArray, 1)); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(flat(nestedArray, 2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(flat(nestedArray, Infinity)); // [ 1, 2, 3, 4, 5, 6 ]
