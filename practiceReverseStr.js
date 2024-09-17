// Reversed String using javascript: Recommended to use define the functions 
// Reverse the string using any existing methods that you know
// "Software";
// "UI Developer";
console.log("---Reverse the string using any existing methods---");
function reverseStr(arg1) {
    return arg1.split("").reverse().join("");
}
console.log("Original string: Software");
console.log(`Reversed string: ${reverseStr("Software")}`);
console.log("Original string: UI Developer");
console.log(`Reversed string: ${reverseStr("UI Developer")}`);


// Reverse the string without using predefined methods 
// "Web Developer";
// "Billion Dollar";
// "Java";
console.log("---Reverse the string without using predefined methods---");
const strReverse = (str) => {
    let reversedString = " ";
    for(let i =str.length - 1; i>= 0; i--) {
        reversedString += str[i];
    }
    return reversedString
}
console.log("Original string: Web Developer");
console.log(`Reversed string: ${strReverse("Web Developer")}`);
console.log("Original string: Billion Dollar");
console.log(`Reversed string: ${strReverse("Billion Dollar")}`);
console.log("Original string: Java");
console.log(`Reversed string: ${strReverse("Java")}`);

