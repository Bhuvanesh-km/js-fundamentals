
// var counter=0;
// function greeting(){
//     counter++;
//     console.log("hi");
//     if(counter>3)clearInterval(intervalId);
// }

// var intervalId=setInterval(greeting, 1000);


//create setinterval pollyfill with the help of setTimeout.

function fetchByCb(fileName, cb) {
    setTimeout(function () {
        cb(`content of ${fileName}`);
    }, 100 * Math.random());
}

function nSerialReader(idx, files, ansArray) {
        const onReadFile=function(data){
            const prefix = 'content->';
            let result = prefix + '' + data;
            ansArray.push(result);
        };
        for (let i = idx; i < files.length; i++) {
            fetchByCb(files[i], onReadFile);
        }
    
}

let ansArray = [];
let files = ['file1.txt', 'file2.txt', 'file3.txt']
nSerialReader(0, files, ansArray)
setTimeout(()=>{
    console.log(ansArray);
},1000);
