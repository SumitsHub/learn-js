// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

const counter = (initialValue = 0) => {
  let count = initialValue;
  return {
    inc: () => count++,
    dec: () => count--,
    value: count,
  };
};

let c = counter(5);
c.inc();
c.inc();
c.inc();
console.log(c.value);

c.dec();
console.log(c.value);
