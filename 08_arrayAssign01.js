// For a given array fruits perform below operations as:
console.log("1. Log the first and last element on console");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`First element: ${fruits_seasonal[0]}`);
console.log(`Last element: ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("=========================================================================================");


console.log("2. Add element → Papaya before the element 'Banana', and then log array on console");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`Element after adding: ${fruits_seasonal}`);
console.log("=========================================================================================");


console.log("// 3. Remove 'Mango' from the array");
console.log(`Original element: ${fruits_seasonal}`);
let index = fruits_seasonal.indexOf("Mango");
fruits_seasonal.splice(index, 1);
console.log(`After removing: ${fruits_seasonal}`);
console.log("=========================================================================================");


console.log("// 4. Add element or insert an element 'Pineapple' at the last position");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.splice(5, 0, "Pineapple");
console.log(`Inserting an element: ${fruits_seasonal}`);
console.log("=========================================================================================");


console.log("// 5. Insert an element - 'Dragon Fruit' before 'Water Melon' ");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.splice(4, 0, "Dragon Fruit")
console.log(`Insert an element before: ${fruits_seasonal}`);
console.log("=========================================================================================");


console.log("// 6. Replace an element 'Orange' with 'Kiwi'");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.splice(2, 1, "Kiwi")
console.log(`Replacing an element: ${fruits_seasonal}`);
console.log("=========================================================================================");


console.log("// 7. Log the elements starting from index 1 to 4");
console.log(`Original element: ${fruits_seasonal}`);
console.log(`Starting from index 1 to 4: ${fruits_seasonal.slice(1, 5)}`);
console.log("=========================================================================================");


console.log("// 8. Only select last 3 element and log on console: Use the length property");
console.log(`Original element: ${fruits_seasonal}`);
console.log(`Select last 3 element: ${fruits_seasonal.slice(fruits_seasonal.length-3)}`);

