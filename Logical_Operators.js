/*
Logical Operators:
    Logical operators are used to determine the logic between variables or values.

Operator	Description	Example	        
&&	        and	        (x < 10 && y > 1)       is true	
||	        or	        (x == 5 || y == 5)      is false	
!	        not	        !(x == y)               is true

*/

/*
AND(&&) Operator: 
    Returns true if all conditions are true, returns false if any one conditions is false.

Example:
*/
console.log(4<5 && 10>5) //OUTPUT: true

console.log(4>5 && 10>5) //OUTPUT: false


/*
OR(||) Operator: 
    Returns true if any one of given conditions is true.

Example:
*/
console.log(4<5 || 10>5) //OUTPUT: true

console.log(4>5 || 10>5) //OUTPUT: true



/*
NOT(!) Operator: 
    If condition is true it returns false and if false it returns true.

Example:
*/
let num1 = 5;
let num2 = 10;
console.log(!(num1>num2)) //OUTPUT: true

console.log(!(num1<num2)) //OUTPUT: false