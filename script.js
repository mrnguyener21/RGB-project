//these are used for DOM
const modeButtons = document.querySelectorAll('.mode');
const resetButton = document.querySelector('#reset');
const squares = document.querySelectorAll(".square");
const title = document.querySelector("#title");
const colorDisplay = document.querySelector("#colorDisplay");
const message = document.querySelector("#message");

let colors = [];
let pickedColor = null;// this is used to have pickedColor be part of the global scope.I'm assuming we set it to null just so we can have a value for it for the time being
let numberOfSquares = 6;

//this function allows us to generate a random number from 0-255, and we repeat it three times so there's one for r, g and b. The reason that we have to return a string is so 
const generateColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}
// this...im a little iffy with this function tbh
const generateColors = (number) => {
    const generatedColors = [];

    for (let i = 0; i < number; i++) {  
        const color = generateColor();
        
        generatedColors.push(color);
    };
    
    return generatedColors;
}

//This function is what allows us to have a different set of rgb combination for each square by multiplying our random formula and pushing it within our colors array
const pickColorToGuess = () => colors[Math.floor(Math.random() * numberOfSquares)];

// this function allows is used in tandam with our reset button function so whenever we it runs it can "reset" the game
const reset = () => {
    colors = generateColors(numberOfSquares);
    pickedColor = pickColorToGuess();//this changes pickedColor in our global scope to become pickcolortoGuess so then we have the one "correct" square that correlates with the rgb combination displayed in the titlte
    colorDisplay.textContent = pickedColor; // changes the text to pickedColor so the "correct square" and what's being shown can match
    resetButton.textContent = 'New Game';// changes the text in the rest button to new game
    message.textContent = ''; // this basically makes the box that states correct or try again blank since this function is used to reset the game
    //
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }    
    }

    title.style.background = 'steelblue';// this resets the color of the title
}
//this for loop is used to determine what happens as we click on each of the squares. the reason a for loop is used is because...we need it to happen for all of the squares, so instead of  doing multiple functions that does the same thing for each square, we can just use the loop and use 'i' as a way to cycle through the squares
for (let i = 0; i < numberOfSquares; i++) {        
    squares[i].addEventListener("click", () => {
        const clickedColor = squares[i].style.background;// this variable is used to "grab" the rgb combination of that square so we can compare it to pickedColor which as stated before is the 'correct square'
        
        //here we are using an if else statement to compare the background of the clicked square thanks to our variable clickedColor to the variable pickedColor. 
        if (clickedColor === pickedColor){
            //Here, we are showing what happens if variable clickedColor and pickedColor match 
            message.textContent = 'Correct!'//the message box will display Correct!
            resetButton.textContent = 'Play Again?' //the rest button will change to Play Again?
            title.style.background = pickedColor; //the color of the title background will change to pickedColor to display that color
            
            //this for loops is used to loop through all of the squares and to have each them have the background change to the pickedColor similar to what we did for the title
            for (let i = 0; i < numberOfSquares; i++) {
                squares[i].style.background = pickedColor;   
            }    
        } else { 
            //this else statement is used if we picked an "incorrect square"
            squares[i].style.background = '#232323';//the square will have it's color changed to match the background so to the user the square "dissappeared"
            message.textContent = 'Try Again!';//the message box will display to try again
        }
    });
}
//this for loop is used to cycle through the modeButtons since they work similarly
for(let i = 0; i < modeButtons.length; i++) {
    //here we are initation an if else statement to show what happens when we press on the easy button or hard button
    modeButtons[i].addEventListener('click', () => {
        //here we matching the text in html to 'Easy' so the code 'knows' that we are on easy mode
        if (modeButtons[i].textContent === 'Easy') {
            //the next two lines of code are used to 'toggle' the text selected by adding it to the easy button and removing it from the hard button so that the style for selected is connected to the button giving it a steel blue background lettin the user know they are on easy mode
            modeButtons[0].classList.add('selected');
            modeButtons[1].classList.remove('selected');
            numberOfSquares = 3;// this is used to change the number of squares to 3 so that the bottom row 'disappears'

            //this is what happens if we press on the button and it matches hard
        } else if(modeButtons[i].textContent === 'Hard') {
            //exact same toggle logic as with easy
            modeButtons[1].classList.add('selected');
            modeButtons[0].classList.remove('selected');
            numberOfSquares = 6;// changes the number of squares to 6 so that all the squares are visible
        }

        reset();// we have this reset to happen so whenever we click on either easy or hard a new set of colors are given. the reason it's outside the for loop is because we want it to happen for both and if we both it in the for loop we would have to write it twice, once for each statement
    });
}
resetButton.addEventListener("click", () => reset());// this resets the game whenever we click on the reset button

reset();// this is called so when we open the game we are given a random set of squares instead of all of them matching upon opening the game
