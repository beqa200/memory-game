const storedSettings = JSON.parse(localStorage.getItem("parameters"));
let main = document.querySelector('main');
let body = document.querySelector('body');

if (storedSettings && (storedSettings.gridSize === "4x4")) {

    let cards = "";
    for (let i = 1; i < 17; i++) {
        cards += `<div class= "num ${i}"></div>`
    }

    main.insertAdjacentHTML("beforeend", cards);
} else {

    body.classList.add("grid6x6")
    let cards = "";
    for (let i = 1; i < 37; i++) {
        cards += `<div class= "num ${i}"></div>`
    }
    main.insertAdjacentHTML("beforeend", cards);
}

const timerElement = document.getElementById("timer");

let seconds = 0;
let minutes = 0;

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

const timerInterval = setInterval(updateTimer, 1000);



let menu = document.querySelector('.menu-box');
let mainMenu = document.querySelector('#mainMenu');

menu.addEventListener('click', () => {
        mainMenu.style.display = 'flex';
})

