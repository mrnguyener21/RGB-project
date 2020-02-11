//STEP 1CONNECT THE CLASSES AND ID TO DOM
//the top section//
let theGreat = document.querySelector(".theGreat");
let RGBColor = document.querySelector(".RGBColor");
let red = document.querySelector("#red");
let blue = document.querySelector("#green");
let green = document.querySelector("#blue");
let colorGame = document.querySelectory(".colorGame");

//the button sections
let options = document.querySelector(".options");
let button = document.querySelector(".button");
let level = document.querySelector(".level");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");

//the square sections
let theColors = document.querySelector(".theColors");
let topRow = document.querySelector(".topRow");
let bottomRow = document.querySelector(".bottomRow");
let color = document.querySelector(".color");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let color3 = document.querySelector("#color3");
let color4 = document.querySelector("#color4");
let color5 = document.querySelector("#color5");
let color6 = document.querySelector("#color6");

//STEP 2 Create a function that generates three random numbers from 0 - 255 and put them in variables r,g,b. 
let RGBGenerator = () => {
    red.innerHTML = Math.floor(Math.random()*255)+1;
    green.innerHTML = Math.floor(Math.random()*255)+1;
    blue.innerHTML = Math.floor(Math.random()*255)+1;
    return red,green,blue;
}

// STEP 3 create a function that returns the color array. that array contains 6 colors. each color is a string of the format mentioned above.


//4 create the event for the "easy button" to hide or maybe even comment out the bottom row
let theEasyButton = easy.addEventListener("click", () => element.classList.remove("bottomRow"));

//5 create the event for the "hard button" to reveal the bottom row 
let theHardButton = hard.addEventListener("click", () => element.classList.add("bottomRow"));

//6 create event listeners for the squares so that when you click on one you they disappear. create if else statement to where if inner html of the square matches RGB or not to display wrong or correct 
if (color !== RGBGenerator){
    element.classlist.add("tryAgain");
} else {
    element.classlist.remove("tryAgain");
    element.classList.add("correct");
    //probbaly gonna have ot remove the event listeners from the colors so the game can't continue unless you restart by clicking one of the buttons
}


//7 create the event for the "new color button" to change the colors for the squares and to add back the squares that been removed