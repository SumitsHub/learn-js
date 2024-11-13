//* #01 - mutating array param inside function
function mutateArray(arr) {
  arr.push(5);
  arr = 1;
  return arr;
}

let list = [1, 2, 3, 4];
mutateArray(list);
console.log(list); // [1, 2, 3, 4, 5]

list = mutateArray(list);
console.log(list); // 1

//* #02 - mutating object param inside function
function changeParam(obj) {
  obj.age = 23;
  console.log(arguments[0]); // { namee: 'ajay', age: 23 }
  return obj;
}

let val = { namee: "ajay" };

console.log(changeParam(val)); // { namee: 'ajay', age: 23 }

console.log(val); // { namee: 'ajay', age: 23 }

//* #03 - changing 'arguments' keyword inside function
/** non strict mode - modifying 'arguments' keyword is allowed */
function test(obj) {
  arguments[0].age = 12;
  console.log(arguments[0]);
}

let ob = {};
test(ob);
console.log(ob);

// { age: 12 }
// { age: 12 }

/** strict mode - modifying 'arguments' keyword is allowed */
("use strict");
function test2(obj) {
  arguments[0].age = 123;
  console.log(arguments[0]);
}

let ob2 = {};
test2(ob2);
console.log(ob2);

// { age: 123 }
// { age: 123 }


//* 04 - changing object argument in different ways inside function

function changeArg(obj) {
  // #01 - normal/direct assignment
  // obj = obj;

  // #02 - using spread operator
  obj = { ...obj };

  obj.newProp = "New Prop";
}

let person = { name: "Micheal", birth: { year: 1990, month: 1, day: 20 } };
console.log(person); // { name: 'Micheal', birth: { year: 1990, month: 1, day: 20 } }
changeArg(person);
console.log(person);
// #01 - { name: 'Micheal', birth: { year: 1990, month: 1, day: 20 }, newProp: 'New Prop' }
// #02 - { name: 'Micheal', birth: { year: 1990, month: 1, day: 20 } } -> NOT CHANGED
