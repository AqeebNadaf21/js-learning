const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log("Original array: ", arrayRollNumbers);
console.log(`===== Step 1 =====`);
arrayRollNumbers.reverse();
console.log(`Reverse array: ${arrayRollNumbers}`);

console.log(`===== Step 2 =====`);
arrayRollNumbers.sort();
console.log(`Sorting array: ${arrayRollNumbers}`);

console.log(`===== Step 3=====`);
arrayRollNumbers.sort( (n1, n2) =>{
    return n1>n2 ? 1: -1;
});
console.log(`Sorting array in ascending order: ${arrayRollNumbers}`);

console.log(`===== Step 4 ====  =`);
let greatestNum = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(`Greatest number: ${greatestNum}`);

console.log(`===== Step 5 =====`);
const smallestNum = arrayRollNumbers[0];
console.log(`Smallest number: ${smallestNum}`);

console.log(`===== Step 6 =====`);
// console.log(`Original array: ${arrayRollNumbers}`);
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log('Array with duplicates removed:', uniqueArray);



