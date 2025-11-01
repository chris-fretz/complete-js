// From: https://jonas.io/assignments/instructions.html

// ASSIGNMENT: Functions
function describeCountry(country, population, capitalCity) {
   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const desc1 = describeCountry('Finland', 6, 'Helsinki');
const desc2 = describeCountry('India', 1380, 'New Delhi');
const desc3 = describeCountry('Canada', 38, 'Ottawa');

// console.log(desc1, desc2, desc3);

// ASSIGNMENT: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
   return (population / 7900) * 100;
}

const USAPercentage1 = percentageOfWorld1(331);
const ChinaPercentage1 = percentageOfWorld1(1441);
const NigeriaPercentage1 = percentageOfWorld1(206);

// console.log(USAPercentage1, ChinaPercentage1, NigeriaPercentage1);

const percentageOfWorld2 = function (population) {
   return (population / 7900) * 100;
}

// ASSIGNMENT: Arrow Functions
const percentageOfWorld3 = population => (population / 7900) * 100;

const BrazilPercentage3 = percentageOfWorld3(213);
// console.log(BrazilPercentage3);

// ASSIGNMENT: Functions Calling Other Functions
const describePopulation = function (country, population) {
   const percentage = percentageOfWorld1(population);
   return `${country} has ${population} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 331));
console.log(describePopulation('Nigeria', 206));

// ASSIGNMENT: Introduction to Arrays
populations = [1441, 331, 206, 777];

console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]

console.log(percentages);