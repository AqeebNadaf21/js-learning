
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  console.log(`"madam" is a palindrome: ${isPalindrome("madam")}`);
  console.log(`"141" is a palindrome: ${isPalindrome("141")}`);
  console.log(`"Sunday" is a palindrome: ${isPalindrome("Sunday")}`);
  console.log(`"mom" is a palindrome: ${isPalindrome("mom")}`);
  console.log(`"listen" is a palindrome: ${isPalindrome("listen")}`);
  console.log(`"dad" is a palindrome: ${isPalindrome("dad")}`);



// function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   if (str == reversedStr) {
//     console.log(`Given string is: ${str}`);
//   }
//   else{
//     console.log("not a palindrome");

//   }

// }
// isPalindrome("madam")
// isPalindrome("141")
// isPalindrome("Sunday")
// isPalindrome("mom")
// isPalindrome("listen")
// isPalindrome("dad")


