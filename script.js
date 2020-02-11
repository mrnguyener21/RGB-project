//STEPS//
// 1 connect all of the html classes to a dom//
//2  create a function that generates three random numbers from 0-255 and put them in variables called r g and b. that function nees to return a string '(rgb,(r,g,b)' letter being dynamic numbers)
//3 create a function that returns the color array. that array contains 6 colors. each color is a string of the format mentioned above.
//4 create the event for the "easy button" to hide or maybe even comment out the bottom row
//5 create the event for the "hard button" to reveal the bottom row 
//6 create the event for the "new color button" to change the colors for the squares
//7 create event listeners for the squares so that when you click on one you they disappear 

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
red.innerHTML = Math.floor(Math.random()*255)+1;
green.innerHTML = Math.floor(Math.random()*255)+1;
blue.innerHTML = Math.floor(Math.random()*255)+1;

// STEP 3 create a function that returns the color array. that array contains 6 colors. each color is a string of the format mentioned above.


//4 create the event for the "easy button" to hide or maybe even comment out the bottom row
let theEasyButton = easy.addEventListener("click",function(){
        element.classList.remove("bottomRow")
    });

//5 create the event for the "hard button" to reveal the bottom row 
let theHardButton = hard.addEventListener("click",function(){
    element.classList.add("bottomRow")
});

//6 create the event for the "new color button" to change the colors for the squares


//7 create event listeners for the squares so that when you click on one you they disappear 
