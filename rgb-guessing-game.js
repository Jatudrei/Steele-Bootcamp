var colors = [
              "rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)"
              ]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

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