// Given two positive integers, find out if the two numbers have the same frequency of digits.

/*
1. Task: two numbers, if number 1 integer found in number 2, return true
2. Inputs: two positive number
3. Outputs: boolean
4. Enought Inputs: (2)? return false
5. Important labels:
objects - obj1, obj2
*/


// function sameFrequency(){
//     // do something
//     // return, obj1[key] match obj2[key]: true, else: false
// }
// (88812, 88812)
// obj { key(8): value(3), 1: 2, 2: 2 }

function sameFrequency(numb1, numb2){
    if(!numb1 || !numb2) return false
    if(numb1.length !== numb2.length) return false
    numb1 = numb1.toString()
    numb2 = numb2.toString()
    // create objects for both numbers
    const obj1 = {}
    const obj2 = {}
    // store number values into objects
    // for val of numb: object[val] = (object[val] || 0) + 1
    for(let val of numb1) obj1[val] = (obj1[val] || 0) + 1
    for(let val of numb2) obj2[val] = (obj2[val] || 0) + 1
    // for key in obj1
    for(let key in obj1){
        // if key is NOT in obj2: return false
        if(!(key in obj2)) return false
        // if key value is NOT EQUAL obj2[key]: return false  
        if(obj1[key] !== obj2[key]) return false
    }
    // return true
    return true
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
sameFrequency(22) // false





// . Task: Add up each character in the string, return object with char and count // {a:1, b:2, c:0}
// 2. Input: a string "string"
// 3. Outputs: Object{key(char): value(count)} // { a: 1 }
// 4. Enought Input: no string? return null
// 5. Important labels:
// func charCount(