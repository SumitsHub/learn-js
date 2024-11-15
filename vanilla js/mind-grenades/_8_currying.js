//* function currying
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// Curried functions are constructed by chaining closures and by defining and immediately returning their inner functions simultaneously.

//* Problem #01 */
function add(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function inner(...innerArgs) {
    if (innerArgs.length === 0) {
      return sum;
    }
    sum += innerArgs.reduce((acc, val) => acc + val, 0);
    return inner;
  }

  return inner;
}

console.log("res #01", add(1, 2, 3)(2)(2)(2)(3)()); // res #01 15
console.log("res #02", add(1, 2, 3)()); // res #02 6
console.log("res #03", add(1, 2, 3)(0)()); // res #03 6

/* 
In this implementation:

- The add function initially calculates the sum of the provided arguments.
- It returns an inner function, which can also accept any number of arguments.
- When the inner function is called, it either adds the provided arguments to the sum or returns the current sum if no arguments are provided.
*/

// Explanation
// Initial Sum Calculation: The function starts with an initial sum of args.
// Recursive Accumulation: Each call to inner takes in new arguments, sums them, and adds them to sum.
// Final Call: When inner() is called with no arguments, it returns the accumulated sum

//* Problem #02 */

function add2(...args) {
  const sum = args.reduce((acc, val) => acc + val, 0);

  function addInner(...innerArgs) {
    return add2(...args, ...innerArgs);
  }

  addInner.valueOf = function () {
    return sum;
  };

  addInner.toString = addInner.valueOf;

  return addInner;
}

// Usage
const result1 = add2(1, 2, 3)(4, 5);
const result2 = add2(1, 2)(3, 4)(5, 5);
const result3 = add2(1, 2, 3)(4, 5, 6);

console.log(result1.valueOf()); // Output: 15
console.log(result2.valueOf()); // Output: 20
console.log(result3.valueOf()); // Output: 21

/* In this implementation:

- The add function calculates the sum of the provided arguments and returns an addInner function.
- The addInner function allows you to chain more arguments by recursively calling the add function with the accumulated arguments.
- The valueOf method of addInner returns the sum when you try to convert it to a primitive value.

*/


//* Problem #03 - concat numbers using currying 

function concat(...a) {
  return function(...b) {
   return function(...c) {
     return `${a.join('')}${b.join('')}${c.join('')}`
   }
  }
}

console.log(concat(1)(2)(3)); // 123

console.log(concat(1)(2,3)(4,5,6)); // 123456
console.log(concat(1,2,3)(4,5)(6)); // 123456