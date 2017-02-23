var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupColoredSquares();
    reset(numSquares);
}

function setupModeButtons(){
    // click listeners
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // remove selected class from all buttons
            for (var j = 0; j < modeButtons.length; j++) {
                modeButtons[j].classList.remove("selected");
            }
            // add selected class to clicked button
            this.classList.add("selected");
            // determine how many squares to show with the ternary operator
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // pick new colors, new pickedColor, and update page
            reset(numSquares);
        });
    }
}

function setupColoredSquares(){
   // click listeners
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            // compare color of clicked square to pickedColor
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "That's Right";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again Fool!";
            } else {
              this.style.background="#232323";
              messageDisplay.textContent = "Try Again";
              }
            });
    }
}

function reset(numSquares){
    colors = generateRandomColors(numSquares);
    // pick a new winning color
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    // delete "That's right" or "Try Again" message
    messageDisplay.textContent = "";
    // restore start color to info strip
    h1.style.background = "CornflowerBlue";
    // restore button text
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
    reset(numSquares);
})

function changeColors(color){
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
            // change color of each to match correct color
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];

    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    };

    // return the array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 till 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 till 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 till 255
    var b = Math.floor(Math.random() * 256);

    // building and returning string with format of "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}