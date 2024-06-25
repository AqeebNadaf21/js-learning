function factorialOfNum(num) {
  if (num == null || num == undefined ) {
    console.log(`Invalid input: ${num}`);
  } 
  else {
    let factorialOfNum = 1;
    for (let i = num; i >= 1; i--) {
        factorialOfNum = factorialOfNum * i;
    }
    console.log(factorialOfNum);
  }
}
console.log(`Factorial of number 5 is: `);
factorialOfNum(5);

console.log(`Factorial of number 3 is: `);
factorialOfNum(3);

factorialOfNum(null);

console.log(`Factorial of number 8 is: `);
factorialOfNum(8);

factorialOfNum(undefined);

console.log(`Factorial of number 9 is: `);
factorialOfNum(9);

console.log(`Factorial of number 0 is: `);
factorialOfNum(0);


