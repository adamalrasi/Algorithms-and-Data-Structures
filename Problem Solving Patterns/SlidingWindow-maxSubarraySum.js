// Sliding Window
// - This pattern involves creating a window which can either be an array or number from one position to another 
// - Depending on a certain condition, the window either increases or closes(and a new window is created)
// - Very useful for keeping track of a subset of data in an array/string etc.

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximun sum of n consecutive elements in the array.

function maxSubarraySum(arr, maxIndex){
    if(!arr || !maxIndex) return null
    if(arr.length < maxIndex) return null
    let maxSum = 0
    let tempSum = 0
    
    for(let i = 0; i < maxIndex; i++){
        maxSum += arr[i]
        console.log(arr[i], maxSum)
    }

    tempSum = maxSum
    for(let i = maxIndex; i < arr.length; i++){
        tempSum = tempSum - arr[i - maxIndex] + arr[i]
// arr[4 - 4] + arr[4] = 4
// arr[5 - 4]1 + arr[5] = 6
// arr[6 - 4]2 + arr[6] = 8
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

// Time complexity: O(N)