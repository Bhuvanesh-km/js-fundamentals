// const promise1 = Promise.resolve(10);
// promise1.then(function (data) {
//   console.log(data);
// });
// promise1.then(function (data) {
//   console.log(data);
// });
// promise1.then(function (data) {
//   console.log(data);
// });

//catch
// const promise2 = Promise.reject("some error");
// promise2.catch((err) => {
//   console.log(err);
// });
// promise2.catch((err) => {
//   console.log(err);
// });
// promise2.catch((err) => {
//   console.log(err);
// });

// //finally
// //data is undefined bcs finally don't accept any parms
// const promise3 = Promise.reject(10);
// promise3
//   .finally(function (data) {
//     console.log(data);
//     return Promise.resolve(100);
//   })
//   .then((data) => {
//     console.log("resolve " + data);
//   })
//   .catch((err) => {
//     console.log("reject" + err);
//   });
// promise3.finally(function (data) {
//   console.log(data);
// });
// promise3.finally(function (data) {
//   console.log(data);
// });

// const promise4 = Promise.reject(10);
// const onSuccess = function (data) {
//   console.log("success", data);
// };
// const onError = function (err) {
//   console.log("error", err);
// };
// promise4.then(onSuccess, onError);
// promise4.then(null, onError);
// promise4.catch(onError);

const prom = Promise.resolve(10);
prom
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log("2", data);
  })
  .catch((err) => {
    console.log("3", err);
  })
  .finally(() => {
    console.log("completed");
  });
