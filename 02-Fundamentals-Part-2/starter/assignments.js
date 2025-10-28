// From: https://jonas.io/assignments/instructions.html

// ASSIGNMENT: Functions
function describeCountry(country, population, capitalCity) {
   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const desc1 = describeCountry('Finland', 6, 'Helsinki');
const desc2 = describeCountry('India', 1380, 'New Delhi');
const desc3 = describeCountry('Canada', 38, 'Ottawa');

console.log(desc1, desc2, desc3);