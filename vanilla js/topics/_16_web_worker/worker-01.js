console.log("This is worker-01.js");

this.onmessage = function (e) {
  setTimeout(function () {
    if (e.data.addThis) {
      this.postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 });
    }
  }, 10000);
};
