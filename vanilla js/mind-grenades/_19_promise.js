//* NOTES:
// 1. Value passed to 'resolve' function gets passed to 1st .then
// 2. Value returned from then gets passes to next chained then
// 3. All chained .then will get executed, even if chained after .catch
// 4. Only one .catch will get executed if there are multiple .catch chained and 1st .catch don't throw any error

function multiPromiseExample() {
  let p = new Promise(resolve => {
    resolve("Something");
  });

  p.then(val => console.log("p ->First then: ", val))
    .then(val => console.log("p ->Second then: ", val))
    .catch(err => console.log("p ->Catch: ", err))
    .then(val => console.log("p ->Third then", val));

  let q = new Promise((resolve, reject) => {
    reject("Error Occurred");
  });

  q.then(val => console.log("q ->First then: ", val))
    .catch(err => console.log("q ->First Catch: ", err))
    .catch(err => console.log("q ->Second Catch: ", err))
    .then(val => console.log("q ->Second then", val))
    .then(val => console.log("q ->Third then", val));
}

// multiPromiseExample();

// Output: NOTE: order of last 2 logs are different for some reason
// p ->First then:  Something
// p ->Second then:  undefined
// q ->First Catch:  Error Occurred
// p ->Third then undefined
// q ->Second then undefined
// q ->Third then undefined

function returnValueFromThenCatch() {
  let p = new Promise(resolve => {
    resolve("Something");
  });

  p.then(val => {
    console.log("p ->First then: ", val);
    return "Value from 1st then";
  })
    .then(val => {
      console.log("p ->Second then: ", val);
      return "Value from 2nd then";
    })
    .catch(err => {
      console.log("p ->Catch: ", err);
      return "Value from 1st catch";
    })
    .then(val => console.log("p ->Third then", val));

  let q = new Promise((resolve, reject) => {
    reject("Error Occurred");
  });

  q.then(val => {
    console.log("q ->First then: ", val);
    return "Value from 1st then";
  })
    .catch(err => {
      console.log("q ->First Catch: ", err);
      //* throwing error to invoke 2nd .catch
      throw new Error("Error from 1st catch");
    })
    .catch(err => console.log("q ->Second Catch: ", err.message))
    .then(val => {
      console.log("q ->Second then", val);
      return "Value from 2nd then";
    })
    .then(val => {
      console.log("q ->Third then", val);
      return "Value from 3rd then";
    });
}

returnValueFromThenCatch();

// Output:
// p ->First then:  Something
// p ->Second then:  Value from 1st then
// q ->First Catch:  Error Occurred
// q ->Second Catch:  Error from 1st catch
// p ->Third then Value from 2nd then
// q ->Second then undefined
// q ->Third then Value from 2nd then
