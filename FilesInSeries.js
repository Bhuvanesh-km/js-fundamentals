// function fetchByCb(fileName, cb) {
//   setTimeout(function () {
//     cb(`content : ${fileName}`);
//   }, 100 * Math.random());
// }

// function twoSeries(file1, file2, ansArray) {
//   function cb1(content) {
//     ansArray.push(content);
//     fetchByCb(file2, cb2);
//   }
//   function cb2(content) {
//     ansArray.push(content);
//     ansArray.push("all files have been read");
//   }
//   fetchByCb(file1, cb1);
// }

let ansArray = [];
// twoSeries("FILE 1", "FILE 2", ansArray);
// console.log(ansArray);
function fetchByCb(fileName, cb) {
  setTimeout(function () {
    cb(`content of ${fileName}`);
  }, 100 * Math.random());
}
const onReadFile = function (data) {
  let result = prefix + "" + data;
  ansArray.push(result);
};

function nSerialReader(idx, files, ansArray) {
  if (idx === files.length) return;
  const prefix = "content->";
  fetchByCb(files[idx], (data) => {
    ansArray.push(prefix + data);
    nSerialReader(idx + 1, files, ansArray);
  });
}
let files = ["file1.txt", "file2.txt", "file3.txt"];
nSerialReader(0, files, ansArray);
// console.log(ansArray);
setTimeout(() => {
  console.log(ansArray);
}, 1000);
