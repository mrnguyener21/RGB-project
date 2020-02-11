//STEP 1CONNECT THE CLASSES AND ID TO DOM
//the top section//
let theGreat = document.querySelector(".theGreat");
let RGBColor = document.querySelector(".RGBColor");
let red = document.getElementById("red");
let blue = document.getElementById("green");
let green = document.getElementById("blue");
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
let square = document.querySelector(".square");
let square1 = document.querySelector("#color1");
let square2 = document.querySelector("#color2");
let square3 = document.querySelector("#color3");
let square4 = document.querySelector("#color4");
let square5 = document.querySelector("#color5");
let square6 = document.querySelector("#color6");

//STEP 2 Create a function that generates three random numbers from 0 - 255 and put them in variables r,g,b. That function needs to return a string 'rgb(r, g, b)', letter being dynamic numbers
let RGBGenerator = () => {
    let r = toString(red.innerHTML = Math.floor(Math.random()*255)+1);
    let g = toString(green.innerHTML = Math.floor(Math.random()*255)+1);
    let b = toString(blue.innerHTML = Math.floor(Math.random()*255)+1);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// STEP 3 create a function that returns the square array. that array contains 6 colors. each square is a string of the format mentioned above. this part should be the one to change the colors of the square
let colorArray = [square1,square2,square3,square4,square5,square6];
//maybe i can assign a randomized math formula to each of the array's index while creating a formula to randomize the order of the array. so that way ex: index 1 will always match to the RGBGenerator, but it will belong to a different squre each time since the order will change everytime 
randomColor1 = colorArray[1].Math.floor(Math.random()*255)+1;
randomColor2 = colorArray[2].Math.floor(Math.random()*255)+1;
randomColor3 = colorArray[3].Math.floor(Math.random()*255)+1;
randomColor4 = colorArray[4].Math.floor(Math.random()*255)+1;
randomColor5 = colorArray[5].Math.floor(Math.random()*255)+1;
correctColor = colorAray[6].RGBGenerator;
//4 create the event for the "easy button" to hide or maybe even comment out the bottom row
let theEasyButton = easy.addEventListener("click", () => element.classList.remove("bottomRow"));//this probably didn't work because the rest square divs still exist

//5 create the event for the "hard button" to reveal the bottom row 
let theHardButton = hard.addEventListener("click", () => element.classList.add("bottomRow"));

//6 create event listeners for the squares so that when you click on one you they disappear. create if else statement to where if inner html of the square matches RGB or not to display wrong or correct 
if (square !== RGBGenerator){
    element.classlist.add("tryAgain");
} else {
    element.classlist.remove("tryAgain");
    element.classList.add("correct");
    //probbaly gonna have ot remove the event listeners from the colors so the game can't continue unless you restart by clicking one of the buttons
};

//7 create the event for the "new square button" to change the colors for the squares and to add back the squares that been removed