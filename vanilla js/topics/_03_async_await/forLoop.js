//* async await with for loop -> works

async function resolveVal() {
  for (let p of arr) {
    let val = await p;
    console.log(val);
  }
}

resolveVal();
// Output:
// promise1
// promise2
// promise3
