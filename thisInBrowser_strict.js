"use strict";

// console.log(this); //window object

// function fun() {
//   console.log(this); //-> undefined
// }
// fun();

// let obj = {
//   name: "bhuvi",
//   funct: function () {
//     console.log(this);
//     function gn() {
//       console.log(this);
//     }
//     gn();
//   },
// };
// obj.funct();

// let directInvocation = obj.funct;
// directInvocation();

//use of arrow function (=>) if this is notfound arrow looks for value of this in outer scope.

let obj = {
  name: "bhuvi",
  funct: function () {
    console.log(this);
    const innerSub = () => {
      console.log(this);
    };
    innerSub();
  },
};
obj.funct();

let directInvocation = obj.funct;
directInvocation();
