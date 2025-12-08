// From: https://jonas.io/assignments/instructions.html

// ASSIGNMENT: Functions
function describeCountry(country, population, capitalCity) {
   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const desc1 = describeCountry("Finland", 6, "Helsinki");
const desc2 = describeCountry("India", 1380, "New Delhi");
const desc3 = describeCountry("Canada", 38, "Ottawa");

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
};

// ASSIGNMENT: Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;

const BrazilPercentage3 = percentageOfWorld3(213);
// console.log(BrazilPercentage3);

// ASSIGNMENT: Functions Calling Other Functions
const describePopulation = function (country, population) {
	const percentage = percentageOfWorld1(population);
	return `${country} has ${population} million people, which is about ${percentage.toFixed(
		2
	)}% of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("USA", 331));
console.log(describePopulation("Nigeria", 206));

// ASSIGNMENT: Introduction to Arrays
populations = [1441, 331, 206, 777];

console.log(populations.length === 4);

const percentages = [
	percentageOfWorld1(populations[0]),
	percentageOfWorld1(populations[1]),
	percentageOfWorld1(populations[2]),
	percentageOfWorld1(populations[3]),
];

console.log(percentages);

// ASSIGNMENT: Basic Array Operations (Methods)
const neighbors = [
   'Mexico', 
   'Canada', 
   'Cuba'
]

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();

if (!neighbors.includes('Germany')) {
   console.log('Probably not a North American country.');
}

neighbors[neighbors.indexOf('Mexico')] = 'Definitely Mexico';
console.log(neighbors);

// ASSIGNMENTS: Introduction to Objects and Object Methods
const myCountry = {
   country: 'United States',
   capital: 'Washington, D.C.',
   language: 'English',
   population: 330,
   neighbors: ['Mexico', 'Canada', 'Cuba'],
   describe: function () {
      console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`)
   },
   checkIsland: function () {
      myCountry.isIsland = this.neighbors.length === 0 ? true : false;
      return myCountry.isIsland;
   }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);

myCountry.describe();
console.log(myCountry.checkIsland());

console.log(myCountry);

// ASSIGNMENT: The For Loop
for (let id = 1; id <= 50; id++) {
   console.log(`Voter number ${id} is currently voting.`);
}

// ASSIGNMENT: Looping Arrays, Breaking, and Continuing
const percentages2 = [];

for (i = 0; i < populations.length; i++) {
   percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

// ASSIGNMENT: Looping Backwards and Loops in Loops
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++) {
   console.log(`Iteration #${i + 1}`);
   for (let y = 0; y < listOfNeighbors[i].length; y++) {
      console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
   }
}