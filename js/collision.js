"use strict";
const checkCollision = () => {
    const homer = document.querySelector(".js-homer");
    const chip1 = document.querySelector(".js-chip1");
    const chip2 = document.querySelector(".js-chip2");
    const chip3 = document.querySelector(".js-chip3");
    const chip4 = document.querySelector(".js-chip4");
    const chip5 = document.querySelector(".js-chip5");
    const scoreHtml = document.querySelector(".js-score");
    let score =  parseInt(scoreHtml.innerHTML);
        
    if (homer.offsetTop === 14 && chip1.offsetLeft < 150 && chip1.offsetLeft > -35) {
        ++score;
        scoreHtml.innerHTML = score;
    } else if (homer.offsetTop === 97 && chip2.offsetLeft < 150 && chip2.offsetLeft > -35) {
        ++score;
        scoreHtml.innerHTML = score;
    } else if (homer.offsetTop === 180 && chip3.offsetLeft < 150 && chip3.offsetLeft > -35) {
        ++score;
        scoreHtml.innerHTML = score;
    } else if (homer.offsetTop === 263 && chip4.offsetLeft < 150 && chip4.offsetLeft > -35) {
        ++score;
        scoreHtml.innerHTML = score;
    } else if (homer.offsetTop === 346 && chip5.offsetLeft < 150 && chip5.offsetLeft > -35) {
        ++score;
        scoreHtml.innerHTML = score;
    }
}

setInterval(checkCollision, 1000);

document.addEventListener("DOMContentLoaded", checkCollision);
