(function () {
  var a = (b = 'Hello World!');
  var c = 'Global C';
})();

console.log(b); // Output - "Hello World!"
// beacuse of variable declaration b becomes global variable

console.log(c); // Output - Reference Error
// because it was declared inside function

// #02
const PI = 3.14;
function test() {
  console.log(PI);
  const PI = 3.1;
}

test();
// OUPUT: Uncaught ReferenceError: Cannot access 'PI' before initialization
