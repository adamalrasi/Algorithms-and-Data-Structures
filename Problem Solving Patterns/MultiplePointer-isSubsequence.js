/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

1. Task: check if first string chars match the second string, in the same order. return true, else false.
2. Inputs: str1, str2
3. Outputs: boolean match found: true, else false
4. !Inputs: just string, (): false
5. Important labels:
isSubseq
word, fullStr
*/

// function isSubsequence(str1, str2){
//     // do something
//     // return if str1 FOUND in str2: true, else false
// }

function isSubsequence(word, fullStr){
    // create index 
    let i = 0
    // for loop: j < fullStr
    for(let j = 0; j < fullStr.length; j++){
        // if word[i] EQUAL j: i++, j++
        if(word[i] == fullStr[j]) i++;
    }
    // if index EQUAL word.length: true
    if(i == word.length) return true;
    // return false
    return false
}

// Time complexity: O(n)
// Space complexity: O(1)

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)

/*
 i
sifdsf
stiiiiiiiiii
           j
*/