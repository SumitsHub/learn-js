let arr = [1, 2, 3];
let str = "1,2,3";

let arr2 = [1, 2, 3];

console.log(arr == str); // true
console.log(str == arr); // true

// console.log(arr === [1,2,3]); // false

console.log(arr === arr2);

console.log(1 == "1"); // true
console.log(0 == 2 * 0); // true

console.log(JSON.stringify("JS") === "JS"); // false
// stringify adds an additional string quote

console.log("2" > "12"); // true - compares based on ASCII value of first character
console.log("0".charCodeAt(0), "1".charCodeAt(0), "2".charCodeAt(0)); // 48, 49, 50

console.log("24" > "13"); // true
console.log("03" > "12"); // false

//* ASCII Values
console.log(`0-9: ${"0".charCodeAt(0)}-${"9".charCodeAt(0)}`); // 0-9: 48-57
console.log(`A-Z: ${"A".charCodeAt(0)}-${"Z".charCodeAt(0)}`); // A-Z: 65-90
console.log(`a-z: ${"a".charCodeAt(0)}-${"z".charCodeAt(0)}`); // a-z: 97-122

//* function to classify characters using comparison in JS - no need to remember ASCII codes

function classifyCharacter(char) {
  if (typeof char !== "string" || char.length !== 1) {
    throw new Error("Input must be a single character string.");
  }

  if (char >= "A" && char <= "Z") {
    return "uppercase";
  } else if (char >= "a" && char <= "z") {
    return "lowercase";
  } else if (char >= "0" && char <= "9") {
    return "digit";
  } else {
    return "neither uppercase, lowercase, nor digit";
  }
}

// Example usage:
console.log(classifyCharacter("A")); // Output: 'uppercase'
console.log(classifyCharacter("b")); // Output: 'lowercase'
console.log(classifyCharacter("5")); // Output: 'digit'
console.log(classifyCharacter("$")); // Output: 'neither uppercase, lowercase, nor digit'
