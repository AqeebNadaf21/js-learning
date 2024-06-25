console.log("=== Step 1 ===");
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const greaterThan = arrayNumbers.filter( (element) => {
    return element > 50;
});
console.log(`Numbers greater than 50 are: ${greaterThan}`);

console.log("=== Step 2 ===");
const evenNumbers = arrayNumbers.filter( (element) => {
    return element%2===0;
});
console.log(`Even numbers are:${evenNumbers}`);

console.log("=== Step 3 ===");
const oddNumbers = arrayNumbers.filter( (element) => {
    return element%2!=0;
});
console.log(`Odd numbers are:${oddNumbers}`);

console.log("=== Step 4 ===");
const multipleOf = arrayNumbers.filter( (element) => {
    return element%5==0;
});
console.log(`Multiple of 5 are:${multipleOf}`);

console.log("=== Step 5 ===");
const between = arrayNumbers.filter( (element) => {
    return element>=20 && element<=50;
});
console.log(`Numbers lies between 20 & 50 are: ${between}`);

