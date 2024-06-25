function squareOfWordLength(argOne) {
    var len = argOne.length;
    // return len;
    var result = len * len;
    return result;
}
var returnValue = squareOfWordLength("JavaScript");
console.log(`JavaScript length is: ${"JavaScript".length} and square is: ${returnValue}`);
var returnValue = squareOfWordLength("Google Chrome");
console.log(`Google Chrome length is: ${"Google Chrome".length} and square is: ${returnValue}`);
var returnValue = squareOfWordLength("Developer Smart");
console.log(`Developer Smart length is: ${"Developer Smart".length} and square is: ${returnValue}`);


console.log("======= Task 2 =======");
function stringLength() {
    var str = "I am Angular Developer"
    var len = str.length;
    var totalWords = str.split(" ").length;

    var result = len / totalWords;  
    console.log(`Length divided by total words: ${result}`);
    var resultMul = len * totalWords;
    console.log(`Length multiplied by total words: ${resultMul}`);
}
stringLength();



