const area = document.getElementById("area");

let move = 0; //шаг хода
let win = "";
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("result");
const overlay = document.getElementById("overlay");
const button = document.getElementById("btn");

area.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    move % 2 == 0 ? (e.target.innerHTML = "X") : (e.target.innerHTML = "0");
    move += 1;
    check();
  }
});

const check = () => {
  const boxes = document.getElementsByClassName("box"); //collection of our boxes with indexes
  console.log(boxes);
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (i = 0; i < arr.length; i++) {
    if (
      boxes[arr[i][0].innerHTML == "X"] &&
      boxes[arr[i][1].innerHTML == "X"] &&
      boxes[arr[i][2].innerHTML == "X"]
    ) {
      win = "X - wins!";
      result(win);
    } else if (
      boxes[arr[i][0].innerHTML == "0"] &&
      boxes[arr[i][1].innerHTML == "0"] &&
      boxes[arr[i][2].innerHTML == "0"]
    ) {
      win = "0 - wins!";
      result(win);
    } else {
      win = "Nobody wins :(";
    }
  }
};

const result = (winner) => {
  console.log(winner);
  contentWrapper.innerHTML = `Победили ${winner}!`;
  modalResult.style.display = "block";
};

const closeModal = () => {
  modalResult.style.display = "none";
  location.reload();
};

overlay.addEventListener("click", closeModal);
button.addEventListener("click", closeModal);
