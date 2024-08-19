console.log("This is worker-02.js");

this.onmessage = function (e) {
  console.log("Message received in worker-02", e);

  if (e?.data?.nums) {
    let squares = e?.data?.nums.map(num => num ** 2);
    postMessage({ squares });
  }
};
