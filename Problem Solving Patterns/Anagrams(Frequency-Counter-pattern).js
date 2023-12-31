// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, sunch as cinema formed from iceman.

// function validAnagram(str1, str2){
//     // do something
//     // return true if strings are anagram else false
// }

function validAnagram(str1, str2){
    // create two objects for each str
    // store string to object(key(a): val(1)) // { a:2, z:1 }
    // for key in object1
        // if key value EQUAL object2[key] value: return true
        // example: if {key(a):value(2)} obj2[key(a)] = value(2) return true
        // else: return false
}

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "gramana") // false
validAnagram("rat", "cat") // false
validAnagram("qwerty", "qwyter") // false

function validAnagram(str1, str2){
    const obj1 = {}
    const obj2 = {}

    for(let val of str1) obj1[val] = (obj1[val] || 0) + 1
    for(let val of str2) obj2[val] = (obj2[val] || 0) + 1

    for(let key in obj1){
        if(!(key in obj2)) return false;
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

// Time complexity = O(n)
// Space complexity = O(n)


validAnagram("", "") // true
validAnagram("aaz", "zaa") // false
validAnagram("anagram", "gramana") // false
validAnagram("rat", "cat") // false
validAnagram("qwerty", "qwyter") // false