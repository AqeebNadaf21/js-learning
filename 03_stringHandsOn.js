function stringHandsOn() {
    console.log("================================================");
// 1. Print the string as it is on console
    var string = "  Hey you are doing good, keep it up   ";
    console.log(`Given String: "${string}"`);

    console.log("================================================");
// 2. Calculate length of the String
    var totalChar = string.length;
    console.log(`Total char is: ${totalChar}`);

    console.log("================================================");
// 3. Remove the leading and trailing extra spaces and log string on console with it’s length
    trimmedString = string.trim();
    console.log(`Length after trim is: "${trimmedString}"`);

    console.log("================================================");
// 4. Print the total number extra spaces count that is removed in step 3.
    var extraSpacesCount = string.length - trimmedString.length;
    console.log(`String after removing leading and trailing spaces: ${extraSpacesCount}`);

    console.log("================================================");
// 5. Print the first and last character on the same line after trim() i.e after step 3
    var firstCharacter = trimmedString[0];
    var lastCharacter = trimmedString[trimmedString.length - 1];
    console.log(`First character: ${firstCharacter} | Last character: ${lastCharacter}`);

    console.log("================================================");
// 6. Print the count of total words available in the string after step 3
    var words = trimmedString.split(" ");
    console.log(`Total words available: ${words.length}`);
    
    console.log("================================================");
// 7. Print the index of word “good” from the given string
    var index = trimmedString.indexOf("good");
    console.log(`Index of char good is: ${index}`);

    console.log("================================================");
// 8. Print the substring starting from index 22, using substring()
    var substring = trimmedString.substring(22);
    console.log(`Substring from index 22: ${substring}`);    

    console.log("================================================");
// 9. Check, is string ends with word “up” after step 3?\
    const endsWith = trimmedString.endsWith("up");
    console.log(`String ends with "up": ${endsWith}`);

    console.log("================================================");
// 10. Check is string starts with word “Hey” after trimming → i.e after step 3 output string value
    const startsWith = trimmedString.startsWith("Hey");
    console.log(`String starts with "Hey": ${startsWith}`);

}
stringHandsOn();

