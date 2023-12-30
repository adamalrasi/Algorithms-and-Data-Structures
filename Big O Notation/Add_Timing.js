function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total
}

const t1 = performance.now()
addUpTo(1000000000)
const t2 = performance.now()
console.log(`addUpTo: Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo2(n){
    return n * (n + 1) / 2;
}
const t3 = performance.now()
addUpTo2(1000000000)
const t4 = performance.now()
console.log(`addUpTo2: Time Elapsed: ${(t4 - t3) / 1000} seconds.`)

