//* mutating array param inside function
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

//* mutating object param inside function
function changeParam(obj) {
  obj.age = 23;
  console.log(arguments[0]); // { namee: 'ajay', age: 23 }
  return obj;
}

let val = { namee: "ajay" };

console.log(changeParam(val)); // { namee: 'ajay', age: 23 }

console.log(val); // { namee: 'ajay', age: 23 }
