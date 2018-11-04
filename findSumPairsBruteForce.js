//BRUTE FORCE SOLUTION: O(n^2) PERMUTE ALL PAIRS
//place the input array (arguments) into a variable
const inputArray = process.argv[2].split(',');

//place the number to find into a variable
const sumToFind = process.argv[3];

//declare output array to hold all pairs
let complementPairs = [];

//nested loop to find all pairs
for (let i = 0; i < inputArray.length; i++) {
    let findComplement = inputArray[i];

    for (let j = 0; j < inputArray.length; j++) {
        let complementCandidate = inputArray[j];

        if (Number(findComplement) + Number(complementCandidate) == Number(sumToFind)) {
            let newPair = `{${findComplement},${complementCandidate}}`;
            
            //TODO: IF PAIRS MUST BE UNIQUE, PERFORM SOME CHECK HERE.
            complementPairs.push(newPair);
        }
    } 
}

//Finally print out all pairs
console.log(complementPairs);