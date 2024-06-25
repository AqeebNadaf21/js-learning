// Constructor Function 
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
// Adding new property to constructor function
Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"

// Creating objects 
const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0000001", "001");
const sbiBank = new Bank("SBI Bank", "Delhi", "SBIN0000001", "001");
const mahBank = new Bank("Mah Bank", "Pune", "MAHB0000001", "001");
const axisBank = new Bank("Axis Bank", "Bangalore", "UTIB0000001", "001");


// Log output
console.log(`Bank Details is: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details is: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details is: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details is: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);


console.log(`The ${sbiBank.bankName}, opens at ${sbiBank.openTime}, and closes at ${sbiBank.closeTime}`);
console.log(`The ${axisBank.bankName}, closes at ${axisBank.closeTime}`);
console.log(`The ${yesBank.bankName}, has branch code ${yesBank.branchCode}, opens at ${yesBank.openTime}`);

