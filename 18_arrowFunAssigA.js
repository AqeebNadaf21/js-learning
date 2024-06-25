let arrow = () => {
    console.log("Good Morning, Today is Friday");
}
arrow();


let multiply = (n1, n2, n3=1) => {
    let result = n1*n2*n3;
    console.log(`Multiplication result is: ${result}`);
}
multiply(5, 5, 2);
multiply(10, 4);


let add = (n1, n2, n3, n4, n5=1) => {
    let result = n1+n2+n3+n4+n5;
    console.log(`Addition of given argument is: ${result}`);
}
add(100, 100, 200, 349, 756);
add("I am", "learning", "ES6", "features", "in depth");



