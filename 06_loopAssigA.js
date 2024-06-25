console.log(`===== Count the total number of vowels =====`);
var str = "I am very good IT Developer";
var vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (vowels.includes(chLowerCase)){
         counter++;
    }
}
console.log(counter);


console.log("===== Sum of cube of numbers from 1 to 5 =====");
function sumOfCube() {
    var sumOfCube = 0;
    for (let i = 1; i <= 5; i++) {
        var cube = i * i * i;
        sumOfCube = sumOfCube + cube;
    }
    console.log(sumOfCube);
    
}
sumOfCube();


console.log("===== Log only Odd Positioned Characters =====");
function oddPositionedChars(str) {
    var result = "";
    for (let i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (i % 2==1 && ch != ' '){
            result = result + ch;
        }
    }
    console.log(result);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");


