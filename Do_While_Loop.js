/*
Do While Loop:
    The do while loop is a variant of the while loop. 
    This loop will execute the code block once, before checking 
    if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax:

do {
  // code block to be executed
}
while (condition);

*/


// Example:01:
let i = 0;
do {
    console.log("The number is " + i);
    i++;
  }
while (i < 10);


console.log('-------------------------')


// Example:02:
let j = 1, n = 5;

// while loop from j = 1 to 5
do {
    console.log("Printing ",j);
    j += 1;
}
while (j <= n);