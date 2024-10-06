function reverseWords(str){
    const words = str.split(' ');

    const reverseWords = words.map(word=> {
        return word.split('').reverse().join('')
    });

    return reverseWords.join(' ')
}
const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"



