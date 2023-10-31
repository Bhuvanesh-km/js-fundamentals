const allBoxes=document.querySelectorAll("div.checkbox");

for(let i=0;i<allBoxes.length;i++){
    allBoxes[i].addEventListener("click",(e)=>{
        resetBoard();
        tracePath(i);
    });
}

function tracePath(idx){
    let direction=  [
        [1,1],
        [1,-1],
        [-1,-1],
        [-1,1],
    ]
    highlight(idx)
    for(let j=0;j<direction.length;j++){
        let dr=direction[j][0];
        let dc=direction[j][1];
        let ridx=Math.floor(idx/8);
        let cidx=idx-(ridx*8);
        while(ridx+dr<8&&ridx+dr>=0&&cidx+dc<8&&cidx+dc>=0){
            ridx=ridx+dr;
            cidx=cidx+dc;
            highlight(ridx*8+cidx);
        }
    }
}
function highlight(index){
    allBoxes[index].style.backgroundColor="red";
}

function resetBoard(){
    for(let i=0;i<allBoxes.length;i++){
        let rowId=allBoxes[i].parentNode.getAttribute("id");
        let boxId=allBoxes[i]["id"];
        if(rowId%2===0){
            if(boxId%2===0){
                allBoxes[i].style.backgroundColor="black";
            }
            else{
                allBoxes[i].style.backgroundColor="white";
            }
        }
        else{
            if(boxId%2===0){
                allBoxes[i].style.backgroundColor="white";
            }
            else{
                allBoxes[i].style.backgroundColor="black";
            }
        }
    }
}