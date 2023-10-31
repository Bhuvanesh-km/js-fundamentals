// var obj={a:10,b:20};

// const {a,b}={...obj};
// console.log(a);
// console.log(b);

// const arr=[10,20];
// const [f]=[...arr];

// console.log(f);

//add elements of an existing array to new array
// var linesToAppend = ["appended later", "appended second line"];
// var article = [
//   "This is first line",
//   "hey I am second line",
//   ...linesToAppend,
//   "hello Iam third",
// ];

// console.log(article);

//2. copy array or concate array

// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];
// var ar3 = [...ar1, ...ar2];
// var arr3 = ar1.concat(ar2);
// console.log(ar3);
// console.log(arr3);

// function sum(a, b) {
//   console.log("sum of", a, b, "is", a + b);
// }
// sum(2, 3); //simple call
// let a = [1, 2];
// sum(...a); // spread op

// function sumAll(...numbers) {
//   var sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   console.log(...numbers, "sum is", sum);
// }
// sumAll(1, 2, 3);
// sumAll(2, 5, 7);

//multiply first two and do sum for other elements
//REST op
// function mulSum(a, b, ...numbers) {
//   var sum = 0;
//   var mul = a * b;
//   for (const num of numbers) {
//     sum += num;
//   }
//   console.log("mul of", a, b, "is", mul, "sum of", ...numbers, "sum is", sum);
// }
// mulSum(2, 5, 3, 7, 5);

//Default param
function doPrint(name, prefix = "my name is:") {
  console.log(prefix, name);
}
doPrint("bhuvi");
