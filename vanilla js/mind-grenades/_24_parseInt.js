let arr1 = ["9", "10", "11"];
let parsedArr = arr1.map(parseInt);
console.log(parsedArr); // [ 9, NaN, 3 ]

//* Key Issue: How map Passes Arguments
//* When using arr.map(callback), the callback function (in this case, parseInt) receives three arguments:

// 1. Element: The current array element being processed.
// 2. Index: The index of the current element.
// 3. Array: The entire array being mapped.

//* parseInt expects two arguments:

// 1. String: The string to be converted into an integer.
// 2. Radix: The base of the numeral system to use (optional but critical for correct parsing).

//* When you pass parseInt directly as the callback to map, it is called with parseInt(element, index):

// 1. The element is treated as the string to parse.
// 2. The index is mistakenly passed as the radix.

//* Correcting the Issue
// To fix this, ensure parseInt is called with only the string argument by explicitly wrapping it in an arrow function or a helper function.

// Option 1: Use an Arrow Function
parsedArr = arr1.map(num => parseInt(num));
console.log(parsedArr); // [9, 10, 11]

// Option 2: Bind the Radix
parsedArr = arr1.map(parseInt.bind(null, undefined));
console.log(parsedArr); // [9, 10, 11]
