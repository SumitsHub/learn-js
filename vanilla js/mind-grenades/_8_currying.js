function add(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function inner(...innerArgs) {
    if (innerArgs.length === 0) {
      return sum;
    }
    sum += innerArgs.reduce((acc, val) => acc + val, 0);
    return inner;
  }

  return inner(...args);
}

console.log(add(1, 2, 3)(2)(2)(2)(3)());

/* 
In this implementation:

- The add function initially calculates the sum of the provided arguments.
- It returns an inner function, which can also accept any number of arguments.
- When the inner function is called, it either adds the provided arguments to the sum or returns the current sum if no arguments are provided.
*/

function add(...args) {
  const sum = args.reduce((acc, val) => acc + val, 0);

  function addInner(...innerArgs) {
    return add(...args, ...innerArgs);
  }

  addInner.valueOf = function () {
    return sum;
  };

  return addInner;
}

// Usage
const result1 = add(1, 2, 3)(4, 5);
const result2 = add(1, 2)(3, 4)(5, 5);
const result3 = add(1, 2, 3)(4, 5, 6);

console.log(result1); // Output: 15
console.log(result2); // Output: 20
console.log(result3); // Output: 21

/* In this implementation:

- The add function calculates the sum of the provided arguments and returns an addInner function.
- The addInner function allows you to chain more arguments by recursively calling the add function with the accumulated arguments.
- The valueOf method of addInner returns the sum when you try to convert it to a primitive value.

*/
