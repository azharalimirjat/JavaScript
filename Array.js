/*
ARRAY:
    An array is a special variable, which can hold more than one value:

Syntax:
const array_name = [item1, item2, ...itemNth];      
*/

// EX:
const cars = ["Volvo", "Toyota", "BMW", "Suzuki"];


// Accessing Array:
// We can access array using index

console.log(cars[0])
// OUTPUT: Volvo because index starts from 0;


// To print all elements of array we use for loop
// EX: printing all elements of cars array
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i], " ");
}
/*
OUTPUT:
Volvo  
Toyota  
BMW  
Suzuki
*/
