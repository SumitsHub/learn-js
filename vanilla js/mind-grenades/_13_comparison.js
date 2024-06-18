let arr = [1,2,3];
let str = "1,2,3";

let arr2 = [1,2,3];

console.log(arr == str); // true
console.log(str == arr); // true

// console.log(arr === [1,2,3]); // false

console.log(arr === arr2);


console.log(1 == '1'); // true
console.log(0 == 2*0); // true

console.log(JSON.stringify('JS') === 'JS'); // false
// stringify adds an additional string quote
