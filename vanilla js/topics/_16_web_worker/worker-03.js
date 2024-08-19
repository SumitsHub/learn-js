console.log("This is worker-03");

// console.log(window); // ERROR: window is not defined
// NOTE: 'window' object is not available in worker thread, instead 'self' object is available

console.dir(self); // DedicatedWorkerGlobalScope
// 'self' - type of 'WorkerGlobalScope'
