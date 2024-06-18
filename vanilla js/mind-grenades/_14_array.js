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

// #02.2 - shallow copy
let persons = [{name: 'John'}, {name: 'Steve'}]

let person_copy = [...persons]
person_copy[0].name = 'John Copy'
person_copy[1].age = 21

print(persons)
// Output: [{ name: 'John Copy' }, { name: 'Steve', age: 21 }];

// #03 - changing the length property
const a2 = [1, 2, 3];

const b2 = a2;

b2.length = 1;

console.log(a2); // [1]
console.log(b2); // [1]
console.log(b2[1]); // undefined
