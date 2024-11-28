function closestToZero(arr) {
  let min = Infinity;
  for (let val of arr) {
    let absVal = Math.abs(val);
    let absMin = Math.abs(min);
    if (absVal < absMin && absVal !== 0) min = val;
  }

  return min;
}

console.log(closestToZero([9, 8, -1, 3, 5, 2, -4])); // -1
console.log(closestToZero([9, 8, -11, 3, 5, 2, -4])); // 2
