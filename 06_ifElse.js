function isEven(num){
    console.log(`Before if block`);
    if (num%2==0) {
        console.log(`EVEN Number`);
    }
    console.log(`After if block`);
}
isEven(10);
isEven(9);
isEven(1017);



console.log(`====== if else block =========`);
var isEvenOrOdd = function(num){
    if (num%2==0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}
var value = isEvenOrOdd(3);
console.log(`Given number 3 is ${value}`);
var value = isEvenOrOdd(90);
console.log(`Given number 90 is ${value}`);





