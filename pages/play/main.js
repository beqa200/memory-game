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