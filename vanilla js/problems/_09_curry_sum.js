/**
 * Problem #01
 * Implement a function that call infinite time and can make sum of args (currying)
 *
 * Ex:
 * sum(2)
 */

function sum(a) {
  return function curry(b) {
    if (b === undefined) return a;
    else return sum(a + b);
  };
}

console.log(sum(2)(3)(4)()); // 9
console.log(sum(3)(4)(5)(6)(7)()); // 25

/**
 * Problem #02
 *
 * The curried function should allow arguments to be passed incrementally until the number of arguments equals or exceeds the original function's arity (number of parameters), at which point it should return the result of calling func.
 *
 * function add(a, b, c) {<<<< 3
 *  return a+b+c;
 * }
 *
 * const curriedAdd = curry(add);
 * console.log(curriedAdd(1)(2)(3)); // Output: 6
 * console.log(curriedAdd(1, 2)(3)); // Output: 6
 * console.log(curriedAdd(1)(2, 3)); // Output: 6
 *
 */

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function nestedCurry(...params) {
        return curried(...args, ...params);
      };
    }
  };
}

//* NOTES:
// 'func.length' -> number of arguments of function
// Concept -> if number of arguments matched then call the input function else return another function combining arguments

//* Test Case Runs
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
