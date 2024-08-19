console.log("This is index.js");

// check if Worker exists in window object
if (window.Worker) {
  let worker = new Worker("worker-01.js");

  let message = { addThis: { num1: 10, num2: 20 } };

  worker.postMessage(message);

  worker.onmessage = function (e) {
    console.dir("result: " + e.data.result);
  };

  console.log("After post message");

  setTimeout(() => {
    worker.terminate();
  }, 2000);
}
