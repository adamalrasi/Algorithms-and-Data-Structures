// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern

/*
1. Task: check if char is more than 1
2. Inputs: number or string, lowercase
3. Outputs: if more than one: return true, else: false
4. !input: (1),(),(A): return false
5. Important labels:
objects - variableObj
*/

// areThereDuplicates(...arg){
//     // do somethings
//     // return if object(key.value >= 2): true, else: false
// }


// function areThereDuplicates(...args){
//     if(!(args)) return false
//     let newString = ""
//     args.map((val) => newString += val.toString())
//     // create object
//     const variableObj = {}
//     // store argument in object
//     for(let val of newString) variableObj[val] = (variableObj[val] || 0) + 1
//         // if key FOUND: value++
//         // else: 0

//     // for key in object
//     for(let key in variableObj){
//         // if key.value == 2: return true
//         console.log(variableObj[key])
//         if(variableObj[key] == 2) return true
//     }
//     // return false
//     return false
// }

function areThereDuplicates(...args){
    let collection = {}
    for(let val in args){
        collection[args[val]] = (collection[args[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
areThereDuplicates('a', 'b', 'c', 'A') // true