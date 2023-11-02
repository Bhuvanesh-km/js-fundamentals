// var counter = 0;
// function greeting() {
//   counter++;
//   console.log("hi");
//   if (counter > 3) clearInterval(intervalId);
// }

// var intervalId = setInterval(greeting, 2000);

//create setinterval pollyfill with the help of setTimeout.

// function fetchByCb(fileName, cb) {
//     setTimeout(function () {
//         cb(`content of ${fileName}`);
//     }, 100 * Math.random());
// }

// function nSerialReader(idx, files, ansArray) {
//         const onReadFile=function(data){
//             const prefix = 'content->';
//             let result = prefix + '' + data;
//             ansArray.push(result);
//         };
//         for (let i = idx; i < files.length; i++) {
//             fetchByCb(files[i], onReadFile);
//         }

// }

// let ansArray = [];
// let files = ['file1.txt', 'file2.txt', 'file3.txt']
// nSerialReader(0, files, ansArray)
// setTimeout(()=>{
//     console.log(ansArray);
// },1000);

function main(intervalTime, endTime, message, arr) {
  function mySetInterval(callback, time) {
    const interval = {
      working: true,
    };
    function setter() {
      callback();
      if (interval.working) {
        setTimeout(setter, time);
      }
    }
    setTimeout(setter, time);
    return interval;
  }
  setTimeout(() => {
    i.working = false;
  }, endTime);

  // Don't make any changes to below code
  let i = mySetInterval(function () {
    arr.push(message);
  }, intervalTime);
}

let arr = [];
main(1000, 5000, "hi", arr);
setTimeout(() => {
  console.log(arr);
}, 6000);
