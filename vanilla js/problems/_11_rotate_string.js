//* write a JS function to accept 2 strings and return 1 if 2nd string can be formed by rotating 1st string */

function isRotation(str1, str2) {
  // Check if both strings are of the same length and not empty
  if (str1.length !== str2.length || str1.length === 0) {
    return 0; // Return 0 if lengths are different or strings are empty
  }

  // Concatenate str1 with itself
  const doubledStr = str1 + str1;

  // Check if str2 is a substring of the doubled string
  return doubledStr.includes(str2) ? 1 : 0;
}

// Example usage:
console.log(isRotation("abcdef", "defabc")); // Output: 1
console.log(isRotation("abcdef", "efabcd")); // Output: 1
console.log(isRotation("abcdef", "abcdfe")); // Output: 0

console.log(isRotation("sample", "plesam")); // Output: 1
