var age = prompt("Ok, how old are you?");

if (age < 0) {
    alert("That's not possible.  You're obviously born already.");
    }
else if (age < 18) {
    alert("Scram, kid, go back to your kiddie parties.");
    }
else if (age < 21) {
    alert("Come on in, but don't let me catch you drinking.");
    }
else if (age == 21) {
    alert("Happy birthday, kid.  You get a free shot.");
    }
else {
    alert("Ok, come in and have a nice time.");
    }

if (age % 2 !== 0) {
    alert("You've got an odd age, you know?");
    }

if (Math.sqrt(age) % 1 === 0) {
    alert("Hey, did you realize that your age is a perfect square?");
    }