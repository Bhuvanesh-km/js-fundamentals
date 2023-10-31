//IIFE -> Immediately invoke function expression
//anonymus function
var myCal=(function(){
    function sum(a,b){
        return a+b;
    }
    function mul(a,b){
        return a*b;
    }

    return{
        sum: sum,
        mul: mul
    }

})();

console.log(myCal.sum(1,2));
console.log(myCal.mul(1,2));