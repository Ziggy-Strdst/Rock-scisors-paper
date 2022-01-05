"use strict";

let v = 0;
let c = 0;
const btnEl = document.querySelector(".btn");
const titleEl = document.querySelector(".title");

// Ход компьютера
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

// Мой ход
const myPlay = function () {
  let myChoice = prompt("Choose").toLowerCase();
  return myChoice;
};

// 1 игра
const play = function (me, comp) {
  // Сравниваются результаты
  if (
    (me === "rock" && comp === "scisors") ||
    (me === "paper" && comp === "rock") ||
    (me === "scisors" && comp === "paper")
  ) {
    console.log(`You Win! ${me} beats ${comp}`);
    return v++;
  } else if (me === comp) {
    console.log(`BOTH ${me} equal ${comp}`);
  } else {
    console.log(`You loose ${me} beats BY ${comp}`);
    return c++;
  }
};

const game = function () {
  while (c < 2 && v < 2) {
    play(myPlay(), computerPlay());
    if (v >= 2) {
      titleEl.textContent = "Vadik WIN";
    } else if (c >= 2) {
      titleEl.textContent = "Computer WIN";
    }
    console.log(`${v} ${c}`);
  }
};

btnEl.addEventListener("click", game);
// //////////
