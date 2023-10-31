// var varName=10;
// function b(){
//     console.log("in function b", varName);
// }
// function c(){
//     var varName=20;
//     b();
//     console.log(varName);
// }
// c();

//lexically means where the function is created.
//here B is present in global scpoe
//not from where it is being called.

// function createCounter(init, delta) {
//     function count() {
//         init = init + delta
//         return init
//     }
//     return count
// }
// let c1 = createCounter(10, 5);
// let c2 = createCounter(5, 2);

// console.log(c1())
// console.log(c2())
// console.log(c1())
// console.log(c2())