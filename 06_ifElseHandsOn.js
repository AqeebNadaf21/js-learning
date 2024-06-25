console.log(`======  EVEN or ODD =========`);
var isEvenOrOdd = function(num){
    if (num%2==0) {
        return "Even";
    } else {
        return "Odd";
    }
}
var value = isEvenOrOdd(45);
console.log(`Given number 45 is ${value}`);
var value = isEvenOrOdd(70);
console.log(`Given number 70 is ${value}`);
var value = isEvenOrOdd(67);
console.log(`Given number 67 is ${value}`);
var value = isEvenOrOdd(98);
console.log(`Given number 98 is ${value}`);


console.log(`======  Eligible for Vote =========`);
var checkEligibility = function(age) {
    if (age>=18) {
        console.log(`You are eligible for vote ${age}`);
    } else {
        console.log(`You are not eligible for vote ${age}`);
    }
}
var value = checkEligibility(18);
var value = checkEligibility(20);
var value = checkEligibility(17);
var value = checkEligibility(40);


console.log(`====== String Length =========`);
var strLength = function(str) {
    if (str.length >= 10) {
        console.log(`The string length is ${str.length} and it is long`);
        
    } else {
        console.log(`The string length is ${str.length} and it is short`);

    }
    
}
var result = strLength("JavaScript ES6");


console.log(`====== String starts with =========`);

var startsWith = function(str) {
    if (str.startsWith("Java")) {
        console.log(`String  ${str} starts with "Java".`);
        // invokeFE(); // Invoke the FE function
    } else {
        console.log(`String ${str} does not starts with "Java".`);
    }
}
// var invokeFE = function() {
//     console.log("Invoking FE function...");
//     // Add your FE function code here
// }
var value = startsWith("JavaScript Language");
var value = startsWith("Programming Language");
