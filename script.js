const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll(".square");
const title = document.querySelector("#title");
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#messageDisplay");

let colors = [];
let pickedColor = null;

const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// call generateColors with a paramter called number
const generateColors = () => {
    // based on the number, dynamically add either 3 or 6 colors
    for (let i = 0; i < 6; i++) {  
        const color = generateColor();

        colors.push(color);
    }

    // dynamically pick either one of the 3 colors, or one of the 6 colors
    pickedColor = colors[Math.floor(Math.random() * 5)];
}

generateColors();

// call generateColors with a param which is either 3 or 6

// create a function called setupSquares
// loop through all the squares
// add event listeners to all the squares
// change the background of each square to one of the colors in the colors array

// change the colorDisplay to pickedColor

// add event listeners to modeButtons
// add event listener to resetButton 

// AS ALWAYS, GOOD LUCK! :D