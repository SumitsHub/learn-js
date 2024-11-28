//* #01. Write a function 'getSubArray' that takes an array and a target sum as inputs, and returns the first subarray of consecutive numbers with a sum equal to the target. If no such subarray exists, it returns an empty array.

function getSubArray(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end]; // Add current number to the sum

    // If the sum exceeds the target, move the start pointer to reduce the window
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if the current sum matches the target
    if (currentSum === target) {
      return arr.slice(start, end + 1); // Return the subarray
    }
  }

  return []; // Return empty array if no subarray matches
}

// Example usage
console.log(getSubArray([1, 4, 10, 3, 1, 5], 6)); // Output: [1, 5]
console.log(getSubArray([1, 1, 6, 3], 9)); // Output: [6, 3]

// Explanation
//* Sliding Window Approach:
// Use two pointers (start and end) to maintain a window of elements.
// Keep track of the currentSum of the elements within the window.

//* Adjust Window:
// If the currentSum exceeds the target, shrink the window from the left by incrementing the start pointer and subtracting the value at start from the currentSum.

//* Check Target:
// If the currentSum equals the target, return the subarray defined by [start, end].

//* Edge Cases:
// If the input array is empty, the function returns [].
// If no subarray matches the target sum, the function also returns [].


//* #02. To handle negative(-ve) numbers ->
// the sliding window approach works with positive numbers but not with negative numbers, because when negative numbers are included, the sum can decrease even when extending the window. 
// This breaks the logic of reducing the sum only when it exceeds the target.

// To handle cases with negative numbers, you need a different approach, such as prefix sums combined with a hash map.
function getSubArray(arr, target) {
  const prefixSumMap = new Map(); // Maps prefix sums to their indices
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    // Check if current sum equals the target
    if (currentSum === target) {
      return arr.slice(0, i + 1);
    }

    // Check if there's a prefix sum such that currentSum - prefixSum = target
    if (prefixSumMap.has(currentSum - target)) {
      const start = prefixSumMap.get(currentSum - target) + 1;
      return arr.slice(start, i + 1);
    }

    // Store the current sum in the map
    prefixSumMap.set(currentSum, i);
  }

  return []; // Return empty array if no subarray matches
}

// Example usage
const result1 = getSubArray([1, -1, 2, 3, -2, 4], 6);
console.log(result1); // Output: [2, 3, -2, 4]

const result2 = getSubArray([-1, -2, 3, 4], 5);
console.log(result2); // Output: [3, 4]

//* #03 Write a function to return array of unique pairs whose sum will be equal to target
function findUniquePairs(arr, target) {
  const seen = new Set(); // Tracks numbers seen so far
  const output = new Set(); // Tracks unique pairs

  for (let num of arr) {
    const complement = target - num;

    // If the complement exists in the set, it's a valid pair
    if (seen.has(complement)) {
      const sortedPair = [num, complement].sort((a, b) => a - b); // Ensure pairs are ordered
      output.add(sortedPair.toString()); // Add as a unique pair
    }

    // Add the current number to the set of seen numbers
    seen.add(num);
  }

  // Convert stored pairs from strings back to arrays
  return Array.from(output).map(pair => pair.split(",").map(Number));
}

// Example usage
const result = findUniquePairs([1, 4, 6, 2, 3, -1, 5, 7, 4, 2], 6);
console.log(result); // Output: [[4, 2], [1, 5], [-1, 7]]


// Explanation of Changes
// Prefix Sum Map:
// Maintain a cumulative sum (currentSum) while iterating through the array.
// Store each prefix sum and its index in a map (prefixSumMap).

// Logic for Target Check:
// If currentSum === target, it means the subarray from the beginning to the current index matches the target.
// Otherwise, if currentSum - target exists in the map, it means there’s a subarray starting after the index of the stored prefix sum that matches the target.

// Generalization for Negative Numbers:
// The prefix sum technique handles both increasing and decreasing values in the sum, so it works regardless of the sign of the numbers.