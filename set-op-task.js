function show(values) {
    console.log(values);
}

function checkForSubset(set1, set2) {
    let isSubset = true;
    set1.forEach((value) => { 
        if (!set2.has(value))
            isSubset = false;
        });
    return isSubset;
}

// a. Create two sets, set1 and set2, each containing three unique elements.
const set1 = new Set([1, 2, 3]);
const set2 = new Set([4, 5, 6]);

show(set1);
show(set2);

// b. Calculate the union of set1 and set2.
const unionSet = new Set([...set1, ...set2]);
show(unionSet);

// c. Check if set1 is a subset of set2.
show(checkForSubset(set1, set2));

// d. Remove an element from set2.
set2.delete(4);
show(set2);

// e. Convert set1 to an array.
const setToArray = [...set1];
show(setToArray);

