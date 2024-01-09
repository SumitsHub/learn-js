// #01 - assignment to out of bound index

let arr = [0, 1, 2, 3];

arr[10] = 10;

console.log(arr[5]); // undefined
console.log(arr[10]); // 10
console.log(arr[11]); // undefined

// #02 - shallow copy
const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

// #03 - changing the length property
const a2 = [1, 2, 3];

const b2 = a2;

b2.length = 1;

console.log(a2); // [1]
console.log(b2); // [1]
console.log(b2[1]); // undefined
