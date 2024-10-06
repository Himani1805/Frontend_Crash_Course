function isPalindrome(str){
    let testStr = '';

    for (let char of str){
        if ((char >= 'A' && char<='Z') || (char >='a' && char <= 'z') || (char >= '0' && char<='9')){
            testStr += char.toLowerCase();
        }
    }

    let reverseWords = testStr.split('').reverse().join('');
    return testStr === reverseWords;

}
const i = isPalindrome("A man, a plan, a canal, Panama");
console.log(i);
// Output: true

