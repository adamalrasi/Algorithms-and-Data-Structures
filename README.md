# Algorithms-and-Data-Structures
Learning Algorithms and Data Structures with JavaScript

# Big O Notation

An Example
- Supoose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

What does better mean?
Faster?
Less memory-intensive?
More readable?

Focus on evaluting speed and less memory
$Add.js
$Add_Timing.js

Rather than counting seconds, which are so variable
Let's count the number of simple operations the computer has to perform!

Counting Operations

function addUpTo(n){
    return n * (n + 1) / 2;
}
1 multiplication
1 addition
1 division

3 simple operations, regardless of the size of n


function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total
}
    (+=)
n additions
n assignments
    (i++)
n additions
n assignments
    (let total = 0)
1 assigment
    (let i = 0)
1 assigment
    (i <= n)
n comparisons

Depending on what we count, the number of operations can be as low as 2n or as hight as 5n + 2 but regardless of the exact number, the number of operations grows roughly proportionally with n

Big O Notation is a way to formalise fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We don't care about the details, we care about the trend.

Big O Definition:
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant time f(n), as n increase

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n2)
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different!


Example: Runtime is constant
function addUpTo2(n){
    return n * (n + 1) / 2;
}

Always 3 operations
O(1)

Example: Runtime relative to n
function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i
    }
    return total
}

Number of operations is (eventually) vounded by a multiple of n(say, 10n)
O(n)

Another Example: runtime is relaive to n
function countUpAndDown(n){
    console.log("Going Up!)
    for(let i = 0; i < n; i++) console.log(i)
    console.log("At the Top!, Going Down")
    for(let j = n - 1; j >=0 ; j--) console.log(j)
    console.log("Back down")
}
Number of operations is (eventually) vounded by a multiple of n(say, 10n)
O(n)

Another Example: Nested Loop - Runtime is Quadratic
function printAllPairs(n) {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i, j)
        }
    }
}

O(n) operations inside of an O(n) operations.
O(n * n)
O(n2)

Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions.

These rules of thumb are conseqences of the definition of big O notation.

Constants don't matter
O(2n) = O(n) - linear Runtime
O(500) = O(1) - constant Runtime
O(13n2) = O(n2) - Quadratic Runtime

Smaller terms don't matter
O(n + 10) = O(n)
O(1000n + 50) = O(n)
O(n2 + 5n + 8) = O(n2)

Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an Array (by index) or Object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

![Alt text](bigONotation.png)

