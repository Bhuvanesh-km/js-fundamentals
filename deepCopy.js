//shallow copy exe
// let a=[{x:1,y:2,z:3}];
// let b=Array.from(a);
// b[0].x=0;
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));

// let a=[{x:1,y:2,z:3}];
// let b=Array.from(Object.create(a));
// b[0].x=0;
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));

// let a={x:{z:1},y:2};
// let b=Object.assign({},a);
// b.x.z=0;
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));

//deep copy
// let a={x:{z:1},y:2};
// let b=JSON.parse(JSON.stringify(a));
// b.x.z=0;
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(b));

//Deep Clone
// let a = [{ x:{z:1} , y: 2}];
// let b = JSON.parse(JSON.stringify(a));
// b[0].x.z=0
// console.log(JSON.stringify(a)); //[{"x":{"z":1},"y":2}]
// console.log(JSON.stringify(b)); // [{"x":{"z":0},"y":2}]

const obj = {
  a1: {
    b1: {
      c1: "ss",
    },
  },
};

const deepCopy = (val) => {
  if (["string", "boolean", "number"].includes(typeof val)) {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((item) => deepCopy(item));
  } else {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = deepCopy(val[key]);
      return acc;
    }, {});
  }
};
const c = obj;
const b = deepCopy(obj);
console.log(obj === b);
console.log(obj === c);
