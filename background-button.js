var button = document.querySelector("button");
var body = document.querySelector("body");

// Setup the Click Listener

button.addEventListener("click", function() {
    if (body.style.background === "purple") {
        body.style.background = "white";
    } else {
    body.style.background = "purple";
    }
});