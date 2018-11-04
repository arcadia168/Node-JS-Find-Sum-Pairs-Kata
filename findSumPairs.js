
// //EFFICIENT SOLUTION: RUNTIME O(n) when inserting elements into hashmap (Lookup time takes O(1))
// //place the input array (arguments) into a variable
const inputArray = process.argv[2].split(',').map(function(value, index, array) {
    return Number(value);
})
console.log(`input array is: ${inputArray}`);

// //place the number to find into a variable
const sumToFind = Number(process.argv[3]);
console.log(`sumToFind is ${sumToFind}`);

// //define a hash table to house the input elements
let hashMap = new Map();

for(var i = 0; i < inputArray.length; i++) {
    if(hashMap.has(inputArray[i]))
        console.log(inputArray[i] +", "+ hashMap.get(inputArray[i]));
    else
        hashMap.set(sumToFind - inputArray[i], inputArray[i]);
}

// //define output array to be returned
// const allSumPairs = [];

// for (var i = 0; i < inputArray.length; i++) {
//     var value = inputArray[i];
//     var index = i;
//     console.log(`currently processing value ${value} at ${index}`);

//     hashMap[Number(value)] = Number(index);
// };
// console.log(`hashMap is now: ${JSON.stringify(hashMap)}`);

// for (var i = 0; i < inputArray.length - 1; i++) {
//     var value = inputArray[i];
//     var index = i;

//     console.log(`Number(index) is ${Number(index)}`);
//     console.log(`sumToFind - value is ${Number(sumToFind)} - ${Number(value)} = ${Number(sumToFind) - Number(value)}`);

//     let complement = Number(sumToFind) - Number(value);

//     if (hashMap[Number(complement)] != Number(index)) {
//         var newSumPair = `{${index},${hashMap[Number(complement)]}}`;
//         console.log(`Found a pair! ${newSumPair}`);
//         allSumPairs.push(newSumPair);
//     }
// };

// //Finally return the list of pairs that sum to the number
// console.log(`All pairs which sum to the number ${sumToFind} from ${inputArray} are: ${allSumPairs}`)