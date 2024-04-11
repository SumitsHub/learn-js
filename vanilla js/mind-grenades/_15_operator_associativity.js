//* comparison operator
console.log(1 < 2 < 3); // true -> Left to Right associativity

console.log(3 > 2 > 1); // false -> Left to Right associativity
// 3 > 2 = true -> true > 1 -> 1 > 1 = false


//* assignment operator - Right to Left
let x = 1, y = 2, z = 3;

x = y
x = y = z

console.log(x, y, z); // Output: 3 3 3