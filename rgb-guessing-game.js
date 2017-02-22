var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
        if (colors[i]) {
        squares[i].style.background = colors[i];
        } else {
        squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";}
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);

    // pick a new winning color
    pickedColor = pickColor();

    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;

    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }

    // delete "That's right" or "Try Again" message
    messageDisplay.textContent = "";

    // restore start color to info strip
    h1.style.background = "#232323";

    // restore button text
    resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    // add click listeners to squares
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