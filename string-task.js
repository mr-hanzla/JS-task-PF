function show(values) {
    console.log(values);
}

// a. Create a string variable named message with the value "Hello, World!".
let message = 'Hello, World!';
show(message);

// b. Extract and log the substring "Hello" from the message.
const subString = message.slice(0, 5);
show(subString);

// c. Convert the entire string to uppercase.
const upperCase = message.toLocaleUpperCase();
show(upperCase);

// d. Check if the string contains the word "World" (case-insensitive).
const word = 'World';
const hasWord = message.includes(word);
show(hasWord ? '"World" is present!': '"World" is not present!');

// e. Replace "World" with your name in the string.
const tempString = message.replace(word, 'Hanzla');
show(tempString);

// f. Use the map function to create an array of characters from the string.
const charArr = message.split('');
show(charArr);

// alternatively, is using "map" function
const charArr2 = Array.from(message).map((char) => { return char });
show(charArr2);

