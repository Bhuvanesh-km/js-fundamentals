let arr1=[2,3,4,5];
let arr2=[1,2,3,4,5,6,7,8,9];

// arr1.sum=function(){
//     let sum=0;
//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }
//     return sum;
// }
// console.log(arr1);
// let res=arr1.sum();
// console.log(res);

// arr2.sum=function(){
//     let sum=0;
//     for(let i=0;i<this.length;i++){
//         sum+=this[i];
//     }
//     return sum;
// }
// console.log(arr2);
// let res2=arr2.sum();
// console.log(res2);

Array.prototype.sum=function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

console.log(arr1);
console.log(arr2);

console.log(arr1.sum());
console.log(arr2.sum());