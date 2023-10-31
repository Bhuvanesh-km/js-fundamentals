const isEven = function(number){
    return new Promise(function(resolve,reject){
        if(number%2===0){
            resolve(number);
        }
        else{
            reject(number);
        }
    });
}
const resp = isEven(17);

resp
.then(function(data){
    console.log(data+" is even");
})
.catch(function(err){
    console.log(err+" is not even");
})