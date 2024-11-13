//* defining global variable inside function - without using any keyword
(function () {
  var a = (b = 'Hello World!');
  var c = 'Global C';
})();

console.log(b); // Output - "Hello World!"
// because of variable declaration b becomes global variable

// console.log(c); // Output - Reference Error
// because it was declared inside function - var has function scope

// #02 - variable hoisting declared with const keyword (Temporal Dead Zone)
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
// SyntaxError: Identifier 'a' has already been declared, no compile time error because 'var' allows re-declaration of variable
// if used 'let' before var then it will give compile time error