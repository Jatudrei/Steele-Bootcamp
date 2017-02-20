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


// Incrementing player1Score by Clicking player1Button
player1Button.addEventListener("click", function() {
    player1CurrScore++;
    player1Score.textContent = player1CurrScore;
//    alert(player1CurrScore+ " " + typeof(player1CurrScore) + " " + maxScore + " " + typeof(maxScore) );
    if (player1CurrScore === maxScore) {
//        alert("Hello Mickey Mouse");
        endGame(player1Score);
    };
});

// Incrementing player2Score by Clicking player2Button
player2Button.addEventListener("click", function() {
    player2CurrScore++;
    player2Score.textContent = player2CurrScore;
    if (player2CurrScore === maxScore) {
//      alert("Hello Mickey Mouse");
        endGame(player2Score);
    };
});

// Resetting Scores By Clicking Reset Button
resetButton.addEventListener("click", function(){
    player1CurrScore = 0;
    player2CurrScore = 0;
    player1Score.textContent = player1CurrScore;
    player2Score.textContent = player2CurrScore;
});

// Changing Max Score by Using Text Input
input.addEventListener("change", function() {
    maxScore = number(input.value);
    score.textContent = maxScore;
    input.value = "";
});

function endGame(winScore) {
    alert("endGame function");
    winScore.style.color = "green";
    player1Button.removeEventListener("click");
    player2Button.removeEventListener;
};


