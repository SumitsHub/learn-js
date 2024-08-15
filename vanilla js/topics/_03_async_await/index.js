const url = "https://course-api.com/react-useReducer-cart-project";

//* declaring function async in order to use await inside function
const fetchData = async () => {
  // using try catch block for error handling instead of using .catch()
  try {
    // using await for promise instead of using .then()
    const response = await fetch(url);
    const result = await response.text(); // using '.text()' instead of usual '.json()'
    console.log("Below await");
    console.log(JSON.parse(result)[0]);
  } catch (error) {
    console.error(error);
  }
  console.log("from fun");
};

fetchData();
console.log("Hello");

// Output:
// Hello
// Below await
// {
//   id: 'rec1JZlfCIBOPdcT2',
//   title: 'Samsung Galaxy S8',
//   price: '399.99',
//   img: 'https://www.course-api.com/images/cart/phone-1.png',
//   amount: 1
// }
// from fun
