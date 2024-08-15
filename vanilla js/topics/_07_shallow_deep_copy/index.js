//* NOTE -> it's assignment and not a copy
let arr = ["One", "Two"];

let arr2 = arr;

arr2[0] = "Three";

console.log(arr2);
console.log(arr);

// IMP -> shallow and deep copies comes into play when there is nested properties in an object, because by default primitive values get's copied and not referenced

// Shallow Copy of Object
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// As a result, when you change either the source or the copy, you may also cause the other object to change too.

/* In JavaScript, all standard built-in object-copy operations
    1. spread syntax, 
    2. Array.prototype.concat(), 
    3. Array.prototype.slice(), 
    4. Array.from(), 
    5. Object.assign(), and 
    6. Object.create() 
    creates shallow copies rather than deep copies.
*/

/*
    For shallow copies, only the top-level properties are copied, not the values of nested objects. Therefore:
        1. Re-assigning top-level properties of the copy does not affect the source object.
        2. Re-assigning nested object properties of the copy does affect the source object.
*/

const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];

const ingredientsListCopy = Array.from(ingredientsList);
console.log(ingredientsListCopy);
// ["noodles",{"list":["eggs","flour","water"]}]

//* Re-assigning the value of a nested property will be visible in both objects.

ingredientsListCopy[1].list = ["rice flour", "water"];
console.log(ingredientsList[1].list);
// Array [ "rice flour", "water" ]

//* Re-assigning the value of a top-level property (the 0 index in this case) will only be visible in the changed object.

ingredientsListCopy[0] = "rice noodles";
console.log(ingredientsList[0]); // noodles
console.log(JSON.stringify(ingredientsListCopy));
// ["rice noodles",{"list":["rice flour","water"]}]
console.log(JSON.stringify(ingredientsList));
// ["noodles",{"list":["rice flour","water"]}]

//* DEEP COPY
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made

// The copy of an object whose properties all have primitive values fits the definition of both a deep copy and a shallow copy.

// One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

// * Serialization - The process whereby an object or data structure is translated into a format suitable for transfer over a network, or storage (e.g. in an array buffer or file format).
// In JavaScript, for example, you can serialize an object to a JSON string by calling the function JSON.stringify().

const ingredientsList2 = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsList2DeepCopy = JSON.parse(JSON.stringify(ingredientsList2));

// Because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.

// Change the value of the 'list' property in ingredientsListDeepCopy.
ingredientsList2DeepCopy[1].list = ["rice flour", "water"];
// The 'list' property does not change in ingredients_list.
console.log(ingredientsList2[1].list);
// Array(3) [ "eggs", "flour", "water" ]

// to check copyWithing array method
