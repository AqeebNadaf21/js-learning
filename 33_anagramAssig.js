
function isAnagram(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join(''); 
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}


console.log("'vile' and 'evil' are anagrams:", isAnagram("vile", "evil"));
console.log("'silent' and 'listen' are anagrams:", isAnagram("silent", "listen"));
console.log("'gram' and 'aram' are anagrams:", isAnagram("gram", "aram"));
console.log("'mom' and 'tom' are anagrams:", isAnagram("mom", "tom"));

