//create secret number
var num = 4;


//ask user for guess
var guess = Number(prompt("What's your guess?"));

//check guess
if (guess === num) {
    alert("Hey, you got it!  Good for you!");
    }

else if (guess > num) {
    alert("That's too high.");
    }

else {
    alert("That's too low.");
    }

