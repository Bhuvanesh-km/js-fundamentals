// function fn() {
//   count = 0;
//   count++;
//   return function fun(value) {
//     if (value === 0) {
//       return count;
//     }
//     count++;
//     return fun;
//   }
// }

// let ans = fn()()()()(0);
// console.log(ans);

//-------------------------------------------------

function f(y, x) {
  if (!x) {
    return function fn(x) {
      return y * x;
    };
  }
  return y * x;
}

let a = f(3, 4);
let b = f(3)(4);

console.log(a);
console.log(b);
