const fs = require("fs");

// console.log("before");

// const promise = fs.promises.readFile("./file.txt");
// promise
//   .then((data) => {
//     console.log("Data inside the file 1 is " + data);
//     return fs.promises.readFile("./file.txt");
//   })
//   .then((data) => {
//     console.log("Data inside the file 2 is " + data);
//     return fs.promises.readFile("./file.txt");
//   })
//   .then((data) => {
//     console.log("Data inside the file 3 is " + data);
//   })
//   .catch((err) => {
//     console.log("err ", err.message);
//   });

// console.log("After");

// The Async keyword

// async function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1, 4));
// console.log("before");

// The async keyword allows you to define a function that handles asynchronous operations
// Asynchronous functions execute asynchronously via the event loop (Micro task queue).
// It always returns a Promise
// sum(4, 5)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log("The err msg is: " + err.message);
//   });
// console.log("after");

async function sum(a, b) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      res(a + b);
    }, 2000);
  });
}

// // it is acting like a async code but we wrote something which is more like sequencial
async function printSum() {
  console.log("hi");
  const sumRes = await sum(5, 5); // wait until it is finished.
  console.log(sumRes);
  console.log("bye");
}

printSum();
