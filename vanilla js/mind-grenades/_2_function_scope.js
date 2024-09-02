//* defining global variable inside function - without using any keyword
(function () {
  var a = (b = 'Hello World!');
  var c = 'Global C';
})();

console.log(b); // Output - "Hello World!"
// because of variable declaration b becomes global variable

// console.log(c); // Output - Reference Error
// because it was declared inside function

// #02 - variable hoisting declared with const keyword
const PI = 3.14;
function test() {
  console.log(PI);
  const PI = 3.1;
}

// test();
// OUTPUT: Uncaught ReferenceError: Cannot access 'PI' before initialization

//*  #03 - declaring variable with var and let in same scope

const func = ()=> {
  var a = 10;
  let a = 50;
  console.log(a); 
}

// func(); 
// SyntaxError: Identifier 'a' has already been declared