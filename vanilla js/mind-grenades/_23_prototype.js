//* #01. Guess the Output

function getName1() {
  console.log(this.name);
}

Object.prototype.getName2 = () => {
  console.log(this.name);
};

// Object.prototype.getName2 = function () {
//   console.log(this.name);
// };

let personObj = {
  name: "Tony",
  print: getName1,
};

personObj.print(); // Tony
personObj.getName2(); // undefined -> 'getName2' is prototype method(arrow function, points to Object 'this' not personObj 'this') of Object class and not of personObj, hence 'this' refers to Object not personObj

console.log(personObj instanceof Object); // true

Object.prototype.name = "John";
personObj.getName2(); // John

personObj.__proto__.getName3 = () => {
  console.log("3", this.name);
};

personObj.getName3(); // 3 John
