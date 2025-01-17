console.log("".padStart(20, "*") + "JS Proxy Objects" + "".padEnd(20, "*"));

// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

const target = {
  message1: "hello",
  message2: "everyone",
};

const handler = {
  get() {},
  set: () => {},
  has: () => {},
};

const proxy1 = new Proxy(target, handler);

console.log(proxy1.message1); // undefined - get trap is empty(no operation defined)
// target - the original object which you want to proxy
// handler - an object that defines which operations will be intercepted and how to redefine intercepted operations

// Handler functions are sometimes called 'traps', presumably because they trap calls to the target object.

// 'Exotic' objects - objects whose internal methods have different implementations from 'ordinary' objects.
// Proxy enable developers to define their own exotic objects with full capacity.

// Object defines some internal methods specifying how it can be interacted with
// All internal methods are called by the language itself, and are not directly accessible in JavaScript code.
// Internal methods of Objects and corresponding proxy traps -
// [[GetPrototypeOf]] - getPrototypeOf()
// [[SetPrototypeOf]] - setPrototypeOf()
// [[IsExtensible]] - isExtensible()
// [[PreventExtensions]] - preventExtensions()
// [[GetOwnProperty]] - getOwnPropertyDescriptor()
// [[DefineOwnProperty]] - defineProperty()
// [[HasProperty]] - has()
// [[Get]] - get()
// [[Set]] - set()
// [[Delete]] - deleteProperty()
// [[OwnPropertyKeys]] - ownKeys()

// NOTE- internal methods are denoted using "double square brackets"

//* Reflect - calling object's internal method

const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

console.log(Reflect.has(duck, "color")); // true
console.log(Reflect.has(duck, "haircut")); // false

// Adding a new property to the object
let success = Reflect.set(duck, "eyes", "black"); // returns "true" if successful
console.log(success); // true
// "duck" now contains the property "eyes: 'black'"

console.log(Reflect.ownKeys(duck));
// [ "name", "color", "greeting", "eyes" ]

console.log(duck.eyes); // black
