const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll(".square");
const title = document.querySelector("#title");
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#messageDisplay");

let colors = [];
let pickedColor = null;
let numberOfSquares = 6;

message.style.color = '#ffffff'

const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}

const generateColors = (number) => {
    const generatedColors = [];

    for (let i = 0; i < number; i++) {  
        const color = generateColor();
        
        generatedColors.push(color);
    };
    
    return generatedColors;
}
generateColors();



const pickColorToGuess = () => colors[Math.floor(Math.random() * numberOfSquares)];
pickColorToGuess();


const reset = () => {
    colors = generateColors(numberOfSquares);
    pickedColor = pickColorToGuess();

    for (let i = 0; i < numberOfSquares; i++) {
        if(colors[i]){
            squares[i].style.display = "block";//can you explain what this is for again?
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }    
    }
}
reset();

colorDisplay.textContent = `${pickedColor}`;

for (let i = 0; i < numberOfSquares; i++) {        
    squares[i].addEventListener("click", () => {
        const clickedColor = squares[i].style.background;

        if (clickedColor === pickedColor){
            // change the messageDisplay to 'Correct!' (use textContent)
            message.textContent = 'Correct!'
            // change the resetButton to 'Play Again?' (use textContent)
            resetButton.textContent = 'Play Again?'
            // change the color of the title to pickedColor
            message.style.background = pickedColor;
            if (pickedColor = `${255}, ${255}, ${255})`){ 
                message.style.color = '#000000';//need help with this
            };
            //make all the square the show the same color(the correct color)
            squares[i].style.background = pickedColor;
            //make it so you can't continue the game...need to elaborate   
        }else { 
            // change the messageDisplay to 'Try Again!' (use textContent)
            squares[i].style.background = '#232323';
            message.textContent = 'Try Again!';
            message.style.background = '#ff0000';
        }
    });
}

// add event listeners to modeButtons
// modeButtons.addEventListener("click", () => modeButtons[0]? /* gotta connect this to generateColors(3)*/ : /*gotta connect this to generateColors(6)*/);
// add event listener to resetButton 
resetButton.addEventListener("click",()=>{
    message.textContent = '';
    message.style.background = '#fffff';
    // why won't reset run? the squares stay the same color
});
