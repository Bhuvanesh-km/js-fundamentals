// //POLYFILLS  of call
// //myFunc.call(obj,10,20);

// var obj={
//     a:100
// }

// function testFunction(parm){
//     console.log("this value of obj a is ",this.a);
//     console.log("value of parm is ", parm);
// }

// //functionName.myCall
// Function.prototype.myCall=function(obj, ...args){
//     obj.functionRef=this;
//     obj.functionRef(...args);
// }

// testFunction.myCall(obj,100);
 
//-------------------------------------------------------------------------
// cars={
//     model:"BMW",
//     type:"SUV"
// }


// function printDetails(){
//     console.log("finally understood pollyfill of call");
//     console.log("car model is "+this.model+" and its type is "+this.type);
// }

// Function.prototype.ourCall=function(object,...parms){
//     object.reference=this;
//     object.reference(...parms);
// }

// printDetails.ourCall(cars);


//-----------------------------------------------------------------------
//pollyfills of Apply

// var obj={
//     a:100
// }

// function testFunction(...parm){
//     console.log("this value of obj a is ",this.a);
//     console.log("value of parm is ", ...parm);
// }

// Function.prototype.myApply=function(obj,args){
//     obj.funcRef=this;
//     obj.funcRef(...args);
// }

// testFunction.myApply(obj,[1,2]);
//-----------------------------------------------------------------------

// function greet(country) {
//     return 'Hello, ' + this.name + ' from ' + country;
// }

// const person = {
//     name: 'John',
// };


// function applyPolyfill(fn, context, args) {
//     Function.prototype.ourApply=function(obj,parms){
//         obj.funcRef=this;
//         return obj.funcRef(...parms);
//     }
//     return fn.ourApply(context,args);
// }
// console.log(greet.ourApply(person,['india']));
// const result = applyPolyfill(greet, person, ['India']);

// console.log(result);

//-----------------------------------------------------------------------
//pollyfills of bind

// var obj={
//     a:100
// }

// function testFunction(...parm){
//     console.log("this value of obj a is ",this.a);
//     console.log("value of parm is ", ...parm);
    
// }

// Function.prototype.myBind=function(obj){
//     obj.funcRef=this;
//     return function(...args){
//         obj.funcRef(...args);
//     }
// }

// var binded=testFunction.myBind(obj);

// binded(10);



//-----------------------------------------------------------------------

function greet() {
    return 'Hello, ' + this.name + '!';
}

const person = {
    name: 'John',
};

Function.prototype.customBind=function(object){
    object.ref=this;
    return function(...args){
        return object.ref(...args);
    };
}

const boundFunction = greet.customBind(person);
const result = boundFunction();
console.log(result);