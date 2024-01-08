let arr = [0, 1, 2, 3];

arr[10] = 10;

console.log(arr[5]); // undefined
console.log(arr[10]); // 10
console.log(arr[11]); // undefined