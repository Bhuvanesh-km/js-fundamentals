// let p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject(new Error("some error 1"));
//   }, 2000);

//   resolve("some value");

//   setTimeout(function () {
//     reject(new Error("some error 2"));
//   }, 2000);

//   resolve("some value 2");

//   setTimeout(function () {
//     reject(new Error("some error 3"));
//   }, 2000);
// });

// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// });

// p.catch(function (err) {
//   console.log(2);
//   console.log(err);
// });

// p.finally(function () {
//   console.log(3);
// });

// p.finally(function () {
//   console.log(4);
// }).then(function (val) {
//   console.log(val);
// });

// p.then(
//   function (val) {
//     console.log(val);
//   },
//   function (err) {
//     console.log(err);
//   }
// );

//----------------------------------------------------------------

// Promise.resolve(1)
//   .finally((data) => {
//     console.log(data); //undefined
//     return Promise.resolve("error");
//   })
//   .catch((error) => {
//     console.log(error); //error
//     throw "error2";
//   })
//   .finally((data) => {
//     console.log(data); //undefined
//     return Promise.resolve(2).then(console.log);
//   })
//   .then(console.log)
//   .catch(console.log);
