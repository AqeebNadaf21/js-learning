console.log("======= Task 1 =======");
var greaterNumber = function(numOne, numTwo) {
    var result = numOne >= numTwo ? numOne : numTwo;
    console.log(`Greater number from numbers ${numOne}, ${numTwo} is ${result}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);


console.log("======= Task 2 =======");
function isEvenOrOdd(argOne) {
    var result = argOne%2 == 0 ? true : false;
    return result;
}
var returnValue = isEvenOrOdd(29);
console.log(`Given number 29 is even : ${returnValue}`);
var returnValue = isEvenOrOdd(44);
console.log(`Given number 44 is even : ${returnValue}`);
var returnValue = isEvenOrOdd(0);
console.log(`Given number 0 is even : ${returnValue}`);
var returnValue = isEvenOrOdd(101);
console.log(`Given number 101 is even : ${returnValue}`);


console.log("======= Task 3 =======");
function wordLength(argOne) {
    console.log(`Given word is: ${argOne}`);
    var result = argOne.length % 2 === 0 ? "EVEN" : "ODD";
    // console.log(`Length of word ${argOne} is ${result}`);
    // var result = argOne.length;
    return result;
}
var returnValue = wordLength("JavaScript");
console.log(`JavaScript length is: ${returnValue}`);

var returnValue = wordLength("developer");
console.log(`Developer length is: ${returnValue}`);

var returnValue = wordLength("Google")
console.log(`Google length is: ${returnValue}`);



