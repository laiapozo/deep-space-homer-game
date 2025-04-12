"use strict";

let timeLimitInSeconds = 105;
const homer = document.querySelector(".js-homer");

// TIMER
function startTimer() {
  const timer = document.querySelector(".timer");
  const gameOver = document.querySelector(".game-over");
  timeLimitInSeconds--;

  let minutes = "0" + Math.floor(timeLimitInSeconds / 60);
  let seconds = timeLimitInSeconds % 60;

  seconds < 10 ? (seconds = "0" + seconds) : seconds;

  if (timeLimitInSeconds < 0) {
    clearInterval(timerInterval);
    clearInterval(collisionInterval);
    gameOver.classList.remove("hidden");
    document.removeEventListener("keydown", handleKey);
    minutes = "00";
    seconds = "00";
  }

  timer.innerHTML = minutes + ":" + seconds;
}

// KEYDOWN
const handleKey = (event) => {
  if (event.key === "ArrowUp") {
    if (homer.classList.contains("top2")) {
      homer.classList.replace("top2", "top1");
    } else if (homer.classList.contains("top3")) {
      homer.classList.replace("top3", "top2");
    } else if (homer.classList.contains("top4")) {
      homer.classList.replace("top4", "top3");
    } else if (homer.classList.contains("top5")) {
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

// COLLISION
const checkCollision = () => {
  const chip1 = document.querySelector(".js-chip1");
  const chip2 = document.querySelector(".js-chip2");
  const chip3 = document.querySelector(".js-chip3");
  const chip4 = document.querySelector(".js-chip4");
  const chip5 = document.querySelector(".js-chip5");
  const scoreHtml = document.querySelector(".js-score");
  const crunchSound = document.querySelector(".crunch-sound");
  let score = parseInt(scoreHtml.innerHTML);

  if (
    homer.classList.contains("top1") &&
    chip1.offsetLeft < 150 &&
    chip1.offsetLeft > -35
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
    crunchSound.play();
  } else if (
    homer.classList.contains("top2") &&
    chip2.offsetLeft < 150 &&
    chip2.offsetLeft > -35
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
    crunchSound.play();
  } else if (
    homer.classList.contains("top3") &&
    chip3.offsetLeft > -35 &&
    chip3.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
    crunchSound.play();
  } else if (
    homer.classList.contains("top4") &&
    chip4.offsetLeft > -35 &&
    chip4.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
    crunchSound.play();
  } else if (
    homer.classList.contains("top5") &&
    chip5.offsetLeft > -35 &&
    chip5.offsetLeft < 150
  ) {
    ++score;
    score < 10 ? (score = "0" + score) : score;
    scoreHtml.innerHTML = score;
    crunchSound.play();
  }
};

const collisionInterval = setInterval(checkCollision, 1000);
const timerInterval = setInterval(startTimer, 1000);

document.addEventListener("keydown", handleKey);
