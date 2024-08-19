//* Function Currying
// Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

function sum(a, b, c) {
  return a + b + c;
}

function currySum(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = currySum(sum)(1)(2)(3);
console.log(curriedSum); // 6

const curriedSum2 = currySum(sum);
console.log(curriedSum2(2)(3)(5)); // 10

const add2 = curriedSum2(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5); // 10
