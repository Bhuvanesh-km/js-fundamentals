// Map
// Filter
// reduce
// find

//map-> takes callback function as parmeter
// const res=[1,2,3,4,5,6,7,8,9].map(function(value,index){
//     return value+index;
// });
// console.log(res);

//generalization
// const addFive = function(value,index){
//     return value+index;
// }
// const res=[1,2,3,4,5,6,7,8,9].map(addFive);
// console.log(res);

//pollyfill of map
// Array.prototype.myMap = function(cb){
//     //iterate over the array
//     const res=[];
//     for(var i=0;i<this.length;i++){
//         res.push(cb(this[i],i));
//     }
//     return res;
// }
// const result = [1,2,3,4,5,6].myMap(addFive);
// console.log(result);

//filter

// const isOdd = function(value){
//     return value%2!==0;
// };
// const isEven = function(value){
//     return value % 2 ===0;
// }
// const arr=[1,5,6,16,35,33,50,45];
// const odd=arr.filter(isOdd);
// const even=arr.filter(isEven);
// console.log(odd);
// console.log(even);

//pollyfill of filter
// Array.prototype.myFilter=function(cb) {
//     const res=[];
//     for(var i=0;i<this.length;i++){
//         if(cb(this[i]))
//             res.push(this[i]);
//     }
//     return res;
// };
// const odd=arr.myFilter(isOdd);
// const even=arr.myFilter(isEven);
// console.log(odd);
// console.log(even);

//reduce
//I want to do the sum of all elements of the array
// 1. reducer function
// 2. initial value or accumulator
// const sum=[1,2,3,4,5,6,7,8,9].reduce(function(initialValue,currentValue){
//     initialValue+=currentValue;
//     return initialValue;
// },0);
// console.log(sum);

//[{a:1},{b:2},{c:3},{d:4}];
// const ans=[{x:1},{x:2},{x:3},{x:4}].reduce(function(acc,currentValue){
//     acc=acc+currentValue.x;
//     return acc;
// },0);
// console.log(ans);

// pollyfills of reduce
// Array.prototype.myReduce = function (cb, initialValue) {
//   if (typeof cb !== "function") {
//     return;
//   }
//   let acc;
//   if (initialValue === undefined || initialValue === null) {
//     acc = this[0];
//   } else {
//     acc = initialValue;
//   }
//   for (var i = 0; i < this.length; i++) {
//     acc = cb(acc, this[i]);
//   }
//   return acc;
// };
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9].myReduce(function (acc, currentValue) {
//   acc += currentValue;
//   return acc;
// }, 0);
// console.log(sum);

// const ans=[{x:1},{x:2},{x:3},{x:4}].myReduce(function(acc,currentValue){
//     acc=acc+currentValue.x;
//     return acc;
// },0);
// console.log(ans);

// Array.prototype.myReduce = function (cb, initialValue) {
//   if (typeof cb !== "function") return;
//   let acc;
//   if (initialValue === undefined || initialValue === null) acc = this[0];
//   else acc = initialValue;
//   for (var i = 0; i < this.length; i++) {
//     acc = cb(acc, this[i]);
//   }
//   return acc;
// };
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9].myReduce(function (acc, currentValue) {
//   acc += currentValue;
//   return acc;
// }, 0);
// console.log(sum);

function reduce(arr, reducer) {
  let acc = arr[0];
  for (var i = 1; i < arr.length; i++) {
    acc = reducer(acc, arr[i]);
  }
  return acc;
}
arr = [2, 3, 4, 5];
function reducer(a, b) {
  return a + b;
}
let ans = reduce(arr, reducer);
console.log(ans);
