
function power(base, exponent){
    if(exponent == 0) return 1
    console.log(base, exponent)
    return base * power(base, exponent-1)
}