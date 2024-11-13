// #01 Problem Statement -> if the constructor function gets invoked without new keyword then throw error
// Solution #1 -> using strict mode -> set 'this' to undefined in strict mode
// "use strict";

function Person() {
  //   console.log(this); // 'undefined' in strict mode
  // Solution #2 -> using target property of new keyword which refers to function itself
  console.log(new.target); // undefined -> if not used 'new'
  if (!new.target) {
    throw Error("Constructor function must be invoked with new keyword");
  }

  // Solution #3 -> comparing with 'window' object, when new keyword not used this refers to window object otherwise function itself (considering JS will run into browser)
  //   if (this == window) {
  //     throw Error("Constructor function must be invoked with new keyword");
  //   }
  this.firstName = "John";
}
try {
  Person();
} catch (error) {
  console.log("Works");
}

// #02 - Guess the output
function Animal() {
  this.name = "Dog";

  return { name: "Lion" };
}

const animal = new Animal();
console.log(animal); // { name: 'Lion' }

//* Concept - if constructor function returns an 'object' explicitly then that object will be returned when invoked using new keyword

// #03 - Guess the output
function Animal2() {
  console.log(this); // Animal2 {} -> when invoked with 'new' keyword, whatever we add gets added to this empty object

  this.name = "Dog";

  return "Some String Value";
}

const animal2 = new Animal2();
console.log(animal2); // { name: 'Dog' }

//* Concept - if constructor function returning anything else than object then 'this' object is returned by the function when invoked with new keyword
