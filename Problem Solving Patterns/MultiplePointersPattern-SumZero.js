// Multiple Pointers
// - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
// - Very effcient for solving problems with minimal space complexity as well

// Example
// Write a function called SumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

// Naive Solution
function sumZeroNaive(arr) {
    for(let i = 0; i < Array.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
// Time complexity: O(n2)
// Space complexity: O(1)

sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 4]) // false

// Refactor Solution
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        } 
        if(sum > 0) {
            right--
        } else {
            left++ 
        }
    }
}
// Time complexity: O(n)
// Space complexity: O(1)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4, 5]))