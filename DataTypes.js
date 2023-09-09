/*
DATATYPES:
    describe the different types or kinds of data that 
    we're gonna be working with and storing in variables.

JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object

The Object Datatype:
    The object data type can contain:

1. An object
2. An array
3. A date


*/

// Numbers:
let length = 16;
let weight = 7.5;

/* 
Strings:
    A string (or a text string) is a series of characters like "John Doe".

==> Strings are written with quotes. You can use single or double quotes:

*/
let color = "Yellow";
let lastName = "Johnson";

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';



// Booleans
let x = true;
let y = false;


// Object:
const person = {firstName:"John", lastName:"Doe"};


// Array object:
const cars = ["Saab", "Volvo", "BMW"];


// Date object:
const date = new Date("2022-03-25");


/*
JavaScript BigInt
    All JavaScript numbers are stored in a a 64-bit floating-point format.

*/
let num = BigInt("123456789012345678901234567890");



// Exponential Notation
let a = 123e5;    // 12300000
let b = 123e-5;   // 0.00123


// JavaScript Arrays
const car = ["Saab", "Volvo", "BMW"];


/*
JavaScript Objects
    Object properties are written as name:value pairs, separated by commas.

*/
const persons = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


/*
Undefined
    A variable without a value, has the value undefined. The type is also undefined.
*/
let city;    // Value is undefined, type is undefined
