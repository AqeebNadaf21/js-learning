console.log("======= Task 1 =======");
// Step 1: maleMarriageEligibility function
function maleMarriageEligibility(gender, age, boyName) {
  return (gender === 'Male' && age >= 21) 
    ? `Hey ${boyName} you are eligible for Marriage` 
    : `Hey ${boyName} you are not eligible for Marriage`;
}
// Invoking the function for given values
console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));


console.log("======= Task 2 =======");
// Step 2: femaleMarriageEligibility function
function femaleMarriageEligibility(gender, age, girlName) {
  return (gender === 'Female' && age >= 18) 
  ? `Hey ${girlName} you are eligible for Marriage` 
  : `Hey ${girlName} you are not eligible for Marriage`;
}
// Invoking the function for given values
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));


