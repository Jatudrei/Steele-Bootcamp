var player1Score = document.getElementById("player1Score");
var player2Score = document.getElementById("player2Score");
var player1CurrScore = 0;
var player2CurrScore = 0;
var player1Button = document.getElementById("player1Button");
var player2Button = document.getElementById("player2Button");
var resetButton = document.getElementById("resetButton");
var input = document.querySelector("input");
var maxScore = 5;
var score = document.querySelector("#score");
var gameOver = false;


// Incrementing player1Score by Clicking player1Button
player1Button.addEventListener("click", function() {
    player1CurrScore++;
    player1Score.textContent = player1CurrScore;
    if (player1CurrScore === maxScore) {
        player1Score.style.color="green";
        endGame();
    };
});

// Incrementing player2Score by Clicking player2Button
player2Button.addEventListener("click", function() {
    player2CurrScore++;
    player2Score.textContent = player2CurrScore;
    if (player2CurrScore === maxScore) {
        player2Score.style.color="green";
        endGame();
    };
});

// Resetting Everything By Clicking Reset Button
resetButton.addEventListener("click", function(){
    player1CurrScore = 0;
    player2CurrScore = 0;
    player1Score.textContent = player1CurrScore;
    player2Score.textContent = player2CurrScore;
    player1Button.removeAttribute("disabled");
    player2Button.removeAttribute("disabled");
    player1Score.style.color="black";
    player2Score.style.color="black";
    maxScore = 5;
    score.textContent = maxScore;
});

// Changing Max Score by Using Text Input
input.addEventListener("change", function() {
    maxScore = Number(input.value);
    score.textContent = maxScore;
    input.value = "";
});

function endGame(winScore) {
    player1Button.setAttribute("disabled", "true");
    player2Button.setAttribute("disabled", "true");
};


