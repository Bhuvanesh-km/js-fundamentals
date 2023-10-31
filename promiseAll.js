// const { log } = require('console');
const fs=require('fs');

// const { log } = require("util");
//it takes an array of promises and executes
//all the promises all together and returns the combined result as an array
//it rejects immediately whenever any one of them get rejected
// const promise1=fs.promises.readFile("./file.txt");
// const promise2=fs.promises.readFile("./file.txt");

// const combinedResult=Promise.all([promise1,promise2]);

// const transformData = function(data){
//     let resStr="";
//     data.map((fileContent)=>{
//         resStr+=fileContent;
//     });
//     return resStr;
// }
// combinedResult
// .then(transformData)
// .then((data)=>console.log(data));


//pollyfill of promiseAll

// myPromiseAll = function(inputPromises){
//     const resolvedPromises=[];
//     return new Promise((res,rej)=>{
//         inputPromises.map(async function(promise,index){
//             try{
//                 const value=await promise;
//                 resolvedPromises.push(value);

//                 //resolve the result array
//                 if(index===inputPromises.length-1){
//                     res(resolvedPromises);
//                 }
//             }
//             catch(err){
//                 rej(err);
//             }
//         });
//     });
// }

// var myCombinedPromises=myPromiseAll([promise1,promise2]);

// myCombinedPromises
// .then(transformData)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

const promise1 = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('Promise 1 resolve');
    resolve(1);
}, 3000);
});

const promise2 = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('Promise 2 resolve');
    resolve(2);
}, 2000);
});

const promise3 = new Promise((resolve, reject) => {
setTimeout(() => {
    console.log('Promise 3 resolve');
    resolve(3);
}, 1000);
});

myPromiseAll = function(inputPromises){
    const resolvedPromises=[];
    return new Promise((res,rej)=>{

        async function exec(){
        for(var i=0;i<inputPromises.length;i++){
            try{
                const value=await inputPromises[i];
                resolvedPromises.push(value);

                //resolve the result array
                if(i===inputPromises.length-1){
                    res(resolvedPromises);
                }
            }
            catch(err){
                rej(err);
            }
        }
    }
    exec();
    });
}

console.log(new Date());
var myCombinedPromises=myPromiseAll([promise1,promise2,promise3]);
myCombinedPromises
.then((data)=>{
    console.log(new Date());
   console.log(data);
});


    
