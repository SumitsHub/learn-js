//* Problem Statement
// Find sum of the second largest and second smallest element of the array

let array = [1, 2, 4, 5, 8, 9, 7, 6, 3, 1, 9, -5];

function findSum(arr) {
  let secondSmallest = Infinity;
  let smallest = Infinity;
  let secondLargest = -Infinity;
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Find the second smallest
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }

    // Find the second largest
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondSmallest + secondLargest;
}

console.log(findSum(array)); // 9 -> 8 + 1
