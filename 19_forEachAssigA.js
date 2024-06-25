console.log("=== Step 1 ===");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach( (currentValue, index,) => {
    console.log(`Element at index ${index} is ${currentValue}`);
} );

console.log("=== Step 2 ===");
arrayNumbers.forEach( (value) => {
    if (value > 0) {
        console.log(`Positive numbers: ${value}`);
    }
} );

console.log("=== Step 3 ===");
arrayNumbers.forEach( (value) => {
    if (value < 0) {
        console.log(`Negative numbers: ${value}`);
    }
});

console.log("=== Step 4 ===");
arrayNumbers.forEach((value) => {
    if(value%2==0){
        console.log(`Even numbers: ${value}`);
    }
});

console.log("=== Step 5 ===");
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(`Sum of all elements: ${sum}`);

console.log("=== Step 6 ===");
arrayNumbers.forEach( (currentValue, index,) => {
    if (index%2==0) {
        console.log(`Even indexed is ${index} and value is: ${currentValue}`);
    }
} );

