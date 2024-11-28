interface MyObject {
  a?: number;
  b?: number;
  c?: number;
  d?: number;
}

//* Write function to sort array of object of type 'Object'
function uniqueArray(arr: MyObject[]) {
  let output: MyObject[] = [];
  let strArr: string[] = [];

  for (let obj of arr) {
    let str = `${obj.a ?? ""}-${obj.b ?? ""}-${obj.c ?? ""}-${obj.d ?? ""}`;
    if (strArr.indexOf(str) === -1) {
      strArr.push(str);
      output.push(obj);
    }
  }
  return output;
}

const arr1 = [
  { a: 1, b: 2, c: 3, d: 4 },
  { a: 5, b: 6, c: 7, d: 8 },
  { a: 1, b: 2, c: 3, d: 4 }, // Duplicate
];

const result1 = uniqueArray(arr1);
console.log(result1); // [ { a: 1, b: 2, c: 3, d: 4 }, { a: 5, b: 6, c: 7, d: 8 } ]

const arr2: MyObject[] = [
  { a: 1, b: 3 },
  { b: 3, a: 1 },
  { c: 2, d: 4 },
];

console.log(uniqueArray(arr2)); // [ { a: 1, b: 3 }, { c: 2, d: 4 } ]
