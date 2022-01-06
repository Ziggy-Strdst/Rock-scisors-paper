"use strict";

let game;
let v;
let c;
const titleEl = document.querySelector(".title");
const curEl = document.querySelector(".current");
const scoreEl = document.querySelector(".score");
const btns = document.querySelectorAll(".btn");
const btnRestart = document.querySelector(".restart");

const init = function () {
  game = true;
  v = 0;
  c = 0;
  scoreEl.textContent = `You: ${v} - Computer: ${c}`;
  document.querySelector("body").style.background = "blue";
  titleEl.textContent = "PLAY";
  curEl.textContent = "Choose";
};
init();

const computerPlay = function () {
  let compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) {
    compChoice = "rock";
  } else if (compChoice === 2) {
    compChoice = "paper";
  } else if (compChoice === 3) {
    compChoice = "scisors";
  }
  return compChoice;
};

const play = function (me, comp) {
  if (
    (me === "rock" && comp === "scisors") ||
    (me === "paper" && comp === "rock") ||
    (me === "scisors" && comp === "paper")
  ) {
    curEl.textContent = `You Win! ${me} beats ${comp}`;
    return v++;
  } else if (me === comp) {
    curEl.textContent = `BOTH ${me} equal ${comp}`;
  } else {
    curEl.textContent = `You loose ${me} beats BY ${comp}`;
    return c++;
  }
};

const myPlay = function () {
  btns.forEach((btn) =>
    btn.addEventListener("click", function () {
      if (game) {
        const myChoice = btn.id;
        //
        play(myChoice, computerPlay());
        scoreEl.textContent = `You: ${v} - Computer: ${c}`;
        if (v >= 2) {
          game = false;
          titleEl.textContent = "Vadik WIN";
          document.querySelector("body").style.background = "green";
        } else if (c >= 2) {
          game = false;
          titleEl.textContent = "Computer WIN";
          document.querySelector("body").style.background = "red";
        }
      }
    })
  );
};
myPlay();

btnRestart.addEventListener("click", init);
