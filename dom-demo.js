var button = document.querySelector("button");
var par = document.querySelector("#click");
var clicked = false;

//Setup Click Listener
button.addEventListener("click", function() {

   if (!clicked) {par.textContent = "I can't believe it!  They finally clicked me!";}
   if (clicked) {par.textContent = "They unclicked me.  I hate my life.";}
   clicked = !clicked;

   });