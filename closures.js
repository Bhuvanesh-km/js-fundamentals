// var name="bhuvi";
// function hello(){
//     console.log("Hello ",name);
// }
// name="naveen";
// hello();

let f=function(){
    let i=10;
    let j=20;
    return function(){
        console.log(i);
    }
}
var variable=f();
console.dir(variable);
//when a variable is being used from it's outer/parent scope
//then it forms a closure

//------------------------------------------------------------------
function outerFunction(){
    let count=0;
    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction;
}
const inner = outerFunction();
const inner2 = outerFunction();

console.log(inner());//1
console.log(inner());//2

console.log(inner2());//1
console.log(inner2());//2

//Closure scope is created for both the variables separately

var counter=(function(){
    var privateCounter=0;
    function changeBy(value){
        privateCounter+=value;
    }
    return{
        increment:function(){
            changeBy(1);
        },
        decrement:function(){
            changeBy(-1);
        },
        displayValue:function(){
            return privateCounter;
        }
    }
})();

console.log(counter.displayValue());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.displayValue());
counter.decrement();
console.log(counter.displayValue());

//create a memorize function
//var memorizeFunc=memo(func);
//memorizeFunc(parms);

function memorize(func){
    var existingFuncParms={};
    return function(...args){
        var self=this;
        var parmsAsString=args.join(',');
        //if value is in storage return it
        //otherwise execute the func and store it and then return
        if(!existingFuncParms[parmsAsString]){
            existingFuncParms[parmsAsString]=func.apply(self,[...args]);
        }
        return existingFuncParms[parmsAsString];
    }
}

// function doConsectiveSum(val){
//     let sum=0;
//     for(let i=0;i<val;i++){
//         sum+=i;
//     }
//     return sum;  
// }

// let memorizeFunction=memorize(doConsectiveSum);

// memorizeFunction(10000);
// memorizeFunction(500);
// memorizeFunction(10000);