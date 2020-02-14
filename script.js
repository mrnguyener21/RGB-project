const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll(".square");
const title = document.querySelector("#title");
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#messageDisplay");

console.log(modeButtons);
let colors = [];
let pickedColor = null;//what was the point of this line again lol

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
    };
    
    // dynamically pick either one of the 3 colors, or one of the 6 colors
    pickedColor = colors[Math.floor(Math.random() * 5)];
}

// call generateColors with a param which is either 3 or 6
generateColors(3,6);

// create a function called setupSquares
const setupSquares = ()=> {
// loop through all the squares
    for (let i = 0; i < 6; i++) {
        squares[i];
    }
};
// add event listeners to all the squares
setupSquares.addEventListener("click", () =>// need a function to compare it to "pickedColor" to see if it is right or not. if wrong disapear show try again label );
// change the background of each square to one of the colors in the colors array


// change the colorDisplay to pickedColor


// add event listeners to modeButtons
modeButtons.addEventListener("click", () => modeButtons[0]? /* gotta connect this to generateColors(3)*/ : /*gotta connect this to generateColors(6)*/);
// add event listener to resetButton 
resetButton.addEventListener("click", () =>);

// AS ALWAYS, GOOD LUCK! :D
