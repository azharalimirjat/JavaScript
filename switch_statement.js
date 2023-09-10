/* 
SWITCH STATEMENT:
    Use the switch statement to select one of many code blocks to be executed.

Syntax:
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/

// Example:

var day_number =5;
switch (day_number) {
    case 1:
        console.log("Monday");
      break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    }