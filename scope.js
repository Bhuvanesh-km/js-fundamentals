//{} -> block
//let and const are block scpoe
//var is function scope

// let a=10;
// {
//     let a=20;
//     console.log(a);
// }
// console.log(a);


//example for block scope(let)
let x=10;
{
    let x=20
    {
        let x=30
        console.log(x);
    }
    console.log(x);
}
console.log(x);

//example for function scope (var)

var y=10;
{
    var y=20;
    console.log(y);
}
console.log(y);

