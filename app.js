const boxes = document.querySelectorAll(".btn1");
const resetBtn = document.querySelector("#btnReset");
const newGameBtn = document.querySelector("#newGame");
const msgContainer = document.querySelector(".container-fluid")
const para_message = document.querySelector("p");

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

let turnOf = true;

boxes.forEach((box) => {
  // console.log(element);
  box.addEventListener("click", () => {
    console.log("button was clicked");
    box.innerText = "X";
    if (turnOf === true) {
      box.innerText = "X";
      turnOf = false;
    } else {
      box.innerText = "0";
      turnOf = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const showWinner = (winner) => {
    para_message.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.style.display = 'block';

}


const checkWinner = () => {
  for (const pattern of winnerPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[pattern[1]].innerText,
      boxes[pattern[2]].innerText
    );

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
