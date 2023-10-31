const board=document.querySelector(".board");
const checkBoxDiv=document.querySelectorAll("div.checkbox");
board.addEventListener("click",(e)=>{
    resetBoard();
    if(e.target.hasAttribute("id")){
        const id=e.target.getAttribute("id");
        // console.log("id", id);
        const row=Math.ceil(id/8);
        // console.log("row", Math.ceil(id/8));
        const start=(row-1)*8+1;
        // console.log(start);
        let element;
        for(var i=start;i<start+8;i++){
            element=document.getElementById(i);
            element.style.backgroundColor="red";
        }
        var col=parseInt(id)+8;   
        for(var j=col;j<=64;j+=8){
            element=document.getElementById(j);
            element.style.backgroundColor="red";
        }
        col=id;
        while(col>0){
            element=document.getElementById(col);
            col-=8;
            element.style.backgroundColor="red";
        }

    }
});


function resetBoard(){
    for(var i=0;i<checkBoxDiv.length;i++){
        let boxId= Number(checkBoxDiv[i]["id"]);
        let rowId= Number(checkBoxDiv[i].parentNode.id);
        if(rowId%2!=0){
            if(boxId%2!=0){
                checkBoxDiv[i].style.backgroundColor="black";
            }
            else{
                checkBoxDiv[i].style.backgroundColor="white";
            }
        }
        else{
            if(boxId%2!=0){
                checkBoxDiv[i].style.backgroundColor="white";
            }
            else{
                checkBoxDiv[i].style.backgroundColor="black";
            }
        }
    }
}
