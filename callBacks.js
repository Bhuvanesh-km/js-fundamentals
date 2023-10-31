//this callback will be executed sequntially
// const doEat=function(){
//     console.log("I am eating");
// }

// function startDay(cb){
//     var isWoroutDay=true;
//     if(isWoroutDay){
//         cb();
//     }
// }
// startDay(doEat);

//reading a file
console.log("open");
var fs = require("fs"); //fs-file system
const onReadFile = function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
};
fs.readFile("./file.txt", "utf8", onReadFile); //readFile is async
console.log("close");
