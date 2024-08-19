//* this keyword - refers to object it belongs to, this value is determined entirely by how a function is called

function func() {
  console.log(this); // 'window' for browser and 'global' for node
}
func();

//* How to determine 'this'?
/**
 * 1. Implicit binding
 * 2. Explicit binding
 * 3. New binding
 * 4. Default binding
 *
 *  */

// #01. Implicit binding
const person = {
  name: "Vishwas",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName(); // My name is Vishwas

// #02. Explicit binding
const person2 = {
  name: "Arjun",
};

function sayMyName() {
  console.log(`Hello ${this.name}`);
}
sayMyName.call(person); // Hello Vishwas
sayMyName.apply(person2); // Hello Arjun

// #03. New binding
function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("John");
const p2 = new Person("Batman");

console.log(p1.name); // John
console.log(p2.name); // Batman

// #04. Default binding
const name = "Superman"; // this -> for browser

function sayMyName2() {
  console.log(`Hello ${this.name}`);
}

sayMyName2(); // Hello undefined

globalThis.name = "Superman"; // this -> for node
sayMyName2(); // Hello Superman

/**
 * Order of precedence ->
 * New binding
 * Explicit binding
 * Implicit binding
 * Default binding
 *
 */
