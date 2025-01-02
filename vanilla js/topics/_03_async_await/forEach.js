const promise1 = new Promise(res => setTimeout(res, 1000, "promise1"));
const promise2 = new Promise(res => setTimeout(res, 2000, "promise2"));
const promise3 = new Promise(res => setTimeout(res, 3000, "promise3"));

let arr = [promise1, promise2, promise3];

//* async await with forEach
// arr.forEach(async p => {
//   let val = await p;
//   console.log(val);
// });
// Output:
// promise1
// promise2
// promise3
// Note: printed every second

//* .then inside forEach()
// arr.forEach(p => {
//   let val = p.then(val => {
//     console.log(val);
//   });
//   console.log(val); // Promise { <pending> }
// });

// Output:
// Promise { <pending> }
// Promise { <pending> }
// Promise { <pending> }
// promise1
// promise2
// promise3
