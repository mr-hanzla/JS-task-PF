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

// a. Create an array named originalArray containing at least three numbers.
const originalArray = getNumberArray(5);
show(originalArray);

// b. Use the map function to create a new array (doubledArray) containing each number doubled.
const doubledArray = originalArray.map(element => element * 2);
show(doubledArray);

