/*
    To find all possible subsequences for a given sequences (String).
    Subsequence - must be in same sequence that they appear in word.

    eg. 'abc' 
        solution =  'a', 'ab', 'ac', 'abc', 'b', 'bc', c, ''
*/


function generateSubsequences(word) {
    if (word.length === 0) {
        return [''];
    }

    const firstChar = word[0];
    const restOfWord = word.slice(1);

    const subsequencesWithoutFirstChar = generateSubsequences(restOfWord);
    const subsequencesWithFirstChar = subsequencesWithoutFirstChar.map(subseq => firstChar + subseq);

    return [...subsequencesWithoutFirstChar, ...subsequencesWithFirstChar];
}

console.log(generateSubsequences('abc'))