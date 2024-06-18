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

//* altering the position of function declaration and assignment
greetings();

function greetings() {
  console.log('Second greetings');
}

greetings();

var greetings = function () {
  console.log('First greetings');
};

greetings();

// Output:
// Second greetings
// Second greetings
// First greetings

// Explanation - function takes precedence over variable declaration in hoisting

//* Similar Problem Below
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


//* Accessing variable outside function
function useVar() {
  console.log(B);
}

let B = 20;
useVar(); // 20