//call apply bind -> will allow you to borrow function or context from a seperate entity

var obj = {
    num: 100
};

var myFunc = function(arg1, arg2) {
    console.log(this.num + arg1 + arg2);
}
// // myFunc(10,20); //undefined 10+20
// // 1. context 2.params
// myFunc.call(obj,10,20); 


var emp1={
    basePay:100,
    variablePay:500
}

var emp2={
    basePay:1000,
    variablePay:100
}

var empSalary=function(){
    var salary=this.basePay+this.variablePay;
    console.log(salary);
}
//Call
empSalary.call(emp1);
empSalary.call(emp2);

//Apply
//1.context 2.array of params
// myFunc.apply(obj,[10,20]); 

//Bind
var binded=myFunc.bind(obj,10,20); //returns the entire function
// console.log(myFunc.bind(obj,10,20));
binded(10,20);
binded(50,70);

//call, apply both are executable at the real time
//bind not executable on real time but can be called later
