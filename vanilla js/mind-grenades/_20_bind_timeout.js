//** Passing arguments using '.bind() and setTimeout() */

// arrow function to add 2 values
const add = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};

// passing arguments using 'bind()' and 'setTimeout'
setTimeout(add.bind({}, 5, 6), 300, 7, 8); // 5 + 6 = 11
setTimeout(add.bind({}, 7, 8), 400, 5, 6); // 7 + 8 = 15

setTimeout(add.bind({}, 10), 500, 11, 12); // 10 + 11 = 21
setTimeout(add.bind({}, 20), 600, 21, 22); // 20 + 21 = 41

// combine arguments
function printsArgs(...args) {
  console.log(args);
}

setTimeout(printsArgs.bind({}, 1, 2, 3), 700, 4, 5, 6); // [1, 2, 3, 4, 5, 6]

setTimeout(printsArgs.bind({}, 4, 5, 6), 800, 1, 2, 3); // [4, 5, 6, 1, 2, 3]
