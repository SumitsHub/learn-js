/** Closures in JS */

function greet(greeting) {
  return function (name) {
    console.log(greeting + " " + name);
  };
}

var sayHello = greet("Hello");
sayHello("John"); // Output - Hello John

greet("Hi")("Mike"); // Output - Hi Mike

function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
// Explanation - functions get's pushed to array, they didn't execute and when they do value of var i is 3, this is happening due to use of var as it has global scope

function buildFuncs() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

fs = buildFuncs();
fs[0](); // 0
fs[1](); // 1
fs[2](); // 2
// Explanation -> let keyword has block scope
