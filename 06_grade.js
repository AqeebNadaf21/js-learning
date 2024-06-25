function gradeCalculation(marks) {
    var typeOf = typeof marks;
    // Convert string to number using Number()
    marks = Number(marks);
    
    // Invalid Scenario
    if (marks <=0 || marks > 100 || isNaN(marks)) {
        console.log(`Invalid marks`);
    }else{
        // Valid marks
        if (marks >= 90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
        }
        if (marks>=75 && marks<90) {
            console.log(`Excellent marks: ${marks}, your grade is A`);    
        }
        if (marks >= 50 && marks < 75) {
            console.log(`Good marks: ${marks}, your grade is B`);
        }
        if (marks >= 35 && marks < 50) {
            console.log(`Marks is: ${marks}, your grade is C, Need improvement`);
        }
        if (marks>0 && marks <35) {
            console.log(`Failed.. Marks : ${marks}`);
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);

