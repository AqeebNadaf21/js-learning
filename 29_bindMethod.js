const person = {
    fullName: "Bill gates",
    company: "Microsoft"
}
function greetings(greet, role, word) {
    console.log(`Hi the ${role} Mr. ${this.fullName} ${greet} ${word}`);
}
const newFun = greetings.bind(person);
newFun("Good Morning", "CEO", "you are great");

