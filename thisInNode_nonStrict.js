//node non-strict mode
//the value of this depends on how the function was invoked

// console.log(this); //-> {}

// function fun() {
//   console.log(this); //->global object
// }
// fun();

//the value of this depends on how the function is being invoked
//if function is invoked by object ie method invocation then it return object.
//or if the func has been invoked by directinvocation/other function then it return golobal object

// let obj = {
//   name: "bhuvi",
//   func: function () {
//     console.log(this);
//     // function gn() {
//     //   console.log(this);
//     // }
//     // gn();
//   },
// };
// obj.func();

// let directInvocation = obj.func;
// directInvocation();

let obj = {
  name: "bhuvi",
  funct: () => {
    console.log(this.name);
    function gn() {
      console.log(this);
    }
    gn();
  },
};
obj.funct();

let directInvocation = obj.funct;
directInvocation();
