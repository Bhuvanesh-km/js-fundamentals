// const fs=require('fs');

// const promisifyFileRead = function(filePath){
//     return new Promise(function(resolve,reject){
//         fs.readFile(filePath,function(err,data){
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// promisifyFileRead('./file.txt')
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.error(err);
// })

//-------------------------------------------------
function promisify(fn) {
  return (...args) => {
    return new Promise((resolve) => {
      function cb(result) {
        resolve(result);
      }
      fn.apply(this, [...args, cb]);
    });
  };
}

function exampleFn(a, b, cb) {
  cb(a + b);
}

const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log(res));
