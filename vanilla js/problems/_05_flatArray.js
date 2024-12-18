//** using iteration, not using recursion */

function flatArray(arr) {
  let stack = [...arr];
  let res = [];

  while (stack.length) {
    let item = stack.pop();
    if (Array.isArray(item)) stack.push(...item);
    else res.push(item);
  }
  return res.reverse(); //* need to reverse in the end
}

console.log(flatArray([1, [2, [3, 4, [5]]]])); // [ 1, 2, 3, 4, 5 ]
console.log(flatArray([1, [2, [3, 4, [5], 6, 7], 8], 9])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//** Using recursion*/
function flatArray2(inputArr) {
  let result = [];

  for (let arr of inputArr) {
    if (Array.isArray(arr)) {
      result.push(...flatArray2(arr)); //* need to use spread operator since function will return an array in the end
    } else {
      result.push(arr);
    }
  }
  return result;
}

console.log(flatArray2([1, [2, [3, 4, [5]]]])); // [ 1, 2, 3, 4, 5 ]
console.log(flatArray2([1, [2, [3, 4, [5], 6, 7], 8], 9])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//** Using recursion and argument */
function flatArray3(arr, res = []) {
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatArray3(val, res);
    } else {
      res.push(val);
    }
  }
  return res;
}

console.log("flatArray3", flatArray3([1, [2, [3, 4, [5]]]])); // flatArray3 [ 1, 2, 3, 4, 5 ]
console.log("flatArray3", flatArray3([1, [2, [3, 4, [5], 6, 7], 8], 9])); // flatArray3 [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//** Flat array with level of nesting - using Array.reduce() and recursion */

function flat(arr, level = 1) {
  if (level < 1) return arr;

  return arr.reduce((acc, cur) => {
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


//* with Array.reduce and no level
function flattenArray(arr) {
  return arr.reduce((acc, val) => {
      return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
  }, []);
}

// NOTE: used .concat method -> no need to use spread operator

const nestedArr = [1, [2, [3, 4], 5]];
console.log(flattenArray(nestedArr)); // Output: [1, 2, 3, 4, 5]
