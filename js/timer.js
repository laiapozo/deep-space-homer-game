"use strict";

let timeLimitInSeconds = 5;
const timer = document.querySelector(".timer");

const gameOver = document.querySelector(".game-over");

function startTimer() {
  timeLimitInSeconds--; // Restar segundos continuamente

  let minutes = "0" + Math.floor(timeLimitInSeconds / 60); // Divir total de segundos entre 60 y redondear abajo hasta un Int (será 0 o 1 en este caso)
  let seconds = timeLimitInSeconds % 60; // Por ejemplo con 105 --> 105 = 60 × 1 + 45 (45 son los segundos que se necesitan)

  seconds < 10 ? (seconds = "0" + seconds) : seconds; // Para los últimos 9 segundos, poner un 0 delante para que quede tipo 0:05

  if (timeLimitInSeconds < 0) {
    // Si los segundos terminan, se cancela la acción y pinta 00:00 en el timer
    clearInterval(timerInterval); // clearInterval() method of the Window interface cancels a timed, repeating action which was previously established by a call to setInterval()
    return (timer.innerHtml = "00:00");
  }

  timer.innerHTML = minutes + ":" + seconds; //Se pinta en el timer el tiempo cada segundo, ya que se ejecuta la función cada segundo

  if (timer.innerHTML === "00:00") { //Cuando el timer esté a 0, aparece el banner de Game Over que tenía la clase hidden
    gameOver.classList.remove("hidden");
  }
}

const timerInterval = setInterval(startTimer, 1000); // Method of the Window interface repeatedly calls a function, with a fixed time delay (in milliseconds, 1000 ms = 1s) between each call
