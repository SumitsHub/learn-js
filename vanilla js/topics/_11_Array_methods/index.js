const items = [
  { name: "Bike", price: 100 },
  { name: "Mobile", price: 600 },
  { name: "Guitar", price: 7000 },
  { name: "Keyboard", price: 400 },
  { name: "Book", price: 10 },
  { name: "Laptop", price: 45000 },
  { name: "Computer", price: 40000 },
  { name: "Album", price: 50 },
  { name: "TV", price: 1000 },
];

//? push - Add an item to the end of an Array and returns new length of the array
items.push({ name: "New Item", price: 20 });
//   let item = items.push({name: 'New Item', price: 20})
//   console.table(items)
//   console.log(item);

//? pop - Remove an item from the end of an Array and returns removed item as well
//   const poppedItem = items.pop();
//   console.log(poppedItem);

//? shift - Remove an item from the beginning of an Array and returns popped item
//   const item = items.shift();
//   console.log(item);
//   console.log(items);

//? unshift - Add an item to the beginning of an Array and returns new length of the array
//   let item = items.unshift({name: 'First Item', price: 34})
//   console.log(items);
//   console.log(item);

//? indexOf - Find the index of an item in the Array
//   let newItem = {name: "TV", price: 1000};
//   items.push(newItem);
//   const pos = items.indexOf(newItem);
//   console.log(pos); // prints 10
//   console.log(items.indexOf({name: "TV", price: 1000})); // -1

//? splice - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
let fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana")); // 1
let removedItem = fruits.splice(0, 1);
console.log(removedItem, fruits); // ['Apple'] ['Banana']

// Inserting element using splice
fruits = ["Apple", "Banana"];
removedItem = fruits.splice(0, 1, "Orange", "Pineapple");
console.log(removedItem, fruits); // [ 'Apple' ] [ 'Orange', 'Pineapple', 'Banana' ]

//? slice - returns slice of array for the specified range
const arr1 = ["Gray", "White", "Red", "Yellow"];
console.log(arr1.slice(), arr1); // [ 'Gray', 'White', 'Red', 'Yellow' ] [ 'Gray', 'White', 'Red', 'Yellow' ]
console.log(arr1.slice(1, 3)); // [ 'White', 'Red' ]
console.log(arr1.slice(-2)); // [ 'Red', 'Yellow' ]

//? filter function - The filter() method creates a new array with all elements that pass the test implemented by the provided function
const filteredItems = items.filter((item, index, array) => {
  return item.price <= 100;
});

// console.table(filteredItems);

//? map function - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
const itemNames = items.map(item => {
  return item.name;
});

// console.table(itemNames);

//? find method - The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const foundItem = items.find(item => item.name === "Album");
// console.log(foundItem);

//? forEach method - The forEach() method executes a provided function once for each array element.
// items.forEach((item)=>{
//     console.log(item.price);
// })

//   let retVal = items.forEach(function (item, index, array) {
//     console.log(item, index);
//   });
//   console.log(retVal); // undefined

//? some method - The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const hasExpensiveThing = items.some(item => item.price > 30000);
// console.log(hasExpensiveThing); // prints true

//? every - The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// let everyElementSatisfy = items.every((item)=>item.price>100);
// console.log(everyElementSatisfy);

//? reduce - The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
//? reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)
//   console.log(array1.reduce(reducer));
//   console.log(array1.reduce(reducer, 5));

console.log(
  array1.reduce((prev, current) => {
    console.log(prev, current);
    return prev * current;
  }, 10)
);

// const totalPrice = items.reduce((currentTotal, item)=>{
//     return currentTotal + item.price;
// }, 0);
// console.log(totalPrice);

//? includes - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Syntax - includes(searchElement, fromIndex)
console.log(array1.includes(3, 2)); // true
console.log(array1.includes(3, 3)); // false

console.log([0.3, 0.2].includes(0.1 + 0.2)); // false
console.log(0.3 === 0.1 + 0.2); // false
