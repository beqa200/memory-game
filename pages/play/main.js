const storedSettings = JSON.parse(localStorage.getItem("parameters"));
let main = document.querySelector("main");
let body = document.querySelector("body");
if (storedSettings && storedSettings.gridSize === "4x4") {
  let cards = "";
  for (let i = 1; i < 17; i++) {
    cards += `<div class= "num ${i}"></div>`;
  }

  main.insertAdjacentHTML("beforeend", cards);
} else {
  body.classList.add("grid6x6");
  let cards = "";
  for (let i = 1; i < 37; i++) {
    cards += `<div class= "num ${i}"></div>`;
  }
  main.insertAdjacentHTML("beforeend", cards);
}

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an array to represent the 16 containers
const containers = new Array(16).fill(null);

// Generate 8 random numbers and assign them to the containers
for (let i = 0; i < 8; i++) {
  const randomNumber = getRandomInt(1, 18); // Change the range as needed
  const randomContainer = getRandomInt(0, 15); // Select a random container
  containers[randomContainer] = randomNumber;
}

// Find two containers with the same number and set them to the same value
let found = false;
for (let i = 0; i < 15; i++) {
  for (let j = i + 1; j < 16; j++) {
    if (containers[i] === containers[j]) {
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}

if (found) {
  console.log("Two containers with the same number found.");
  console.log("Containers:", containers);
} else {
  console.log("No two containers with the same number found.");
}

let numbers = document.querySelectorAll(".num");
console.log(numbers);

numbers.forEach((num) => {
  num.setAttribute("data_num", getRandomInt());

  num.addEventListener("click", card);
});

function card(event) {
  console.log(event.target.getAttribute("data_num"));
  event.target.textContent = event.target.getAttribute("data_num");
}
