// Math class - it's a static class

console.log(Math.trunc(2.455));

console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5*
console.log(Math.round(4.8)); // 5
console.log(Math.round(-4.4)); // -4
console.log(Math.round(-4.5)); // -4*
console.log(Math.round(-4.7)); // -5

console.log("Math.ceil");
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // -4*

console.log("Math.floor");
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
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(4, 3)); // 64
console.log(Math.abs(-98)); // 98

console.log(Math.sqrt(-64)); // NaN - cannot calculate square root of negative number

console.log("Math.min and Math.max");
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// using array
const arr = [200, 400, -209, 800, 23, -232];
console.log(Math.max(arr)); // NaN - can't pass array directly
console.log(Math.max(...arr)); // 800

console.log("Math.log");
console.log(Math.log(1)); // 0
console.log(Math.log(2));
console.log(Math.log(3) * Math.E);

console.log(Math.floor(Math.random() * 10) + 1);
