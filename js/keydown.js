"use strict";

const homer = document.querySelector(".js-homer");

const handleKey = (event) => {
  if (event.key === "ArrowUp") {
    if (homer.classList.contains("top2")) {
      homer.classList.replace("top2", "top1");
    } else if (homer.classList.contains("top3")) {
      homer.classList.replace("top3", "top2");
    } else if (homer.classList.contains("top4")) {
        homer.classList.replace("top4", "top3");
    } if (homer.classList.contains("top5")) {
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
