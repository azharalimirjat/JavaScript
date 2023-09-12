/* 
TRY:
    The try statement allows you to define a block of code to be 
    tested for errors while it is being executed.


CATCH:
    The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

THROW:
    The throw statement allows you to create a custom error.
Technically you can throw an exception (throw an error).

==> When executing JavaScript code, different errors can occur.
Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things.

=>NOTE: The JavaScript statements try and catch come in pairs:

Syntax:
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/


// EX:

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")