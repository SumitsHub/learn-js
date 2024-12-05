// # 01
function y() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 0);
  new Promise(resolve => {
    console.log(3);
    resolve(4);
    console.log(5);
  });
  new Promise(resolve => resolve(6)).then(console.log);
  console.log(7);
}
y();

// Expected Output
// 1
// 3
// 5
// 7
// 6
// 2

// NOTE: Executer function gets  (the function you pass to new Promise) executes synchronously because creating a Promise does not make the code inside its executor asynchronous by default.


// 02
console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

setTimeout(function () {
  console.log(3);
}, 100);

const data = async () => {
  console.log(4);
};

Promise.resolve()
  .then(function () {
    console.log(5);
  })
  .then(function () {
    console.log(6);
  });

data();

// Output-
// 1 4 5 6 2 3

// NOTE: only marking function 'async' don't make change in function execution order


// #03

async function test() {
  await console.log(3);
  console.log(4);
}

console.log("1");
test();

console.log("2");

// Output: 1 3 2 4

// NOTE: However, since this is an async function, the part after await runs in the next tick of the event loop, making it asynchronous.


// #04
console.log("Start");

async function asyncFunc() {
  console.log("Inside Async");
  await Promise.resolve();
  console.log("After Await");
}

asyncFunc();

Promise.resolve().then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout in Promise");
  }, 0);
});

setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("Next Tick");
});

console.log("End");

// Output
// Start
// Inside Async
// End
// Next Tick
// After Await
// Promise 1
// Timeout in Promise
// Immediate
