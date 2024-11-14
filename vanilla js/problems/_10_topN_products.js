const events = [
  { eventId: "abcd36239389", productId: 123, timeStamp: "20211208 00:00:00" },
  { eventId: "abcd36239389", productId: 123, timeStamp: "20211208 00:00:00" },
  { eventId: "abcd36239389", productId: 456, timeStamp: "20211208 00:00:00" },
  { eventId: "abcd36239389", productId: 456, timeStamp: "20211208 00:00:00" },
  { eventId: "abcd36239389", productId: 123, timeStamp: "20211208 00:00:00" },
  { eventId: "abcd36239389", productId: 789, timeStamp: "20211208 00:00:00" },
];

//* You need to find At any point in time, give me the top "N" sold products.

function getTopNProducts(n) {
  const productCount = {};

  // Count occurrences of each productId
  for (const event of events) {
    const productId = event.productId;
    productCount[productId] = (productCount[productId] || 0) + 1;
  }

  // Sort entries by count in descending order and get the top N productIds
  const sortedProducts = Object.entries(productCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([productId]) => productId);

  return sortedProducts;
}

let res = getTopNProducts(1);
console.log(res); // [ '123' ]

res = getTopNProducts(2);
console.log(res); // [ '123', '456' ]

res = getTopNProducts(3);
console.log(res); // [ '123', '456', '789' ]
