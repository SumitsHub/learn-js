const url = "https://store-api-04.onrender.com/api/v1/products";

//* declaring function async in order to use await inside function
const fetchData = async () => {
  // using try catch block for error handling instead of using .catch()
  try {
    // using await for promise instead of using .then()
    const response = await fetch(url);
    console.log("Below await #01");
    const result = await response.json(); // using '.text()' instead of usual '.json()'
    console.log("Below await #02");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  console.log("from fun - waiting for await keyword");
};

fetchData();
console.log("Hello");

// Output:
// Hello
// Below await #01
// Below await #02
// {products: Array(10), nbHits: 10}
// from fun - waiting for await keyword
