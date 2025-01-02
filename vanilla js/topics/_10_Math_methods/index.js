// Math class - it's a static class

console.log(Math.trunc(2.455)); // 2 - remove fractional part and return integral part of input number

console.log("Math.round"); // round to nearest integer
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5* (for positive numbers, if fractional part is >= 0.5, then round up)
console.log(Math.round(4.8)); // 5
console.log(Math.round(-4.4)); // -4
console.log(Math.round(-4.5)); // -4* (for negative numbers, if fractional part is >= 0.5, then round down)
console.log(Math.round(-4.7)); // -5

console.log("Math.ceil"); // smallest integer greater than or equal to its numeric argument
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // -4*

console.log("Math.floor"); // largest integer less than or equal to its numeric argument
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2)); // -5*

console.log("Math.trunc"); // remove fractional part and return integral part of input number
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.7)); // 4
console.log(Math.trunc(4.4)); // 4
console.log(Math.trunc(4.2)); // 4
console.log(Math.trunc(-4.2)); // -4

console.log("Math.sign"); // returns sign of input number, -1 for negative, 1 for positive and 0 for neutral
console.log(Math.sign(-4)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(4)); // 1
console.log(Math.sign(null)); // 0

console.log("Math.sqrt, Math.abs, Math.pow");
console.log(Math.sqrt(64)); // 8 - square root of 64
console.log(Math.pow(4, 3)); // 64 - 4^3 = 4*4*4 = 64
console.log(Math.abs(-98)); // 98 - absolute value of -98

console.log(Math.sqrt(-64)); // NaN - cannot calculate square root of negative number

console.log("Math.min and Math.max");
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// using array
const arr = [200, 400, -209, 800, 23, -232];
console.log(Math.max(arr)); // NaN - can't pass array directly, spread it
console.log(Math.max(...arr)); // 800

console.log("Math.log"); // natural logarithm of a number
console.log(Math.log(1)); // 0
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(3) * Math.E); // 3

// random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);
