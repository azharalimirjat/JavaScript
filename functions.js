/* 
Function:
    A JavaScript function is a block of code designed to perform a particular task.
=>> A JavaScript function is executed when "something" invokes it (calls it).

*/

// Syntax:
// Function without parameters
function functionName(){
    // Code here
}

// Example:
function message(){
    console.log("This is a function")
}

// Calling the function to print the statement written in it:
message();


// Function with Parameters
// Syntax:
var parameter1;
var parameter2;
function functionNaming(parameter1, parameter2){
    // block of code
}

// Example:
var num1;
var num2;
function addition(num1, num2) {
    var result = num1 + num2;
    console.log("Result of Adding two numbers is: ",result)
}

// Calling the function to print the statement written in it:
addition(12,24)