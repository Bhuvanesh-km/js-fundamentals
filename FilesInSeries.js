// function fetchByCb(fileName, cb) {
//   setTimeout(function () {
//     cb(`content : ${fileName}`);
//   }, 100 * Math.random());
// }

function twoSeries(file1, file2, ansArray) {
  function cb1(content) {
    ansArray.push(content);
    fetchByCb(file2, cb2);
  }
  function cb2(content) {
    ansArray.push(content);
    ansArray.push("all files have been read");
  }
  fetchByCb(file1, cb1);
}

let ansArray = [];
// twoSeries("FILE 1", "FILE 2", ansArray);
// console.log(ansArray);
function fetchByCb(fileName, cb) {
  setTimeout(function () {
    cb(`content of ${fileName}`);
  }, 100 * Math.random());
}

function nSerialReader(idx, files, ansArray) {
  const onReadFile = function (data) {
    const prefix = "content->";
    let result = prefix + "" + data;
    ansArray.push(result);
  };
  for (let i = idx; i < files.length; i++) {
    fetchByCb(files[i], onReadFile);
  }
}
let files = ["file1.txt", "file2.txt", "file3.txt"];
nSerialReader(0, files, ansArray);
setTimeout(() => {
  console.log(ansArray);
}, 1000);
