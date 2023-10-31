console.log("a=" + a);
var a = 10;
var a = 20;
console.log("a=" + a);

//let re-declaration not allowed can not use before initialization
// console.log(b); //temporal dead zone
let b = 10;
console.log("b=" + b);
b = 20;
console.log("b=" + b);

//const re-declaration not alllowed and re assignment not allowed
const c = 25;
console.log("c=" + c);
// c = 43; //not allowed can't be re assign
