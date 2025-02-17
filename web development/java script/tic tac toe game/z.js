let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#ngm");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn=0;//playerX,playerY
let count=0; //to track draw
//winning pattern

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=> {
    turn=0;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

 boxes.forEach((box)=>
    box.addEventListener("click",()=> //changes happen on click
        {
        if(turn===0)
        {
            turn=1;
            box.innerText="O";
            box.style.color="#320D6D";
        }
        else{
            turn=0;
            box.innerText="X";
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    }
    )
)

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is Team ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPattern)
    {
       let pos1val= boxes[pattern[0]].innerText
       let pos2val=boxes[pattern[1]].innerText
        let pos3val=boxes[pattern[2]].innerText
        if(pos1val !="" && pos2val !="" && pos3val !=="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                // alert(pos1val+" team Win the game.");
                showWinner(pos1val);
                return true;
            }
        }
    }

}


// const updateTurnIndicator = () => {
//     if (turn === 0) {
//         turnIndicator.innerText = "Player X's Turn";
//         turnIndicator.classList.remove("player-o");
//         turnIndicator.classList.add("player-x");
//     } else {
//         turnIndicator.innerText = "Player O's Turn";
//         turnIndicator.classList.remove("player-x");
//         turnIndicator.classList.add("player-o");
//     }
// };

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

// updateTurnIndicator();