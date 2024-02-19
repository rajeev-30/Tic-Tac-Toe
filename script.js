let boxes = document.querySelectorAll('.box');
let rstbtn = document.querySelector('#rst-btn');
let winner = document.querySelector('.winner');
let count = 0;

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        if(turnO){
            box.innerHTML = "O";
            turnO = false
        }
        else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count==9 && winner.innerText==""){
            winner.style.color = "yellow";
            winner.innerText = "It's a Draw!"
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

rstbtn.addEventListener('click', ()=>{
    turnO = true;
    winner.innerText = "";
    enableBoxes();
    count = 0;
});

const checkWinner = () =>{
    for(pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                winner.style.color = "rgb(5, 233, 5)";
                winner.innerText = posVal1 + ' wins';
                disableBoxes();
            }
        }
    }
}
