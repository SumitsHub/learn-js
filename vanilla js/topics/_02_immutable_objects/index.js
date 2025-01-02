//** 3 ways to make object immutable */

let obj = { firstName: "Sikandar" };

Object.preventExtensions(obj); // Prevents the addition of new properties to an object, but allows the modification of existing properties.

obj.firstName = "Joubi";
console.log(obj.firstName); // Output: Joubi

obj.lastName = "Habibi"; // No Error
console.log(obj); // Output: {firstName: 'Joubi'}
console.log(delete obj.firstName); // true - Allowed to delete existing property
console.log(obj); // Output: {}

//* Object.seal() - In JavaScript, Object.seal() is a method that seals an object, preventing new properties from being added and marking all existing properties as non-configurable. This means you can't add, remove, or configure properties on a sealed object.
// Non-configurable - means you can't change their attributes using methods like Object.defineProperty()

let obj2 = { firstName: "Sikandar" };
Object.seal(obj2); // Prevents the addition of new properties to an object and prevents the modification of existing properties.

obj2.firstName = "Chambi"; // *IMP: With Object.seal(), you can still change the values of existing properties.
console.log(obj2); // Output: {firstName: 'Chambi'}
console.log(delete obj2.firstName); // false - Not allowed to delete existing property
console.log(obj2); // Output: {firstName: 'Chambi'}


//* NOTE: preventExtensions allow deleting existing property while Object.seal() don't

//* Object.freeze() - In JavaScript, Object.freeze() is a method that freezes an object, preventing new properties from being added, existing properties from being removed, and existing properties, or their enumerability, configurability, or writability from being changed.

let obj3 = { firstName: "Sikandar" };
Object.freeze(obj3);
// Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

obj3.firstName = "Chambi"; // Not allowed to change the value of existing property
console.log(obj3); // Output: {firstName: 'Sikandar'}
