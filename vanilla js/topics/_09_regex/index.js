/** Simple Patterns */
const re = /abc/;
// matches character combinations in strings only when the exact sequence "abc" occurs (all characters together and in that order)

console.log("Hi, do you know your abc's?".match(re).index); // 21
console.log('The latest airplane designs evolved from slabcraft.'.match(re)); // ['abc', index: 43, input: 'The latest airplane designs evolved from slabcraft.', groups: undefined]
console.log('Something'.match(re)); // null

/** Using special characters */
// #01 Assertion - Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).
