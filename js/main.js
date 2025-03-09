"use strict";

// TIMER

let timeLimitInSeconds = 105;
const timer = document.querySelector(".timer");

const gameOver = document.querySelector(".game-over");

function startTimer() {
  timeLimitInSeconds--;

  let minutes = "0" + Math.floor(timeLimitInSeconds / 60);
  let seconds = timeLimitInSeconds % 60; // Por ejemplo con 105 --> 105 = 60 × 1 + 45 (45 son los segundos que se necesitan)

  seconds < 10 ? (seconds = "0" + seconds) : seconds;

  if (timeLimitInSeconds < 0) {
    clearInterval(timerInterval);
    return (timer.innerHtml = "00:00");
  }

  timer.innerHTML = minutes + ":" + seconds;

  if (timer.innerHTML === "00:00") {
    gameOver.classList.remove("hidden");
    clearInterval(collisionInterval);
    document.removeEventListener("keydown", handleKey);
  }
}

const timerInterval = setInterval(startTimer, 1000);

// KEYDOWN

const homer = document.querySelector(".js-homer");

const handleKey = (event) => {
  if (event.key === "ArrowUp") {
    if (homer.classList.contains("top2")) {
      homer.classList.replace("top2", "top1");
    } else if (homer.classList.contains("top3")) {
      homer.classList.replace("top3", "top2");
    } else if (homer.classList.contains("top4")) {
      homer.classList.replace("top4", "top3");
    }
    if (homer.classList.contains("top5")) {
      homer.classList.replace("top5", "top4");
    }
  } else if (event.key === "ArrowDown") {
    if (homer.classList.contains("top1")) {
      homer.classList.replace("top1", "top2");
    } else if (homer.classList.contains("top2")) {
      homer.classList.replace("top2", "top3");
    } else if (homer.classList.contains("top3")) {
      homer.classList.replace("top3", "top4");
    } else if (homer.classList.contains("top4")) {
      homer.classList.replace("top4", "top5");
    }
  }
};

document.addEventListener("keydown", handleKey);

// COLLISION

const checkCollision = () => {
  const homer = document.querySelector(".js-homer");
  const chip1 = document.querySelector(".js-chip1");
  const chip2 = document.querySelector(".js-chip2");
  const chip3 = document.querySelector(".js-chip3");
  const chip4 = document.querySelector(".js-chip4");
  const chip5 = document.querySelector(".js-chip5");
  const scoreHtml = document.querySelector(".js-score");
  let score = parseInt(scoreHtml.innerHTML);

  if (
    homer.offsetTop > 12 &&
    homer.offsetTop < 16 &&
    chip1.offsetLeft < 150 &&
    chip1.offsetLeft > -35
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
  } else if (
    homer.offsetTop > 95 &&
    homer.offsetTop < 99 &&
    chip2.offsetLeft < 150 &&
    chip2.offsetLeft > -35
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
  } else if (
    homer.offsetTop > 178 &&
    homer.offsetTop < 182 &&
    chip3.offsetLeft > -35 &&
    chip3.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
  } else if (
    homer.offsetTop > 261 &&
    homer.offsetTop < 265 &&
    chip4.offsetLeft > -35 &&
    chip4.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
  } else if (
    homer.offsetTop > 344 &&
    homer.offsetTop < 348 &&
    chip5.offsetLeft > -35 &&
    chip5.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
  }
};

const collisionInterval = setInterval(checkCollision, 1000);

document.addEventListener("DOMContentLoaded", checkCollision);
