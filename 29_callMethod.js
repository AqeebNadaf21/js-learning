const person = {
    fullName: "Bill gates",
    company: "Microsoft"
}
function greetings(message) {
    console.log(`Hi ${this.fullName} ${message}`);
}
greetings.call(person, "Good Morning");

