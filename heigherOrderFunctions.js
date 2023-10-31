//multiply two

// function mulTwo(val){
//     return val*2;
// }

// function mulTwo(val){
//     return val*2;
// }

//generalization
// function multiply(val,multiplier){
//     return val*multiplier;
// }

/*functions in js are first class objects*/

// const arr=[1,2,3,4,5];
// //add 5 with every element of an array and return a new array with the result
// function copyArrayAndAddFive(arr){
//     const result=[];
//     for(var i=0;i<arr.length;i++){
//         result.push(arr[i]+5);
//     }
//     return result;
// }
// //mul 5 with every element of an array and return a new array with the result
// function copyArrayAndMulFive(arr){
//     const result=[];
//     for(var i=0;i<arr.length;i++){
//         result.push(arr[i]*5);
//     }
//     return result;
// }
// // console.log(copyArrayAndAddFive(arr));
// // console.log(copyArrayAndMulFive(arr));

// //generalization
// const multiplyFive=function (value) {
//     return value*5; 
// }
// const addFive=function(value){
//     return value+5;
// }
// function copyArrayAndManipulate(arr,instruction){
//     const result=[];
//     for(var i=0;i<arr.length;i++){
//         result.push(instruction(arr[i]));
//     }
//     return result;
// }
// console.log(copyArrayAndManipulate(arr,multiplyFive));
// console.log(copyArrayAndManipulate(arr,addFive));

//what is HOF
//1.function that take function as argument.
//2. the main feature of the actual function get decided on the fly.
// instruction function in copyArrayAndManipulate is called as call back function


function sum(x, y) {
    return x + y;
}

function mult(x, y) {
    return x * y;
}

function diff(x, y) {
    return x - y;
}

function number(x, y, fn) {
    return fn(x,y);
}

let ans=number(4,5,sum);
console.log(ans);