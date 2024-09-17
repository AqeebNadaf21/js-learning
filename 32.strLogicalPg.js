console.log("--------------------- Step 1 ----------------------");
// 1. WAP to find the length or total numbers of characters of given strings
// "Hello, World!"
// "JavaScript is the language of internet"
var char1 = "Hello, World!"
var char2 = "JavaScript is the language of internet"
// var string = char.length;
console.log("Original String:", char1);
console.log("Total length of string 1 is:", char1.length);
console.log("Original String:", char2);
console.log("Total length of string 2 is:", char2.length);


console.log("--------------------- Step 2 ----------------------");
// 2. WAP to log the last character of the given string using length property 
// "Hey, my friend, Programming Language";
// "I am learning logical programs";
// "Angular"
let str1 = "Hey, my friend, Programming Language";
console.log("String 1:", str1);
let str2 = "I am learning logical programs";
console.log("String 2:", str2);
let str3 = "Angular"
console.log("String 3:", str3);
console.log("Last character of given string 1 is:", str1[str1.length-1]);
console.log("Last character of given string 2 is:", str2[str2.length-1]);
console.log("Last character of given string 3 is:", str3[str3.length-1]);


console.log("--------------------- Step 3 ----------------------");
// 3. WAP to print or log the first character of the given strings
// "React"
// "Elon Musk"
// "Apple founder is Stew Job"
let firstCharacter1 = "React";
console.log(`Given string: ${firstCharacter1}`);
let firstCharacter2 = "Elon Musk"
console.log(`Given string: ${firstCharacter2}`);
let firstCharacter3 = "Apple founder is Stew Job"
console.log(`Given string: ${firstCharacter3}`);
console.log("First character of given string 1 is:", firstCharacter1[0]);
console.log("First character of given string 2 is:", firstCharacter2[0]);
console.log("First character of given string 3 is:", firstCharacter3[0]);


console.log("--------------------- Step 4 ----------------------");
// 4. Write a function-capitalizeWord() with below string argument and invoke the same function one by one for below string values.
// "language of internet"
// "Elon musk-The tycoon of decade"
// "My life My Rule"
// "logical programming questions SET"
function capitalizeWord(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }
  console.log("Original String:","language of internet");
  console.log("Capitalize string:", capitalizeWord("language of internet"));
  console.log("Original String:","Elon musk-The tycoon of decade");
  console.log("Capitalize string:", capitalizeWord("Elon musk-The tycoon of decade"));
  console.log("Original String:","My life My Rule");
  console.log("Capitalize string:", capitalizeWord("My life My Rule"));
  console.log("Original string:", "logical programming questions SET");
  console.log("Capitalize string:", capitalizeWord("logical programming questions SET"));

  
  console.log("--------------------- Step 5 ----------------------");
// 5. WAP to check wether given string contains word "UI" or not?
// "React - UI Developer"
// "UI Developer"
// "Front end and backend technologies"
// "MEAN orMERN - UI Developer"
let string1 = "React - UI Developer";
console.log("Srting:", string1);
console.log("String 1 contains 'UI'?", string1.includes("UI")); // Output: true

let string2 = "UI Developer";
console.log("Srting:", string2);
console.log("String 2 contains 'UI'?", string2.includes("UI")); // Output: true

let string3 = "Front end and backend technologies";
console.log("Srting:", string3);
console.log("String 3 contains 'UI'?", string3.includes("UI")); // Output: false

let string4 = "MEAN or MERN - UI Developer";
console.log("Srting:", string4);
console.log("String 4 contains 'UI'?", string4.includes("UI")); // Output: true


console.log("--------------------- Step 6 ----------------------");
// How do you split a string into array of substrings with comma separator?
// "apple,orange,banana";
// "Stew,Bill,Jenny,Elon";
// "Rupees,Dollar,Krone,Pound,Dinar";
let string01 = "apple,orange,banana";
let arr1 = string01.split(",");
console.log(arr1); // Output: ["apple", "orange", "banana"]

// Example 2
let string02 = "Stew,Bill,Jenny,Elon";
let arr2 = string02.split(",");
console.log(arr2); // Output: ["Stew", "Bill", "Jenny", "Elon"]

// Example 3
let string03 = "Rupees,Dollar,Krone,Pound,Dinar";
let arr3 = string03.split(",");
console.log(arr3); // Output: ["Rupees", "Dollar", "Krone", "Pound", "Dinar"]



