let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

// 2 ** 3 means 2 to the power of 3, aka 2 * 2 * 2
console.log(2 ** 3);

// CHALLENGE #1
// BMI = mass / (height * height)

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// CHALLENGE #2
if(BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn})is higher than Mark's (${BMIMark})!`);
}

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// This will return NaN (Not a Number)
// NaN is actually the data type of 'number', its just not a valid number
console.log(Number('Jonas'));

// The first instance will appear in white (string), the second in green (number)
console.log(String(23), 23);

// Type Coercion
/* If there's a mix of types, the plus operator will convert everything to a string.
    All other operators (-, *, /) will convert everything to numbers. */
console.log('I am ' + 23 + ' years old'); // 23 is converted to a string
console.log('23' - '10' - 3); // strings are converted to numbers
console.log('23' * '2'); // strings are converted to numbers
console.log('23' / '2'); // strings are converted to numbers

// Switch Statement
const day = "Fake day";

switch (day) {
    case 'Monday':
        console.log("It's Monday! Start your week!");
        break;
    case 'Tuesday':
    case 'Wednesday':
        console.log("You're in the thick of it! You can do this!");
        break;
    case 'Thursday':
        console.log("The week is more than half over!");
        break;
    case 'Friday':
        console.log("TGIF!");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("Enjoy your weekend!");
        break;
    default:
        console.log("You've broken out of the space time continuum!");
}