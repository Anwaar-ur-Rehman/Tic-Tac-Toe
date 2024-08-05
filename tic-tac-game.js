let boxes = document.querySelectorAll(".box");  
let reset = document.querySelector("#reset");
let ngame = document.querySelector("#ng");
let msgcon = document.querySelector(".msg-c");
let msg = document.querySelector("#msg");
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame =() =>{
    turnO = true;
    enableboxes();
    msgcon.classList.add("hide");
}
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("button is clicked");
        box.innerText ="hello";
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = false;
        checkwinner();
    });
});
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
       // box.style.pointerEvents = 'auto'; // Enable clicks
        box.innerText = ""; 
     
       
    }
}
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
    }
}
const showwinner =(winner) =>{
    msg.innerText= `congratualitions winner is ${winner}`
    msgcon.classList.remove("hide");
    disableboxes();
}
const checkwinner = () => {
    for(let pattren of winpatterns){
      
        let p1val = boxes[pattren[0]].innerText;
        let p2val = boxes[pattren[1]].innerText;
        let p3val = boxes[pattren[2]].innerText;
        if (p1val !== "" && p1val === p2val && p2val === p3val){
            if(p1val === p2val && p2val === p3val){
               console.log("WINNER: " + p1val);
               showwinner(p1val);
            }
        }
    }
}
ngame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);