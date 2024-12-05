// #01 - assignment to out of bound index

let arr = [0, 1, 2, 3];

arr[10] = 10;

console.log(arr[5]); // undefined
console.log(arr[10]); // 10
console.log(arr[11]); // undefined

// #02.1 - shallow copy
const a = [1, 2, 3];

const b = a;

b.push(4);

console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]

// #02.2 - shallow copy (nested object - object inside array)
let persons = [{name: 'John'}, {name: 'Steve'}]

let person_copy = [...persons]; // spread operator creates shallow copy of nested object
person_copy[0].name = "John Copy";
person_copy[1].age = 21;

console.log(persons);
// Output: [{ name: 'John Copy' }, { name: 'Steve', age: 21 }];

// #03 - changing the length property
const a2 = [1, 2, 3];

const b2 = a2;

b2.length = 1;

console.log(a2); // [1]
console.log(b2); // [1]
console.log(b2[1]); // undefined


//* #04 - empty spaces
let arr2 = [];

arr2[10] = 10;
console.log(arr2.length); // 11
arr2.forEach((val, ind, arr) => {
  console.log("forEach", val, ind, arr);
});

// Output:
// 11
// forEach 10 10 (11) [empty × 10, 10] - executed only one time

// same array with map()
let mappedArr = arr2.map((val, ind, arr) => {
  console.log("map", val, ind, arr);
  return val;
});
// Output:
// map 10 10 (11) [empty × 10, 10] - executed only once - similar to forEach

console.log(mappedArr); // [empty × 10, 10]

//* #05 Array.sort()
console.log([2, 8, 15, 16, 23, 42].sort()); // [ 15, 16, 2, 23, 42, 8 ]
// Using String with .call method -> gives Error
// console.log(new Array().sort.call("String")); 
// TypeError: Cannot assign to read only property '0' of object '[object String]'