function sumArr(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc + sumArr(curr);
    }
    return acc + curr;
  }, 0);
}

let inp = [1, [2, 3], 4, [5, [6, [7]]], 8];

console.log(sumArr(inp)); // 36
