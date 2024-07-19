const boxes = document.querySelectorAll(".btn1");
const resetBtn = document.querySelector("#btnReset");

let winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let turnOf = true;

boxes.forEach((box) => {
    // console.log(element);
    box.addEventListener("click", () => {
         console.log('button was clicked');
         box.innerText = 'X';
         if (turnOf === true) {
            box.innerText = 'X';
            turnOf = false;
         }else{
            box.innerText = '0'
            turnOf = true;
         }
         box.disabled = true
    })
});