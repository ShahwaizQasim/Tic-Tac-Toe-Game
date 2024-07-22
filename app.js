// html elements ko select kiya hai 
const boxes = document.querySelectorAll(".btn1");
const gameContainer = document.querySelector(".container");
const resetBtn = document.querySelector("#btnReset");
const newGameBtn = document.querySelector("#newGame");
const msgContainer = document.querySelector(".container-fluid")
const para_message = document.querySelector(".user_Winning_Message");

// tic-tac-toe winning patterns 
let winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnOf = true; // playerX, Player0


// all boxes par foreach loop lagaya hai
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("button was clicked");
    if (turnOf === true) {
      box.innerText = "X";
      turnOf = false;
    } else {
      box.innerText = "0";
      turnOf = true;
    }
    box.disabled = true;

    checkWinner(); // checkWinner ka function call karwaya hai
  });
});


const showWinner = (winner) => {
    para_message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    // gameContainer.style.display = 'none';
    disableBoxes(); // disable boxes ka function call karwaya hai
}


const checkWinner = () => {
  for (const pattern of winnerPatterns) {
    // console.log('pattern', pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    const pos1Val = boxes[pattern[0]].innerText;
    const pos2Val = boxes[pattern[1]].innerText;
    const pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val !== "" && pos3Val !== "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log(`winner ${pos1Val}`);
            showWinner(pos1Val); 
        }
    }

  }
};

// ye function reset game & new game dono button par kaam karega 
const resetGame = () => {
  turnOf = true;
  enableBoxes();
  // gameContainer.style.display = 'block';
  msgContainer.classList.add("hide");
}

//game khatam hony ky bad hum button pr dubara click nhi kar sakte is liye disable boxes ka function banaya hai
const disableBoxes = () => {
  for (const box of boxes) {
     box.disabled = true;
  }
}

// jb user new game ya reset game pr click kre tw box empty ho jaye or button enavle ho jae is liye enable boxes ka function banaya hai  
const enableBoxes = () => {
  for (const box of boxes) {
     box.disabled = false;
     box.innerText = '';
  }
}



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);