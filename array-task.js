
function getNumberArray(range) {
    let arr = [];
    for (i=0; i<range; i++) {
        arr.push(i+1);
    }
    return arr;
}

function show(values) {
    console.log(values);
}

// a. Create an array named numbers containing the integers from 1 to 5.
const numbers = getNumberArray(5);
show(numbers);

// b. Add the number 6 to the end of the array.
numbers.push(6);
show(numbers);

// c. Remove the first element of the array.
numbers.shift();
show(numbers);

// d. Reverse the array.
numbers.reverse()
show(numbers);

// e. Join the array elements into a string with a comma as the separator.
const stringArr = numbers.join(', ');
show(`String Array: '${stringArr}'`);

// f. Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
const squaredArray = numbers.map((value) => { return value**2 });
show(squaredArray);

