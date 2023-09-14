
let selectTheme = Array.from(document.getElementsByClassName('number-btn'));

let selectGrid = Array.from(document.getElementsByClassName('grid-btn'));

let nums = Array.from(document.getElementsByClassName('nums-cont'));


let startGame = document.querySelector('.start-game-btn');

let settings = {theme: "Numbers", playerNum: 1, gridSize: "4x4"};



let clickedThemeButton = selectTheme[0];

selectTheme.map((item) => {
    item.addEventListener('click', (event) => {
        settings = {...settings, theme: event.target.innerText};
        console.log(settings);
        clickedThemeButton =event.target;
        selectTheme.map((item2) => {
            if (item2 == clickedThemeButton) {
                item2.style.background = "#304859";
            } else {
                item2.style.background = "#BCCED9";
            }
        })
    })
})


let clickedNumButton = nums[0];

nums.map((item)=> {
    item.addEventListener('click', (event) => {
        settings= {...settings, playerNum: event.target.innerText}
        console.log(settings)
        clickedNumButton = event.target;
        nums.map((item2) => {
            if (item2 == clickedNumButton) {
                item2.style.background = "#304859";
            } else {
                item2.style.background = "#BCCED9";
            }
        })
    })
})

let clickedGridButton = selectGrid[0];

selectGrid.map((item)=> {
    item.addEventListener('click', (event) => {
        settings= {...settings, gridSize: event.target.innerText}
        console.log(settings)
        clickedGridButton = event.target;
        selectGrid.map((item2) => {
            if (item2 == clickedGridButton) {
                item2.style.background = "#304859";
            } else {
                item2.style.background = "#BCCED9";
            }
        })
    })
})



startGame.addEventListener('click', () => {
    localStorage.setItem("parameters", JSON.stringify(settings))
})

