function fib(n){
    if(n <= 2) return 1
    return fib(n-1) + fib(n-2)
}
console.log(fib(5))

/*
Big O notation

time complexity: o(2^n) exponential
space complexity: o(2^n)
*/