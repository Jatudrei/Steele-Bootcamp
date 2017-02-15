console.log("Print All Integers From -10 To 19");
for (var num = -10; num <= 19; num ++) {
console.log(num);
}

console.log("Print All Even Integers From 10 To 40");
for (var num = 10; num <= 40; num ++) {
if (num % 2 === 0) {
console.log(num);
}}

console.log("Print All Odd Integers Between 300 And 333");
for (var num = 300; num <= 333; num++) {
if (num % 2 !== 0) {
console.log(num);
}}

console.log("Print All Integers Divisible By Both 5 And 3 Between 5 And 50");
for (var num = 5; num <= 50; num ++) {
if (num % 5 === 0 && num % 3 === 0) {
console.log(num);
}}