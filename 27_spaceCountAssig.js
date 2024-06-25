function spaceCount() {
    var string1 = "Revision is the mother of success";
    console.log(`String: ${string1}`);
    var count1 = 0;
    for (var i = 0; i < string1.length; i++) {
        if (string1[i] === " ") {
            count1++;
        }
    }
    console.log(`Total spaces in the string: ${count1}`);

    var string2 = "JavaScript is the language of internet world";
    console.log(`String: ${string2}`);
    var count2 = 0;
    for (var i = 0; i < string2.length; i++) {
        if (string2[i] === " ") {
            count2++;
        }
    }
    console.log(`Total spaces in the string: ${count2}`);
}
spaceCount();


