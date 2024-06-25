console.log("== 1. ( Add minimum 5 properties) ==");
console.log("== 2. Include 'degrees' like engineering ==");
console.log("== 3. Also add one array → 'certificates' ==");


const professor = {
    name: "Albert",
    age: 35,
    department: "Computer Science",
    isMarried: "false",
    country: "India", 
    
    degree: {
        engineering: 'CSC', 
        PHD: 'Adv Computing',
        masters: 'Data Science',
        MTech: "Biotechnology"
    },
    certificates: ['Hacker Rank Participation', 
        'Certificate in IFE course', 
        'Certificate in Adv Programming'],
    
};
// Log the object
console.log("Initial Object:", professor);

console.log("== 4. Add `totalExperience` property  ==");
professor.totalExperience= '14 years';
console.log(`Total experience is: ${professor.totalExperience}`);

// Modify "isMarried" property
console.log("== 5. Modify any existing property ==");
professor.isMarried = true;
console.log("Modified Object:", professor);

console.log("== 6. Add one new certificate at the 2nd index of array → certificates ==");
professor.certificates.splice(1, 0, "Oracle Certified");
console.log("Updated Certificates:", professor.certificates);

console.log("== 7. Last element of the certificates. ==");
professor.certificates.length-1;
console.log("Last element of certificates:", professor.certificates[professor.certificates.length-1]);

console.log("== 8. Log complete object on console. ==");
console.log(`Complete object;`, professor);

// console.log("== 9. Traverse array→ certificates using for of loop-Skip ==");
for (const certificate of professor.certificates) {
    console.log(certificate);
  }

