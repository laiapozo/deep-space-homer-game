"use strict";
const checkCollision = () => {
    // const homerPosition = document.querySelector(".js-homer").getBoundingClientRect();
    // const chip1Position = document.querySelector(".js-chip1").getBoundingClientRect();
    // const chip2Position = document.querySelector(".js-chip2").getBoundingClientRect();
    // const chip3Position = document.querySelector(".js-chip3").getBoundingClientRect();
    // const chip4Position = document.querySelector(".js-chip4").getBoundingClientRect();
    // const chip5Position = document.querySelector(".js-chip5").getBoundingClientRect();

    const homer = document.querySelector(".js-homer");
    const chip1 = document.querySelector(".js-chip1")

    const scoreHtml = document.querySelector(".js-score");
    let score =  parseInt(scoreHtml.innerHTML);

    // console.log(homerPosition);
    // console.log(homer.offsetLeft);
    // console.log(homer.offsetTop);
    // console.log(chip1.offsetLeft);
    // console.log(chip1.offsetTop);


    /* 
    Posicions homi:
        offsetLeft sempre es: 20
        offsetTop -->   top1: 14
                        top2: 97
                        top3: 180
                        top4: 263
                        top5: 346
        
    Posicions chip1:
        offsetTop sempre es: 37
        offsetLeft quan hi ha colission: 125

    */

        
    if (homer.offsetTop === 14 && chip1.offsetLeft === 125) {
        console.log("yesss");
        ++score;
        scoreHtml.innerHTML = score;
    }
}

setInterval(checkCollision, 10);

document.addEventListener("DOMContentLoaded", checkCollision);
