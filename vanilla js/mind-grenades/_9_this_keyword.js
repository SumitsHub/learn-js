//* In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

//* With arrow functions the this keyword always represents the object that defined the arrow function.

class DelayLogger {
  constructor(msg) {
    this.message = msg;
  }

  log() {
    console.log(this.message);
    setTimeout(function () {
      // this - Window
      console.log("#01", this.message);
    }, 1000);
  }

  log2() {
    setTimeout(() => {
      console.log("#02", this.message);
    }, 1000);
  }

  log3 = () => {
    console.log("#03", this.message);
  };
}

const logger = new DelayLogger("This is message");

logger.log(); // OUTPUT - #01 undefined
logger.log2(); // OUTPUT - #02 This is message
logger.log3(); // OUTPUT - #03 This is message

// Explanation- value this was not bind to function because of setTimeout
// Solution #1 - use arrow function
// Solution #2 - use .bind(this) to the callback function inside setTimeout

// IMPORTANT - following code snippets uses 'name' property -> for window object it's empty string whereas for Node.js where window object is not there it will be undefined

//* Problem #2 - What will be the output - regular function expression

const person = {
  name: "Bob",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello(); // Hello, Bob!

setTimeout(person.sayHello, 100); // Hello, ! -> this.name = "", this == window object

// bind this to regular function
setTimeout(person.sayHello.bind(person), 100); // Hello, Bob! -> regular function can have binding to this

//* Problem #03 - regular function shorthand

const person3 = {
  name: "Person #03",
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
};

person3.sayHello(); // Hello, Person #03!

setTimeout(person3.sayHello, 100); // Hello, ! -> referring to this object from outer lexical scope i.e. window object, since calling after some time using setTimeout

//* Problem #04 - Arrow function and this keyword
// With arrow functions the 'this' keyword always represents the object that defined the arrow function.

//* defining arrow function in global scope - object don't have scope?
// here function will refer to window object

const person2 = {
  name: "Bob",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

person2.sayHello(); // Hello, ! -> arrow function don't have this keyword - empty string because of window object's name property, else undefined

setTimeout(person2.sayHello, 100); // Hello, ! -> this.name = "", this == window object

//* defining arrow function inside regular function
function createObject() {
  const person = {
    name: "Bob",
    sayHello: () => {
      console.log(`Hello, ${this.name}!`);
    },
  };

  return person;
}
// passing value of this using .call method
let obj1 = createObject.call({ name: "Call function" });
obj1.sayHello(); // Hello, Call function! -> arrow function used this value of function where it was defined

//* #05 - Arrow function and 'call'

const printAge = () => {
  console.log("Age: ", this.age);
};

printAge.call({ age: 20 }); // Age:  undefined
// NOTE: Arrow function don't have binding to this keyword, always looks for outer environment where it was defined

// SOlution - use regular function
function printAge2() {
  console.log("Age: ", this.age);
}

printAge2.call({ age: 20 }); // Age:  20

//* 'this' keyword precedence
// 1. bind()
// 2. apply() and call()
// 3. Object method
// 4. Global scope

const person4 = {
  name: "Bob",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person4.sayHello
  .bind({ name: "Bind function" })
  .call({ name: "Call function!" }); // Hello, Bind function!
