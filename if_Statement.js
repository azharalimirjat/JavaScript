/* 
Conditional Statements:
    Very often when you write code, you want to perform different actions for different decisions.
    You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

    1. Use if to specify a block of code to be executed, if a specified condition is true
    2. Use else to specify a block of code to be executed, if the same condition is false
    3. Use else if to specify a new condition to test, if the first condition is false
    4. Use switch to specify many alternative blocks of code to be executed
*/


/*IF STATEMENT:
Syntax:
if (condition) {
    //  block of code to be executed if the condition is true
}

*/

// Example:
var hour = 10;
if (hour < 18) {
    console.log("Good day");
}