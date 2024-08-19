console.log("This is index.js");

function WorkerExample1() {
  // For slightly more controlled error handling and backwards compatibility, it is a good idea to wrap your worker accessing code in the following
  if (window.Worker) {
    let worker = new Worker("worker-01.js");

    let message = { addThis: { num1: 10, num2: 20 } };

    worker.postMessage(message);

    worker.onmessage = function (e) {
      console.dir("result: " + e.data.result);
    };

    console.log("After post message worker-01");

    // setTimeout(() => {
    //   worker.terminate();
    // }, 2000);
  }
}

WorkerExample1();
console.log("After starting worker-01");

function WorkerExample2() {
  //* Create worker to create list of squares

  if (window.Worker) {
    let worker = new Worker("worker-02.js");
    let arr = Array(5)
      .fill(1)
      .map((_, i) => i + 1);
    worker.postMessage({ nums: arr });

    worker.onmessage = function (e) {
      console.log("Main thread: message received", e);

      if (e?.data?.squares) {
        console.log("Squares: ", e?.data.squares);
      }
    };
  }
}

WorkerExample2();
console.log("After starting worker-02");