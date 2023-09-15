const storedSettings = JSON.parse(localStorage.getItem("parameters"));
let main = document.querySelector('main');
let body = document.querySelector('body');

let arr = [];

if (storedSettings && (storedSettings.gridSize === "4x4")) {

    arr = shuffleArray(Array.from({
        length: 8
    }, (_, index) => index + 1));

    console.log(arr)
    let cards = "";
    for (let i = 1; i < 17; i++) {
        cards += `<div class= "num ${i}"></div>`
    }

    main.insertAdjacentHTML("beforeend", cards);
} else {

    arr = shuffleArray(Array.from({
        length: 18
    }, (_, index) => index + 1));

    body.classList.add("grid6x6")
    let cards = "";
    for (let i = 1; i < 37; i++) {
        cards += `<div class= "num ${i}"></div>`
    }
    main.insertAdjacentHTML("beforeend", cards);
}






const cards = Array.from(document.querySelectorAll(".num"));

let temparr = [];

let moves = 0;

if (storedSettings.theme == "Numbers") {
    cards.map((item, index) => {
        item.addEventListener('click', () => {
            item.style.background = '#BCCED9';
            item.innerText = arr[index];
            temparr.push(item);
            console.log(temparr);
            if (temparr.length == 2) {
                moves++;
                document.querySelector(".number").textContent = moves.toString().padStart(2, 0);
                if (temparr[0].innerText != temparr[1].innerText) {
                    cards.map((item) => {
                        item.style.pointerEvents = "none";
                    })
                    setTimeout(() => { 
                        temparr[0].innerText = "";
                        temparr[1].innerText = "";
                        temparr[0].style.background = '#304859';
                        temparr[1].style.background = '#304859';
                        temparr = [];
                        cards.map((item) => {
                            if (item.innerText == "") {
                            item.style.pointerEvents = "auto";
                            // num = document.querySelector('.num').style.background = "#FDA214";
                            }
                        })
                    }, 1200)
                } else {
                    temparr[0].style.background = '#FDA214';
                    temparr[1].style.background = '#FDA214';
                    temparr = [];
                }
            }
        })
    })
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




function shuffleArray(array) {


    // Duplicate the array
    const repeatedArray = array.concat(array);

    for (let i = repeatedArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap array[i] and array[j]
        [repeatedArray[i], repeatedArray[j]] = [repeatedArray[j], repeatedArray[i]];
    }

    return repeatedArray;
}