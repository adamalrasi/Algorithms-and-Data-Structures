// Bubble Sort 
// - A sorting algorithm where the largest values bubble up to the top 
function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            noSwaps = true
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break;
    }
    return arr
}

bubbleSort([37, 45, 29, 8])

// Time complexity: (n^2)
