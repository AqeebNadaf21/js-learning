const multiArgFun = (a,b,c) => a + b + c;
console.log(multiArgFun(1,2,3));
const curryUnaryFun = a => b => c => a + b + c;
curryUnaryFun(1);
curryUnaryFun(1) (2);
curryUnaryFun(1) (2) (3);

