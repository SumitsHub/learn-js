class DelayLogger {
  constructor(msg) {
    this.message = msg;
  }

  log() {
    setTimeout(function () {
      console.log(this.message);
    }, 1000);
  }
}

const logger = new DelayLogger("This is message");

logger.log(); // OUTPUT - undefined

// Explanation- value this was not bind to function because of setTimeout
// Solution #1 - use arrow function
// Solution #2 - use .bind(this) to the callback function inside setTimeout

// IMPORTANT - following code snippets uses 'name' property -> for window object it's empty string whereas for Node.js where window object is not there it will be undefined

//* Problem #2 - What will be the output

const person = {
  name: "Bob",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

person.sayHello(); // Hello, Bob!

setTimeout(person.sayHello, 100); // Hello, ! -> this.name = "", this == window object

//* Problem #03

const person3 = {
  name: "Person #03",
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
};

person3.sayHello(); // Hello, Person #03!

setTimeout(person3.sayHello, 100); // Hello, ! -> this.name = "", this == window object

//* Problem #04 - Arrow function and this keyword

const person2 = {
  name: "Bob",
  sayHello: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

person2.sayHello(); // Hello, ! -> arrow function don't have this keyword

setTimeout(person2.sayHello, 100); // Hello, ! -> this.name = "", this == window object

//* #05 - Arrow function and 'call'

const printAge = () => {
  console.log("Age: ", this.age);
};

printAge.call({ age: 20 }); // Age:  undefined
// NOTE: Arrow function don't have binding to this keyword

// SOlution - use regular function
function printAge2() {
  console.log("Age: ", this.age);
}

printAge2.call({ age: 20 }); // Age:  20
