//MORE EFFICIENT - O (n log n) depending on search and sort.
const inputArray = process.argv[2].split(',').map(function (value, index, array) {
    return Number(value);
})

//place the number to find into a variable
const sumToFind = Number(process.argv[3]);

//Sort the array
inputArray.sort(function (a, b) {
    return a - b;
});

//Define array to hold the output pairs
let complementPairs = [];

for (i = 0; i < inputArray.length; i++) {
    var currentVal = inputArray[i];

    var complement = Number(sumToFind) - Number(currentVal);

    
    if (inputArray.indexOf(complement) > -1) {
        let newPair = `{${currentVal},${complement}}`;

        //TODO: IF PAIRS MUST BE UNIQUE, PERFORM SOME CHECK HERE.
        complementPairs.push(newPair);
    };
}

console.log(complementPairs);