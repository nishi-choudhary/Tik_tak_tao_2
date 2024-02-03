console.log("Welcome to Tic Tac Toe");

// Adding music for the game
let music = new Audio("allmusic.mp3");
let audioTurn = new Audio("1.mp3");
let gameover = new Audio("gameover.wav");

let turn = "X";
let isgameover = false;

// Function to change turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check winner
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 45],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isgameover = true;
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
        "200px";
      document.querySelector(".line").style.width = "20vw";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      
      // Stop the background music when the game is over
      music.pause();
      gameover.play();

    }
  });
};

// Game logics
music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerHTML =
          "Turn for " + turn;
      }
    }
  });
});

// Reset button functionality
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });

  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerHTML = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".line").style.width = "0px";
  
  // Restart the background music when the game is reset
  music.currentTime = 0;
  music.play();
});




