// html elements ko select kiya hai
const boxes = document.querySelectorAll(".btn1");
const gameContainer = document.querySelector(".container");
const resetBtn = document.querySelector("#btnReset");
const newGameBtn = document.querySelector("#newGame");
const msgContainer = document.querySelector(".container-fluid");
const para_message = document.querySelector(".user_Winning_Message");

// tic-tac-toe winning patterns
let winnerPatterns = [
  [0, 1, 2], //row pattern 
  [3, 4, 5],
  [6, 7, 8],

  [0, 4, 8], // diagnol pattern
  [2, 4, 6],

  [0, 3, 6], // column pattern
  [1, 4, 7],
  [2, 5, 8],
];

let turnOf = true; // playerX, Player0

// all boxes par foreach loop lagaya hai
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      console.log('button was clicked');
      if (turnOf === true) {
         box.innerText = 'X';
         turnOf = false;
      }else{
        box.innerText = '0';
        turnOf = true;
      }
      box.disabled = true;
      checkWinner();
   })
})

const checkWinner = () => {
    for (const pattern of winnerPatterns) {
      console.log(pattern[0], pattern[1], pattern[2]);
      // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

      const posVal1 = boxes[pattern[0]].innerText;
      const posVal2 = boxes[pattern[1]].innerText;
      const posVal3 = boxes[pattern[2]].innerText;

      if (posVal1 !== "" && posVal2 !== "" && posVal3 !== "") {
          if (posVal1 === posVal2 && posVal2 === posVal3) {
             console.log("winner");
             showWinner(posVal1);
          }
      }
    }
}

const showWinner = (winner) => {
    para_message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//game khatam hony ky bad hum button pr dubara click nhi kar sakte is liye disable boxes ka function banaya hai
const disableBoxes = () => {
   for (const box of boxes) {
      box.disabled = true;
   }
}

// ye function reset game & new game dono button par kaam karega
const resetGame = () => {
    turnOf = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
  for (const box of boxes) {
     box.disabled = false;
     box.innerText = '';
  }
}


resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);