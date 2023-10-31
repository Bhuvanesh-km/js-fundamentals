//node strict mode
"use strict";
//the value of this depends on how the function was invoked

// console.log(this);  //-> {}

// function fun() {
//     console.log(this); //->  undefined
// }
// fun();

//the value of this depends on how the function is being invoked
//if function is invoked by object ie method invocation then it return object.
//or if the func has been invoked by directinvocation/other function then it return undefined.

let obj = {
  name: "bhuvi",
  funct: function () {
    console.log(this);
    function gn() {
      console.log(this);
    }
    gn();
  },
};
obj.funct();

let directInvocation = obj.funct;
directInvocation();
