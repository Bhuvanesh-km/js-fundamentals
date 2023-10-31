const obj={
    A:"10",
    B: 12,
    C: {
        P: 34,
        Q: {
            L: 78
        },
        O: [1,2]
    }
}

// {
//     A:10,
//     B:12,
//     "C.P":34,
//     "C.Q.L":78,
//     "C.O.0":1,
//     "C.O.1":2
// }

function flattenObject(object,parent){
    const flatObj={};
    const generateFlatObj=(obj, parent)=>{
        for(let key in obj){
            const newParent=parent?parent+"."+key:key;
            const value=obj[key];
            if(typeof value=== 'object'){
                //recursion
                generateFlatObj(value,newParent);
            }
            else{
                flatObj[newParent]=value
            }
        }
        return flatObj;
    }
    generateFlatObj(obj,parent);
    return flatObj;
}

var res = flattenObject(obj,"");
console.log(res);