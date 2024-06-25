console.log("=== Step 1 ===");
const arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
const arrayNum = arrayNumbers.map( (element) => {
    return element + 10;
});
console.log(`New array element after adding 10 is: ${arrayNum}`);

console.log("=== Step 2 ===");
const newArr = arrayNumbers.map( (element) => {
    return element * element * element;
});
console.log(`Cube of array element is: ${newArr}`);

console.log("=== Step 3 ===");
const addIndex = arrayNumbers.map((number, index) => {
    return number + index
} );
console.log(`Adding the corresponding index value is: ${addIndex}`);

