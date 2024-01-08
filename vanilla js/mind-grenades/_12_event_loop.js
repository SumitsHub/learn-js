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