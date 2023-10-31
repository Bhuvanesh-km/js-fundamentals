function flatten(array) {
if(!Array.isArray(array)) {
    return array;
} else {
   return array.reduce((acc, value) => acc.concat(flatten(value)),[]);
}
}
let array = [1,2,3,[4,5],[6,7,8,[9,10,11]]];

console.log(flatten(array));