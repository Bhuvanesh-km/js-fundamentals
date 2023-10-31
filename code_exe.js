var n=10;

function sum(num1,num2){
    let num=num1+num2;
    return num;
}

var c=sum(10,20);
console.log(c);

var d=sum(n,5);
console.log(d);


// memory allocation happens first

//n: undefined
//sum: func def
//c: undefined

// exection happens from top--> botton and left to right
//n: 10
//sum: func def
//c: sum--> new execution context will be created 
        //execution context is handeled by call stack
        //memory alloc for func variables
        //num:undefined
        //num1:10
        //num2:20
        //return 30 and exe context destroyed 
/* c: 30 */
