const fs = require("fs");
/*limitations
1. call back hell or pyramid of doom
2. Inversion of control-loss of control over the code*/

// fs.readFile("./file.txt", function (err, data) {
//   if (err) {
//     console.error(err);
//   }
//   console.log("content cb1 " + data);
//   fs.readFile("./file.txt", function (err, data) {
//     if (err) {
//       console.error(err);
//     }
//     console.log("content cb2 " + data);
//     fs.readFile("./file.txt", function (err, data) {
//       if (err) {
//         console.error(err);
//       }
//       console.log("content cb3 " + data);
//     });
//   });
// });

//--------------------------------------------

const readF1cb = function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log("content cb1 " + data);
  fs.readFile("./file.txt", readF2cb);
};
const readF2cb = function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log("content cb2 " + data);
  fs.readFile("./file.txt", readF3cb);
};
const readF3cb = function (err, data) {
  if (err) {
    console.error(err);
  }
  console.log("content cb3 " + data);
};
fs.readFile("./file.txt", readF1cb);
