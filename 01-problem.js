/* Simple 8 JavaScript small problem and solutions
 * #1. How to remove FALSY VALUES from an array?
 * #2. Convert any value to BOOLEAN
 * #3. How to RESIZE an array?
 * #4. How to FLATTEN a multidimensional array?
 * #5. How to use short CONDITIONALS?
 * #6. How to REPLACE all occurances of a string?
 * #7. How to LOG variable with values properly?
 * #8. How to CALCULATE PERFORMANCE of a task/operation?
 */

/* 
    Problem 1 - Remove falsy values from an array 
*/
let miscellaneous = ['Apple', false, 'Orange', NaN, 0, undefined, 'Pepper', null, '', 'Mango'];

// Our task is to extract the result names by removing the false values
let fruits = miscellaneous.filter(Boolean);
console.log(fruits); // ['Apple', 'Orange', 'Pepper', 'Mango']

// How it works? Boolean(expression) in JS returns true/false
Boolean(5 < 6); // true
Boolean(100 > 200); // false
Boolean('JavaScript'); // true
Boolean(''); // false

// array example
let miscellaneousEx = ['Apple', false, 'Orange', NaN];
let fruitsList = miscellaneousEx.filter(function(element) {
    return false;
});

let fruitsList2 = miscellaneousEx.fill(Boolean);

/* 
    Problem 2 - Convert any values to boolean 
*/
// Using !! in front of any value
console.log(!!"Ch Bappy"); // true
console.log(!!1); // true
console.log(!!0); // false
console.log(!!undefined); // false
console.log(Boolean("Ch Bappy")); // true

/* 
    Problem 3 - Resizing any array 
*/
let animals = ['Cat', 'Dog', 'Monkey', 'Lion', 'Tiger']

// We can use array's length property
animals.length = 3;
console.log(animals); // ['Cat', 'Dog', 'Monkey']

/* 
    Problem 4 - How to flatten a multi-dimensional array 
*/
// One Level Array
let smileys = ['Love', ['Small Lough', 'Medium Lough'], 'Santimenta', ['Sad', 'Loughing']];

// We can use array flat() method to flattern one level array
console.log(smileys.flat());

// Multi level array
let smileys2 = ['Love', ['Very Lough', 'Loughing', ['Sad', 'Sentimental']], 'No Expression'];

// We can pass 'Infinity' parameter to array flat function
console.log(smileys2.flat(Infinity));

/* 
    Problem 5 - Short conditional 
*/

const myName = "Bappys";

if (myName === "Bappy") {
    console.log("Love");
}

// We can use &&
myName === "Bappy" && console.log("Love");

// And instead of doing this
if (myName !== "Bappy") {
    console.log("Angry");
}

// We can use ||
myName === "Bappy" || console.log("Angry");


/* 
    Problem 6 - Replace all occurances of a string 
*/
const quote = "React is a JS framework & this framework is the most popular front-end framework right now";

// Replace all occurance of 'framework' with 'library'
console.log(quote.replace(/framework/g, "library"));

/* Problem 7 - Log values with variable names smartly */
const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
console.log(`library1 - ${library1}`); // library1 - jQuery
console.log(`library2 - ${library2}`); // library2 - React

// We can do this 
console.log({ library1 }); // {library1: 'jQuery'}
console.log({ library2 }); // {library2: 'React'}

/* 
    Problem 8 - Know performnace of a task 
*/

const startTime = performance.now();
for (let i = 0; i <= 50; i++) {
    console.log(i);
}
const endTime = performance.now();

console.log(`loop look ${endTime - startTime} miliseconds to finish`);