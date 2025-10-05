// From: https://jonas.io/assignments/instructions.html

// ASSIGNMENT: Values & Variables
const country = "United States";
const continent = "North America";
let population = 342;

// console.log(country);
// console.log(continent);
// console.log(population);

// ASSIGNMENT: Data Types
const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// ASSIGNMENT: let, const, and var
language = "English";

// Assignment: Basic Operators
const populationHalved = population / 2;
// console.log(populationHalved);

const populationPlusOne = population++;
// console.log(populationPlusOne);

populationComparedWithFinland = population > 6;
// console.log(populationComparedWithFinland);

const populationMoreThanAvg = population < 33;
// console.log(populationMoreThanAvg);

const description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
// console.log(description);

// ASSIGNMENT: Strings & Template Literals
const descriptionUpdated = `${country} is in ${continent} and it's ${population} million people speak ${language}.`;
// console.log(descriptionUpdated);

// ASSIGNMENT: if/else statements
if(population > 33) {
    // console.log(`${country}'s population is above average.`);
} else {
    // console.log(`${country}'s population is ${33 - population} million below average.`);
}

// ASSIGNMENT: Equality Operators: == vs. ===
/* const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbors === 1) {
    console.log('Only 1 border');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} */

// ASSIGNMENT: Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
    console.log('You should live in the U.S. :)');
} else {
    console.log('The U.S. does not meet your criteria :(');
}