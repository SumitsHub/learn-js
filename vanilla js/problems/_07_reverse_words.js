/**
    Problem Statement: reverse the words of the string.
    Input: 'Hello how are you?'
    Output: 'olleH woh era ?uoy'
*/

//* Solution #01 - using built-in methods

function reverseWords(str) {
  let words = str.split(" ");

  let output = [];

  for (let word of words) {
    let reverseWord = word.split("").reverse().join("");
    output.push(reverseWord);
  }

  return output.join(" ");
}

console.log(reverseWords("Hello how are you?")); // olleH woh era ?uoy
console.log(reverseWords("Hello World This Is JavaScript")); // olleH dlroW sihT sI tpircSavaJ

// TODO Solution #02 - without any built-in methods
