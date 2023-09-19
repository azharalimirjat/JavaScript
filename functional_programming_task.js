// NOT UPLOADED TO GITHUB


/*
1. Create a new variable named message, and assign the following to it on the very first line inside the consoleStyler() function body.: 
    ```
    "%c" + txt;
    ```

    Tip: Do not copy the 3 back ticks. These are used to format this document in the Preview tab.

2. Create a style variable and assign the following to it on the next line: 
    ```
    `color: ${color};`
    ```
	
	Tip: The single backtick before color and after the semi-colon must be included.

3. Next, update the style variable (using the += operator) with the following code: 
    ```
    `background: ${background};`
    ```
	
	Tip: The single backtick before background and after the semi-colon must be included.

4. Then, update the style variable (again, using the += operator) with the following code: 
    ```
    `font-size: ${fontSize};`
    ```
	
	Tip: The single backtick before font-size and after the semi-colon must be included.

5. Finally, console log the message and style variables inside the `consoleStyler` function declaration.

Hint: Be sure to use backticks (``) when updating your variable styles and not single ('') or double ("") quotes.

<br>

## Task 2: Build another console log message generator. 

Your task is to code another function, and name it `celebrateStyler()`. The function accepts a single parameter, reason, which should be of string data type.

Inside the function declaration's body, code the following: 

1. A new variable, named fontStyle, assigning it this code:
    ```
    "color: tomato; font-size: 50px";
    ```

2. On the next line, an if statement, verifying that `reason == "birthday"`. 

3. Inside the body of the if block, code the following: 
    ```
    console.log(`%cHappy birthday`, fontStyle);
    ```

4. On the next line, add an else if, and inside the parentheses, check that 
    ```
    reason == "champions"
    ```

5. Inside the else if block, add this code: 
    ```
    console.log(`%cCongrats on the title!`, fontStyle);
    ```

6. Add an else block, with the following code inside of it: 
    ```
    console.log(message, style);
    ```

<br>

## Task 3: Run both the consoleStyler and the celebrateStyler functions

1. Invoke the consoleStyler() function, with the following arguments:

    - `'#1d5c63'`

    - `'#ede6db'`

    - `'40px'`

    - `'Congrats!'`

2. Next, invoke the celebrateStyler() function, with the following argument:

    - `'birthday'`


## Task 4: Insert a congratulatory and custom message

1. Code another function, named `styleAndCelebrate()`.   
The function declaration's body should consist of two function invocations:
    ```
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
    ```


2. Next, invoke the new function, using the following arguments:

    - `'ef7c8e'`
    - `'fae8e0'`
    - `'30px'`
    - `'You made it!'`
    - `'champions'`

<br>

## Final Step: Let's submit your code!
Nice work! To complete this assessment:
1. Save your file through File -> Save 
2. Select "Submit Assignment" in your Lab toolbar. 

Your code will be autograded and return feedback shortly on the "Grades" tab.  
You can also see your score in your Programming Assignment "My Submission" tab.
<br> <br> 
*/


// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create a new variable named message
    let message = "%c" + txt;
    
    // Create a style variable and assign color to it
    let style = `color: ${color};`;

    // Update style with background
    style += `background: ${background};`;

    // Update style with font-size
    style += `font-size: ${fontSize};`;

    // Console log the message and style
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Define a fontStyle variable
    let fontStyle = "color: tomato; font-size: 50px";

    // Check the reason and display a message accordingly
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style); // Assuming message and style are defined globally
    }
}

// Task 3: Run both the consoleStyler and celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
