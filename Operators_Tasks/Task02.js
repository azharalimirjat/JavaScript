/*
Task 2: Using the logical || operator
    you should write a piece of code that could be used to determine 
    if the game is over, based on whether either the value of the 
    timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

1. Declare the variable timeRemaining, and assign the value of 0 to it.

2. Declare the variable energy, and assign the value of 10 to it.

3. Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

=> Note that the expected output in the console should be: "Game over: true".
*/
let timeRemaining = 0;
let energy  = 10;
console.log("Game over: ", timeRemaining==0 || energy==0)