//object literal and constructive way

// var obj2=new Object();
// obj2.a="";

//callable object
function sum(){
    console.log("sum");
}
console.log(sum.__proto__===Function.prototype);
console.log(sum.__proto__.__proto__===Object.prototype);

//object subtype
var arr=[1,2,3];
// console.log(typeof arr);
// console.log(Array.isArray(arr));
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__===Object.prototype);

var obj1={
    name: "bhuvi",
    sayHi: function(){
        console.log("Hello!");
    }
};
var obj2=Object.create(obj1);
obj2.age=22;
console.log(obj2);
console.log(obj2.name); //interits from parent(obj2)
console.log(obj2.__proto__); //parent
console.log(obj2.__proto__.__proto__===Object.prototype); //object true
console.log(obj1.isPrototypeOf(obj2)); //true   
console.log(Object.isPrototypeOf(obj2)); //false