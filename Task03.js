/*
Task 3: Using the modulus operator, %, to test if a given number is odd

To achieve this task, you need to declare six variables, as follows:

1. The first variable, named num1,  should be assigned a number value of 2.

2. The second variable, named num2, should be assigned a number value of 5.

3. The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

4. The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

5. The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

6. The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.

Run console log two times after you've set the variables:
1. The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1

2. The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2


Note: The output to the console should be as follows:
=> Is 2 an even number? true

=> Is 5 an even number? false
*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 !== 0;
var result2 = test2 !== 0;

// First console log
console.log("Is", num1, "an even number?", !result1);

// Second console log
console.log("Is", num2, "an even number?", !result2);