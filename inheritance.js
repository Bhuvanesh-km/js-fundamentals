//species -> animal -> bird

const species = Object.create({
    type: 'species',
    speak: function(){
        console.log(`${this.type} is speaking!`);
    }
});

var animal=Object.create(species);
animal.walk=function(){
    console.log("Animal is walking");
}

var bird=Object.create(animal);
bird.fly=function(){
    console.log("Bird is flying");
}
// console.log(bird);
// console.log(Object.keys(bird));//return all keys in current object

// for(let key in bird){ //prints all (inherited also)key 
//     console.log(key); //in bottom-up manner
// }
// console.log(Object.keys(bird.__proto__));

for(let key in bird){ 
    if(bird.hasOwnProperty(key))
    console.log(key); 
}