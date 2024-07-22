let boxes =  document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = ()=>{
    turnX = true ;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{ 
    box.addEventListener("click",()=>{
        
       
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }

        box.disabled  = true;
        count++;

            let isWinner = checkWinner();

            if(count === 9 && !isWinner){
                gameDraw();
            }
    });
});

const gameDraw = ()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `congratulation, winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const  checkWinner = () =>{
    for( let pattern of winningPatterns){
        let post1val = boxes[pattern[0]].innerText;
        let post2val = boxes[pattern[1]].innerText;
        let post3val = boxes[pattern[2]].innerText;
     

        if(post1val != "" && post2val != "" && post3val != ""){
            if(post1val === post2val && post2val === post3val){

                showWinner(post1val);
                return true;
            }
        }
    }
   
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


