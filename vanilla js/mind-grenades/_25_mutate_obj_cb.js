//* mutate array inside forEach loop
let arr = [1, 2, 3];

arr.forEach((val, index, array) => {
  val = 100; // assigning different value -> don't mutate original array
  console.log(val);
});
// Output:
// 100
// 100
// 100

console.log(arr); // [ 1, 2, 3 ]

//* Mutating object inside array inside map callback -> mutates array elements
let obArr = [{ a: 1 }, { a: 2 }];
obArr.map((val, i, arr) => {
  val.a = 20;
  console.log(val);
  val = { b: 12 }; // no effect, assignment inside function creates separate memory, no change to passes parameter
});

// { a: 20 }
// { a: 20 }
console.log(obArr); // [ { a: 20 }, { a: 20 } ]

console.log("*".repeat(20));

//* trying to change length of array inside callback -> changes the array since we are changing property of an array
obArr = [{ a: 1 }, { a: 2 }];
obArr.forEach((val, index, array) => {
  array.length = 0;
  console.log(val);
});
// Output:
// { a: 1 }
console.log(obArr); // []
