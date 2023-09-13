/* 
OBJECT:
    In JavaScript, objects are king. If you understand objects, you understand JavaScript.

"Everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.


Syntax:
const obj = {
  property1: value1, // property name may be an identifier
  property2: value2, // or a number
  propertyN: value3, // or a string
};
*/


// Method:01: Creating Object

const person = {firstName:"Azhar", 
                lastName:"Mirjat", 
                age:20, 
                eyeColor:"brown"};


// Method:02: Creating Object
const person1 = {};
person1.fName = "Shahid";
person1.lName = "Leghari";
person1.agee = 22;
person1.eye_Color = "black";


// Method:03: Using the JavaScript Keyword new
const person2 = new Object();
person2.frstName = "Jameel";
person2.lstName = "Jatao";
person2.age_number = 25;
person2.eyesColor = "blue";


// This is how we access age from person2
console.log(person2.age_number) // OUTPUT: 25

// NOTE: The values assigned to properties car mutable, means these values can be changed later on.

// EX: changing age value of person2
person2.age_number = 21;
console.log(person2.age_number) //OUTPUT after changing: 21
