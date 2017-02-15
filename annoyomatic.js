var response = false

while (response === false) {

response = prompt("Are we there yet?");

if (response.indexOf("yeah") !== -1 || response.indexOf("yes") !== -1) {
   response = true;
   alert("Finally!")
   }
else {
    response = false;
    }
}
