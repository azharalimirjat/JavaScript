/* 
FOR LOOP:
    loops through a block of code a number of times.

Syntax:
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

=> Expression 1 is executed (one time) before the execution of the code block.
=> Expression 2 defines the condition for executing the code block.
=> Expression 3 is executed (every time) after the code block has been executed.

*/


// Example:
for (let i = 0; i < 5; i++) {
    console.log(i," ")
}

/* 
    From the example above, you can read:
=> Expression 1 sets a variable before the loop starts (let i = 0).
=> Expression 2 defines the condition for the loop to run (i must be less than 5).
=> Expression 3 increases a value (i++) each time the code block in the loop has been executed.
*/
