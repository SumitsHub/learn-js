//** 3 ways to make object immutable */

let obj = { firstName: "Sikandar" };

Object.preventExtensions(obj);
// Prevents the addition of new properties
// Existing properties can be modified

obj.firstName = "Joubi";
console.log(obj.firstName);

obj.lastName = "Habibi"; // No Error
console.log(obj); // Output: {firstName: 'Joubi'}
console.log(delete obj.firstName); // true
console.log(obj); // {}

// Object.seal - In JavaScript, Object.seal() is a method that seals an object, preventing new properties from being added and marking all existing properties as non-configurable. This means you can't add, remove, or configure properties on a sealed object.
// Non-configurable - means you can't change their attributes using methods like Object.defineProperty()

let obj2 = { firstName: "Sikandar" };
Object.seal(obj2);

obj2.firstName = "Chambi"; // *IMP: With Object.seal(), you can still modify the values of existing properties.
console.log(obj2); // {firstName: 'Chambi'}
console.log(delete obj2.firstName); // false
console.log(obj2); // {firstName: 'Chambi'}


//* NOTE: preventExtensions allow deleting existing property while Object.seal don't

// Object.freeze -

let obj3 = { firstName: "Sikandar" };
Object.freeze(obj3);
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

obj3.firstName = "Chambi";
console.log(obj3); // {firstName: 'Sikandar'}
