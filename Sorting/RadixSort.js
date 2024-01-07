/*
Radix Sort Helpers
- In order to implement radix sort, it's helpful to build a few helper function first

*/

// getDigit(num, place) return the digit in num at the given place value
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount(numb) return the number of digits in num
function digitCount(num){
    if(num===0)return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// mostDigits(nums) given an array of numbers, returns the number of digits in the largest numbers in the list
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets)
    }
    return nums;

}

radixSort([[23,245,343,2,223,12,33]])

// Time Complexity O(nk)
// n- length of array
// k- number of digits(average)