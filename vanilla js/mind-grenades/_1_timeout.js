// var with setTimeout
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}
// Output - 5 5 5 5 5
// beacuse of global scope of var, 5 gets printed every second from 0 to 4

// let with setTimeout
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000 * i);
}
// Output - 0 1 2 3 4
// callback function has reference to every value of 'i' because of let keyword and it's block scope
// NOTE - let is declared inside for loop, hence every setTimeout callback will have it's own reference to value i

// using global let with for loop
function delayLog() {
  let i; // declaring variable outside of for loop -> global for the loop
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

delayLog();
// Ouput -
// 5 5 5 5 5

// NOTE - setTimeout with 0 milliSecond or empty argument executes in order
// setTimeout(() => {
//   console.log("0 setTimeout");
// }, 0);

// setTimeout(() => {
//   console.log("Empty setTimeout");
// });

// for (let k = 0; k < 2; k++) {
//   console.log(k);
// }

/**
 * console.log(k); // referenceError -> let has block scope
 */

/**
 * Output -
 * 0
 * 1
 * 0 setTimeout
 * Empty setTimeout
 */

setTimeout(() => {
  console.log('0 setTimeout');
  alert('0 setTimeout');
}, 0);

setTimeout(() => {
  console.log('Empty setTimeout');
  alert('Empty setTimeout');
});

for (let k = 0; k < 100000; k++) {
  console.log(k);
}

/**
 * Output -
 * 0
 * 1
 * ...
 * 99999
 * 0 setTimeout
 * Empty setTimeout
 */
