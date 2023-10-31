
// var bird = {
//     wings:2
// }
// Object.defineProperty(bird,'legs',{
//     value:2,
//     writable:false, 
//     enumerable:true, 
//     configurable:true 
// });

// Object.defineProperty(bird,'head',{
//     value:1,
//     writable:false,
//     enumerable:true,
//     configurable:false
// });

// console.log(bird);

// // writable false
// // if false can not edit value (read-only)
// bird.legs=3;
// console.log(bird);

// // enumerable false
// for(let key in bird){
//     if(bird.hasOwnProperty(key))  
//     console.log(key);
// }

// Object.preventExtensions(bird);
// bird.size='small'; //silent fail

//{seal} -preventExtension and marks props configurable:false
// Object.seal(bird); 
//{freeze} - seal+ writable:false
// Object.freeze(bird);


//-----------------------------------------
// var obj={
//     a:10
// };

// Object.defineProperty(obj,'b',{
//     get: function(){
//         return this.a*2;
//     }
// });
// console.log(obj);
// console.log(obj.a);
// obj.a=100;
// console.log(obj.b);

var myObj={
    get a(){
        return this._a_;
    },
    set a(val){
        this._a_=val*2;
    }
}
myObj.a=2;
console.log(myObj.a);