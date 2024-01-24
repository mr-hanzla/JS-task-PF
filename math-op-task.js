function show(values) {
    console.log(values);
}

function getRandomNumber(maxRange) {
    // maxRange + 1 >> to make the 'maxRange' inclusive
    return Math.floor(Math.random() * (maxRange + 1));
}

// a. Calculate the square root of 25.
const number = 25;
show(`Square Root of ${number} is ${Math.sqrt(number)}`);

// b. Generate a random number between 1 and 10 (inclusive).
let randomNumber = getRandomNumber(10);
show(randomNumber);
// generates random number, until it gets the number 10
while (randomNumber != 10) {
    randomNumber = getRandomNumber(10);
    show(randomNumber);
}

// c. Round 3.14159 to the nearest integer.
const tempNumber = 3.14159;
const roundedNumber = Math.round(tempNumber);
show(`${tempNumber} rounded to nearest integer becomes ${roundedNumber}`);
