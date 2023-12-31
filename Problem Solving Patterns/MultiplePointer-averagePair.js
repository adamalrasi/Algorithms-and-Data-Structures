/*
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

1. Task: check if pair of values equal target average
2. Inputs: sortedArr, targetNumb
3. Outputs: boolean
4. !Inputs: null return false
5. Important labels:
function averagePair
*/

function averagePair(sortedArr, targetNumb){
    if(!sortedArr || !targetNumb) return false
    // create left and right
    let left = 0;
    let right = sortedArr.length - 1;
    // while left < right 
    while(left < right){
        // create sum to add the pairs together
        let sum = sortedArr[left] + sortedArr[right]
        // if sum(left + right) == targetNumb * 2: return true
        if(sum === (targetNumb * 2)) return true
        // if sum > targetNumb * 2: right--
        if(sum > targetNumb * 2) right--
        // if sum < targetNumb * 2: left++
        if(sum < targetNumb * 2) left++
    }
    // return false
    return false
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
