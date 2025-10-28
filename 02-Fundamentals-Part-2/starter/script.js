'use strict';

// Lesson: Activating Strict Mode
/*
let hasDriversLicense = true;
const passTest = true;

/* Note that hasDriverLicense is actually singular, introducing a bug.
   This will actually throw an error if we use strict mode, instead of failing silently. */
/*
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');
*/

// Lesson: Functions
/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   console.log(apples, oranges);
   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
   return juice;
}
*/

// Lesson: Function Declarations vs. Expressions
// Function Declaration: A named function defined with the function keyword
// Can be called before it's declared and defined due to hoisting
function calcAge1(birthYear) {
   return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression: An anonymous function which is an expression that returns a value and is stored in a variable
const calcAge2 = function (birthYear) {
   return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);