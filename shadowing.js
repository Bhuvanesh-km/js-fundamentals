//legal shadowing

var fruits="apple";
console.log(fruits);
{
    let fruits;
    console.log(fruits);
    fruits="orange"
    {
        let fruits;
        console.log(fruits);
    }
    console.log(fruits);
}
console.log(fruits);