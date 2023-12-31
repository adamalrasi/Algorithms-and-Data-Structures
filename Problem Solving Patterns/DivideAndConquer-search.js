// Divide and Conquer
// - This pattern involves divinding a data set into smaller chuncks and then repeating a process with a subset of data.
// - This pattern ca trmendously descrease time complexity

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(arr[middle] < val){
            min = middle + 1
        }
        if(arr[middle] > val){
            max = middle - 1
        }
        return middle
    }
    return -1
}

search([1, 2, 3, 4, 5, 6, 7, 8], 4) // 3
search([1, 2, 3, 4, 5, 6, 7, 8], 6) // 5
search([1, 2, 3, 4, 5, 6, 7, 8], 11) // -1