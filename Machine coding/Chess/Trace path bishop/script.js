(function(){
    let n=8;
    window.addEventListener("load",()=>{
        const table=document.getElementById("table");
        initializeGrid(table,n);

        table.addEventListener("mouseover",(e)=>{

            const [row,col]=e.target.dataset.index.split('-');
            const boxes=document.querySelectorAll(".box");
            const cellIndexMap={};
            
            resetBoard(boxes);
            traverseTopLeft(row,col,cellIndexMap);
            traverseTopRight(row,col,cellIndexMap);
            traverseBottonLeft(row,col,cellIndexMap);
            traverseBottonRight(row,col,cellIndexMap);

            for(let i=0;i<boxes.length;i++){
                let dataIndex=boxes[i].dataset.index;
                if(cellIndexMap[dataIndex]===true){
                    boxes[i].classList.add("yellow");
                }
            }
        });
    });

    function resetBoard(boxes){
        for(let i=0;i<boxes.length;i++){
            boxes[i].classList.remove("yellow");
        }
    }
    function traverseTopLeft(row,col,direction){
        while(row>=0&&col>=0){
            let dataIndex=`${row}-${col}`;
            direction[dataIndex]=true;
            row--;
            col--;
        }
    }
    function traverseTopRight(row,col,direction){
        while(row>=0&&col<n){
            let dataIndex=`${row}-${col}`;
            direction[dataIndex]=true;
            row--;
            col++;
        }
    }
    function traverseBottonLeft(row,col,direction){
        while(row<n&&col>=0){
            let dataIndex=`${row}-${col}`;
            direction[dataIndex]=true;
            row++;
            col--;
        }   
    }
    function traverseBottonRight(row,col,direction){
        while(row<n&&col<n){
            let dataIndex=`${row}-${col}`;
            direction[dataIndex]=true;
            row++;
            col++;
        }
    }
    function initializeGrid(table,n){
        for(let row=0;row<n;row++){
            let rows=document.createElement("tr");
            table.appendChild(rows);
            let isEven=isEvenCell(row);
            let column=document.createDocumentFragment();
            for(let col=0;col<n;col++){
                let cell=document.createElement("td");
                cell.setAttribute("class","box");
                cell.setAttribute("data-index",`${row}-${col}`);
                cell.classList.add(getBgBasedOnIndex(isEven));
                column.appendChild(cell);
                isEven=!isEven;
            }
            rows.appendChild(column);
        }
    }
    function isEvenCell(index){
        return index%2===0;
    }
    function getBgBasedOnIndex(iswhite){
        return iswhite?'white':'black';
    }
})();