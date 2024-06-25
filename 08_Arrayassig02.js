console.log(" 1. Find the total elements available or length and log on console");
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(`Total elements available: ${arrayNumbers.length}`);
console.log("=========================================================================================");


console.log(" 2. Log the first element and last element in arrayNumbers and log on console");
console.log("First element:", arrayNumbers[0]);
console.log("Last element:", arrayNumbers[arrayNumbers.length - 1]);

console.log("=========================================================================================");


console.log(" 3. Log the third last element using length property and log on console ");
console.log(`Original length: ${arrayNumbers}`);
console.log(`Last element: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log("=========================================================================================");


console.log(" 4. Find the all even numbers using for of loop and log on console ");
console.log(`Original length: ${arrayNumbers}`);
for (let i = 0; i < arrayNumbers.length; i++) {
    const num = arrayNumbers[i];
    
    if (num % 2 == 0) {
        console.log(`Even numbers: ${num}`);
    }       
}
console.log("=========================================================================================");


console.log(" 5. Find the odd numbers for of loop and log on console ");
console.log(`Original length: ${arrayNumbers}`);
for (let i = 0; i < arrayNumbers.length; i++) {
    const num = arrayNumbers[i];
    
    if (num % 2 != 0) {
        console.log(`Odd numbers: ${num}`);
    }       
}
console.log("=========================================================================================");


console.log(" 6. Find all the even positioned elements from arrayNumbers, sum it and log on console ");
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    let num = arrayNumbers[i];    
    if (num % 2 == 0) {
        console.log(`Even numbers: ${num}`);
        // console.log(num);
        sum = sum + num;
    }       
}
console.log("Sum of even numbers: " + sum);
console.log("=========================================================================================");


console.log(" 7. Find all the odd positioned elements from arrayNumbers, sum it and log on console ");
// let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    let num = arrayNumbers[i];    
    if (num % 2 != 1) {
        console.log(`Even numbers: ${num}`);
        sum = sum + num;
        // console.log(num);
    }       
}
console.log("Sum of odd numbers: " + sum);
console.log("=========================================================================================");


console.log(" 8. Find the sum of all elements from arrayNumbers, log on console ");
// let sum = 0;
console.log(`Original elements: ${arrayNumbers}`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
        sum = sum + element;
}
console.log("Sum of numbers: " + sum);
console.log("=========================================================================================");


console.log(" 9. Find the numbers which are multiple of 5 ");
for (const element of arrayNumbers) {
    if (element % 5 == 0) {
        console.log(element);
    }
}
console.log("=========================================================================================");


console.log(" 10. Is number 115 available in arrayNumbers ? ");
var numToCheck = 115;
let isAvailable = false;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] == numToCheck){
         isAvailable = true;
         break
    }
}
if (isAvailable) {
    console.log(`Number ${numToCheck} is available in arrayNumbers.`);
} else {
    console.log(`Number ${numToCheck} is not available in arrayNumbers.`);
}
console.log("=========================================================================================");


console.log(" 11. Is number 23 available in arrayNumbers ? ");
if (arrayNumbers.includes(23)) {
    console.log("23 is available in the array");
  } else {
    console.log("23 is not available in the array");
  }
console.log("=========================================================================================");


console.log(" 12. Insert numbers → 55, 66 at index 3 and log array on console ");
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log("=========================================================================================");


console.log(" 13. Delete 3 elements starting from index 4 and log arrayNumbers on console ");
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);




