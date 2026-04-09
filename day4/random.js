// fucking counter (no css cause its just js)

// const countDOm = document.createElement("p")

// const reduce = document.createElement("button")
// const reset = document.createElement("button")
// const add = document.createElement("button")

// countDOm.textContent = 0
// reduce.textContent = "reduce"
// reset.textContent = "areset"
// add.textContent = "add"

// document.body.append(reduce, reset, add, countDOm)

// let count = 0

// reset.addEventListener("click", () => {
//     count = 0
//     countDOm.textContent = count
// })

// reduce.addEventListener("click", () => {
//     count--
//     if(count < 0){
//         window.alert("you can't go below 0")
//         count++
//     } else {
//         countDOm.textContent = count
//     }
// })

// add.addEventListener("click", () => {
//     count++
//     countDOm.textContent = count
// })

// color changer
const title = document.createElement("p");
const colorChange = document.createElement("button");
const colorsss = document.querySelector(".colorsss");

const colorBlocks = [];
const colorContainers = [];
const lockStatuses = [];
const colorHexes = [];

document.body.append(title, colorChange);

for (let i = 0; i < 5; i++) {
  const colorContainer = document.createElement("div");
  const colorBlock = document.createElement("div");
  const lockStatus = document.createElement("p");
  const colorHex = document.createElement("p");

  colorContainers.push(colorContainer);
  colorBlocks.push(colorBlock);
  lockStatuses.push(lockStatus);
  colorHexes.push(colorHex);

  colorsss.append(colorContainer);
  colorContainer.append(colorBlock, colorHex);
  colorBlock.append(lockStatus);

  colorContainer.id = `container${i}`;
  colorBlock.id = `block${i}`;
  colorHex.id = `hex${i}`;

  title.textContent = "color randomizer";
  colorHex.textContent = "#XXXXXX";
  colorChange.textContent = "click here to change color";
  lockStatus.textContent = "unlocked";

  colorBlock.style.width = "150px";
  colorBlock.style.height = "150px";

  colorBlock.addEventListener("mouseenter", () => {
    lockStatus.textContent = "lock color?";
  });

  colorBlock.addEventListener("mouseleave", () => {
    lockStatus.textContent = "unlocked";
  });
}

function randomizeColor() {
  const alphabet = "ABCDEF";
  const nums = "0123456789";

  const alphArr = alphabet.split("");
  const numArr = nums.split("");

  const randomColor = [];

  for (let i = 0; i < 6; i++) {
    const sourceArr = Math.floor(Math.random() * 2 + 1) < 2 ? alphArr : numArr;
    const randomIndex = Math.floor(Math.random() * sourceArr.length);
    const randomChar = sourceArr[randomIndex];
    randomColor.push(randomChar);
  }

  console.log(randomColor);

  const resultColor = randomColor.join("");

  console.log(resultColor);

  colorHex.textContent = "#" + resultColor;
  colorBlock.style.backgroundColor = `#${resultColor}`;
}

colorChange.addEventListener("click", randomizeColor);

// digital cock

// mem card
