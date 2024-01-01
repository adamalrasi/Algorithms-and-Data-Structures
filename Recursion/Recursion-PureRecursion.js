function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

/*

Pure Recursion Tips

- for arrays, use methods like slice, the spread operator and concat that make copies of array so you don't mutate them
- Remember that strings are immutable so you will nee to use methods like slice, substr or substring to make copies of strings
- To make copies of objects use Object.assign or the spread operator
*/