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
/*
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
*/

// Lesson: Arrow Functions

// Arrow Function: A shorter syntax for writing function expressions whose value is returned implicitly
// No need for the function keyword, return keyword, or curly braces for single-line functions
// Arrow functions do not have their own 'this' keyword
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
   const age = 2037 - birthYear;
   const retirement = 65 - age;
   return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
*/

// Lesson: Functions Calling Other Functions
/*
function cutFruitPieces(fruit) {
   return fruit * 4;
}

function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);
   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
   return juice;
}

console.log(fruitProcessor(2, 3));
*/

// Lesson: Reviewing Functions
// const calcAge = function (birthYear) {
//    return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear, firstName) {
//    const age = calcAge(birthYear);
//    const retirement = 65 - age;

//    if (retirement > 0) {
//    return retirement;
//    } else {
//       return `${firstName} has already retired.`;
//    }
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

const jonas = {
   firstName: 'Jonas',
   lastName: 'Smith',
   birthYear: 1991,
   job: 'teacher',
   friends: ['Abraham', 'Job', 'David'],
   hasDriversLicense: true,
   calcAge: function () {
      this.age = 2037 - this.birthYear;
      return this.age;
   },
   summary: function () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
   }
}
console.log(jonas.summary());