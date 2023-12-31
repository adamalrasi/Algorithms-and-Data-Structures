/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

1. Task: find the max sum if using number to add up. 
2. Inputs: array, number
3. Outputs: sum
4. !Inputs: arr > number, [], "1": return false
5. Important labels:
maxSubarraySum
arr, maxIndex
*/

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
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

/*
  i   j = maxSum
[100,200,300,400] 
      i + j > maxSum: EQUAL maxSum
[100,200,300,400] 
          i + j > maxSum: EQUAL maxSum
  i   j = maxSum
[100,200,300,400] 
      i + j > maxSum: EQUAL maxSum = 700
[100,200,300,100] 
          i + j < maxSum: continue maxSum = 500
*/