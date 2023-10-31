// //number
// var a = 10;
// console.log(a);
// console.log(typeof a);

// //character
// var b = "z";
// console.log(b);
// console.log(typeof b);

// //string
// var c = "This is sting";
// console.log(c);

// //boolean
// var d = true;
// console.log(d);

// JS is dynamically types language
// the varable is decided at run time
// high level language, v8 engine--> c++

// var variable;
// console.log(variable); //undefined

// const cap = {
//   name: "vdv",
//   say: function () {
//     console.log(this.name);
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   },
// };
// cap.say();
// let hell = cap.say;
// hell();

// function Rab(name) {
//   this.name = name;
// }
// Rab.prototype.hi = function () {
//   console.log(this.name);
// };
// let rabbit = new Rab("rabit");

// rabbit.hi();
// rabbit.prototype.hi();
// Object.getPrototypeOf(rabbit).hi();
// rabbit.__proto__.hi();

//--------------------------------------------
// Promise.resolve(1).finally((data) => {
//   console.log(data); //undefined
//   return Promise;
// });

//--------------------------------------------
// const cb2 = () => {
//   console.log("set");
//   while (1) {} //infi loop
//   console.log("Sdd");
// };
// setTimeout(cb2, 100);
// console.log("sds");

//--------------------------------------------
// console.log(g()); //TypeError : g is not a function
// var g = function () {
//   return "sdf";
// };

//--------------------------------------------
// function foo() {
//   let a = (b = 0);
//   a++;
//   return a;
// }
// foo();
// console.log(typeof a); //undefined
// console.log(typeof b); //number

//--------------------------------------------
// function mod(a, b) {
//   a = 1;
//   b = 2;
// }
// let p = [4, 5, 6];
// let q = [3, 4, 5];
// mod(p, q);
// console.log(p, q);
