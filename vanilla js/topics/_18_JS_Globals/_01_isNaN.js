//* Global isNaN() method
// In JavaScript NaN is short for "Not-a-Number".
// The isNaN() method returns true if a value is NaN.
// The isNaN() method converts the value to a number before testing it.

console.log(isNaN(123)); // false
console.log(isNaN(-1.23)); // false
console.log(isNaN(5 - 2)); // false
console.log(isNaN(0)); // false

console.log(isNaN("123")); // false
console.log(isNaN("Hello")); // true
console.log(isNaN("2005/12/12")); // true

console.log("*".repeat(20));

//* Number.isNaN()
// In JavaScript, NaN is short for "Not-a-Number".
// In JavaScript, NaN is a number that is not a legal number.
// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.

console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(-1.23)); // false
console.log(Number.isNaN(5 - 2)); // false
console.log(Number.isNaN(0)); // false

console.log(Number.isNaN("123")); // false
console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN("2005/12/12")); // false

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined * 2)); // true

//* Difference between global isNaN and Number.isNaN
