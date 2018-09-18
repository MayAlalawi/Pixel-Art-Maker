// Select color input
const colorInput = document.querySelector("#colorPicker");

// get Height input
const gridHeight =document.getElementById("inputHeight");
// get wigth input
const gridWidth =document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
  makeGrid();
});
// function to change the cell color
function clickedCell(event){
    //get the color value
    const color = colorInput.value;
    //if cell has a style attribute, remove it
   if(event.target.hasAttribute("style")){
       event.target.removeAttribute("style");
   }
    else{
        //change the cell color to the input color
        event.target.style.backgroundColor = color;
    }
}

function makeGrid() {

// Your code goes here!
    //get the table
    var myTable = document.getElementById("pixelCanvas");
    //reset the grid when resubmit
    myTable.innerHTML = "";
    //create table body
    var tableBody= document.createElement("TBODY");
    //create rows and cells
    for (var i =0; i <gridHeight.value; i++){
        var tRow= document.createElement("TR");
        for (var j =0; j <gridWidth.value; j++){
            var rCell= document.createElement("TD");
            //add event listener to each cell
            rCell.addEventListener("click", clickedCell);
            //add cells to row
            tRow.appendChild(rCell) ;
        }
        //add rows to the table body
        tableBody.appendChild(tRow) ;
    }
    //append table body to the table
    myTable.appendChild(tableBody) ;

};

