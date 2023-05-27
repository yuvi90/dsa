/*
    Permutation Problem Statement:-
        - Arrange "ABC" in possible different ways 
        - N Factorial Solutions i.e. 3 x 2 x 1 = 6 Possible Solutions 
        - Time Complexity = O(n*n!)
*/

function getPossibleArrangements(str, perm, idx) {
    if (str.length == 0) {
        console.log(perm);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let newString = str.substring(0, i) + str.substring(i + 1);
        getPossibleArrangements(newString, perm + currChar, idx + 1);
    }
}

let string = "ABC";
getPossibleArrangements(string, '', 0)