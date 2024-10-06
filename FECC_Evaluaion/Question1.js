function countVowelsAndConsonants(str){
    const vowels = "aeiouAEIOU";

    let vowelsCount = 0;
    let consonantsCount = 0;

    for(let char of str){
        if ((char >= 'A' && char<='Z') || (char >='a' && char <= 'z')){
            if (vowels.includes(char)){
                vowelsCount = vowelsCount + 1;
            }
            else{
                consonantsCount = consonantsCount + 1;
            }
        }
    }
    return {vowels: vowelsCount, consonants: consonantsCount}
}
const res = countVowelsAndConsonants('Hello World!');
console.log(res) 