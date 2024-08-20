//* Get fibonacci sequence using loop

function fib(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let seq = [0, 1];

  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

console.log(fib(3)); // [ 0, 1, 1 ]
console.log(fib(6)); // [ 0, 1, 1, 2, 3, 5 ]

//* Get fibonacci sequence using recursion

function fibRec(numTerms) {
  if (numTerms === 0) return [];
  if (numTerms === 1) return [0];
  if (numTerms === 2) return [0, 1];

  let fib = fibRec(numTerms - 1);
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);

  return fib;
}

console.log(fibRec(3)); // [ 0, 1, 1 ]
console.log(fibRec(5)); // [ 0, 1, 1, 2, 3 ]

//* Gen nth number in series
function fibN(n) {
  if (n <= 1) return n;

  return fibN(n - 1) + fibN(n - 2);
}

console.log(fibN(3)); // 2
console.log(fibN(5)); // 5
