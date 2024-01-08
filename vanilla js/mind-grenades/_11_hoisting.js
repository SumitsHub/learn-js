greetings();

var greetings = function () {
  console.log('First greetings');
};

greetings();

function greetings() {
  console.log('Second greetings');
}

greetings();

// Output -
// Second greetings
// First greetings
// First greetings

// Explanation - function declaration not get's executed again

// Simlar Problem Below
sayHello();
function sayHello() {
  console.log('sayHello #1');
}

sayHello();
function sayHello() {
  console.log('sayHello #2');
}

sayHello();

// Output -
// sayHello #2
// sayHello #2
// sayHello #2

// Explanation - 2nd sayHello function overrides the fist one while hoisting, as they don't get created again everytimg 2nd function definition runs
