let a = 12;

console.log("heyy buddy");

// function syaHi() {
//   let a = 12;
//   let a = 89;
// }

console.log("heyy buddy - reached till here");

//* What will the output of the above code?
// SyntaxError: Identifier 'a' has already been declared
// Function definition gets parsed while parsing phase to allocate required memory to the function


let sayHi2 = function () {
  let a = 12;
  let a = 89;
  console.log(a);
};

// SyntaxError: Identifier 'a' has already been declared