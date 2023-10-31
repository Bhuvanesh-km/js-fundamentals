//functions
fun();
// It works as func call is before func defination
function fun(){
    console.log("This is first function in JS");
}


//objects 
// var cap = {
//     name:"Steve",
//     lastName:"Rogers",
//     isAvenger:false,
    
// }


// console.log(cap);
// console.log(cap.name); 
// // console.log(cap.lastName)
// console.log(cap["name"]);

let cap = {
    name: "Steve",
    age: 34,
    isAvenger: true,
    key:"Hello"
}

for (var key in cap) {
    console.log(key, " ", cap.key , " ", cap[key]);
}