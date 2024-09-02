console.log(1 + "2"); // 12
console.log(1 - "2"); // -1
console.log("11" - "2"); // 9

console.log(undefined + 0); // NaN
console.log(undefined == 0); // false
console.log(undefined == false); // false

console.log(null + 0); // 0
console.log(null == 0); // false
console.log(null == false); // false

console.log({} + 0); // '[object Object]0'
console.log({} == 0); // false
console.log({} == false); // false

console.log(
  {
    toString() {
      return 99;
    },
  } + 10
); // 109

console.log([] + 0); // 0
console.log([] == 0); // true
console.log([] == false); // true

//* 'null' and 'undefined' Special Case:
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. There's a special rule in JavaScript: null is only loosely equal to undefined and nothing else. This means:

// null == undefined is true.
// null == null is true.
// undefined == undefined is true.

// But null is not equal to any other type, including numbers, strings, objects, etc.
