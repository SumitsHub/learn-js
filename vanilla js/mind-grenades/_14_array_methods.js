//** reduce method */

// #01 - normal reduce method
let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//* #02 - reduce on empty array with initial value
sum = [].reduce((acc, curr) => {
  console.log("Called");
  return acc + curr;
}, 0);
console.log(sum); // 0

//* #03 - reduce with empty array and no initial value
// sum = [].reduce((acc, curr) => acc + curr);
//* TypeError: Reduce of empty array with no initial value

//* #04 - reduce with single element array
sum = [5].reduce((acc, curr) => {
  console.log("Called", acc, curr); // function not called even once
  return acc + curr;
});
console.log(sum); // 5

//* #05 - reduce with 2 elements
sum = [5, 6].reduce((acc, curr) => {
  console.log("Called", acc, curr);
  return acc + curr;
});

// Called 5 6
