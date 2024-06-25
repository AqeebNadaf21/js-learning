const person = {
    fullName: "Bill gates",
    company: "Microsoft"
}
function greetings(message, role) {
    console.log(`Hi the ${role} Mr. ${this.fullName} ${message}`);
}
greetings.call(person, "Good Morning", "CEO");

