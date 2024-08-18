//? Spread properties

let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let obj1Copy = obj1; // both references to the same

let clonedObj = { ...obj1 }; // both references to different
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

//? delete property
//* Return value - true for all cases except when the property is an own non-configurable property, in which case false is returned in non-strict mode.
// console.log(delete obj1.foo); // deletes from obj1Copy too
// console.log(obj1, clonedObj, obj1Copy);

let arr = ["Sumit", "Amit", "Ashish"];
console.log(delete arr[0]);
console.log(arr); // [empty, 'Amit', 'Ashish']
console.log(arr.length); // 3 - length remains same
console.log(arr[0]); // undefined

// delete with prototype property
let obj3 = Object.create({
  length: 10,
  print() {
    "This is an object prototype method!";
  },
});
console.log(delete obj3.length); // true
console.log(obj3); // {} with original prototype

//? Object Constructor
let newObj = new Object(obj1); // same as -> newObj = obj1
delete obj1.foo; // deletes from newObj too
console.log(newObj); // {x: 42}
