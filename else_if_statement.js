/* 
The else if Statement:

Syntax:
if (condition1) {
  //  block of code to be executed if condition1 is true
} 
else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} 
else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/


// Example:
var time = 15;
if (time < 10) {
    console.log("Good Morning");
} 
else if (time < 20) {
    console.log("Good day");
} 
else {
    console.log("Good Evening");
}