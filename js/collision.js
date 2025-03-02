"use strict";

const checkCollision = () => {
    // const homerPosition = document.querySelector(".js-homer").getBoundingClientRect();
    // const chip1Position = document.querySelector(".js-chip1").getBoundingClientRect();
    // const chip2Position = document.querySelector(".js-chip2").getBoundingClientRect();
    // const chip3Position = document.querySelector(".js-chip3").getBoundingClientRect();
    // const chip4Position = document.querySelector(".js-chip4").getBoundingClientRect();
    // const chip5Position = document.querySelector(".js-chip5").getBoundingClientRect();

    // const homer = document.querySelector(".js-homer");

    // const scoreHtml = document.querySelector(".js-score");
    // let score =  parseInt(scoreHtml.innerHTML);

    // console.log(homerPosition.x);
    // console.log(homerPosition.y);
    // console.log(homer.offsetLeft);
    // console.log(homer.offsetTop);


    /* Posicions homi:
        x sempre es 20
        y -->   top3: 281.82293701171875
                top2: 192.27084350585938
                top1: 102.70833587646484
                top4: 371.375
                top5: 460.9375
        
        Posicio chip1:

    */

        
    // if (homerPosition.y === 460.9375 && chip1Position.y === 206 && Math.round(chip1Position.x) === 160) {
    //     console.log("yesss");
    //     ++score;
    //     scoreHtml.innerHTML = score;
    // }
}

setInterval(checkCollision, 10000);

document.addEventListener("DOMContentLoaded", checkCollision);
