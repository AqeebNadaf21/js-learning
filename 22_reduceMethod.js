let array = [3, 6, 5, 2]; //===> 3+5 9+5 14+2 = 16
const sum = array.reduce( (runningTotal, value) => {
    return runningTotal + value;
}, 0 );
console.log(sum);


