// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUnqiueValues(array){
    // create index
    // for j of array
        // if i is EQUAL j: i++, array[i] = array[j]
}

function countUniqueValues(array){
    let i = 0
    for(let j = 1; j < array.length; j++){
        if(array[i] != array[j]){
            i++
            array[i] = array[j]
        }
    }
    return i > 0 ? i + 1 : 0 
}

// Time complexity: O(n)
// Space complexity: O(1)

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

                    i
const array = [1, 2, 1, 2, 3, 3, 4, 4, 5, 6]
                        j

