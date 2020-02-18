const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll(".square");
const title = document.querySelector("#title");
const colorDisplay = document.querySelector("#colorDisplay");
const message = document.querySelector("#message");

let colors = [];
let pickedColor = null;
let numberOfSquares = 6;

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

const pickColorToGuess = () => colors[Math.floor(Math.random() * numberOfSquares)];

const reset = () => {
    colors = generateColors(numberOfSquares);
    pickedColor = pickColorToGuess();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Game';
    message.textContent = '';

    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }    
    }

    title.style.background = 'steelblue';
}

for (let i = 0; i < numberOfSquares; i++) {        
    squares[i].addEventListener("click", () => {
        const clickedColor = squares[i].style.background;

        if (clickedColor === pickedColor){
            message.textContent = 'Correct!'
            resetButton.textContent = 'Play Again?'
            title.style.background = pickedColor;

            for (let i = 0; i < numberOfSquares; i++) {
                squares[i].style.background = pickedColor;   
            }    
        } else { 
            squares[i].style.background = '#232323';
            message.textContent = 'Try Again!';
        }
    });
}

for(let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', () => {
        if (modeButtons[i].textContent === 'Easy') {
            modeButtons[0].classList.add('selected');
            modeButtons[1].classList.remove('selected');
            numberOfSquares = 3;
        } else if(modeButtons[i].textContent === 'Hard') {
            modeButtons[1].classList.add('selected');
            modeButtons[0].classList.remove('selected');
            numberOfSquares = 6;
        }

        reset();
    });
}

resetButton.addEventListener("click", () => reset());

reset();
