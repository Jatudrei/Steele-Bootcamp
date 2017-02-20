var button = document.querySelector("button");
var par = document.querySelector("#click");
var clicked = false;

//Setup Click Listener on Button
button.addEventListener("click", function() {

   if (!clicked) {par.innerHTML = "I can't believe it!  They finally clicked me!  <strong>Blurt!</strong>";}
   else {par.textContent = "They unclicked me.  I hate my life.";}
   clicked = !clicked;

   });

// Setup Click Listener on LIs
var liClick = false;

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.background="pink";
    });
}

