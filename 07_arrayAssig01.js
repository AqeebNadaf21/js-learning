console.log("===== Log first and last element =====");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);


console.log("===== Add element Papaya before Banana =====");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`Element after unshift: ${fruits_seasonal}`);


console.log("===== Add element Pineapple at last position =====");
console.log(`Original element: ${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(`Element after push: ${fruits_seasonal}`)


