function isEven(num) {
if (num % 2 === 0){
return true;
}
return false;
}

console.log("Testing isEven.");
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(num) {
if (num < 0) {
return "That number is not positive.";
}
if (num === 0) {
return 1;
}
return num * factorial(num -1);
}

console.log("Testing factorial.");
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
console.log(factorial(-6));

function kebabToSnake(str) {
return str.replace(/-/g, "_");
}

console.log("Testing kebabToSnake.");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));
console.log(kebabToSnake("this-is-going-to-involve-a-lot-of-dashes-that-need-to-be-replaced-with-underscores."));
