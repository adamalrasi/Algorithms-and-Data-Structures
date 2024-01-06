/*

Naive String Search
- Suppose you want to count the number of times a smaller string apears in a longer string
- A straightforward approach involves checking paris of characters individually

harold said haha in hamburg
harold said haha in hamburg

"haha"

wowomgomg
   omg   
*/

function naiveSearch(long, short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+1]) break;
            if(j === short.length - 1) count++
        }
    }
    return count
}

naiveSearch("lorie loled", "lol")