# Algorithms-and-Data-Structures
Learning Algorithms and Data Structures with JavaScript

# Big O Notation

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

Question 1:
Determine the time complexity for the following function 

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
Time complexity: O(n)

Question 2:
Determine the time complexity for the following function 

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
Time complexity: O(1)

Question 3:
Determine the time complexity for the following function

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
Time complexity: O(n)

Question 4:
Determine the time complexity for the following function

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
Time complexity: O(n)

Question 5:
Determine the time complexity for the following function

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
Time complexity: Nested Loop O(n2)

Space Complexity in JS
- Most primitives(booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

Example:
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
Time complexity: O(n)

(total = 0)
1 number
1 number
Space complexity: 0(1)

Another Example:
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
Time complexity: O(n)
n numbers
Space complexity: O(n)

Question 1:
Determine the space complexity for the following function  

function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
Space Complexity: O(1)

Question 2:
Determine the space complexity for the following function  

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
Space Complexity: O(1)

Question 3:
Determine the space complexity for the following function  

function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
Space Complexity: O(1)

Question 4:
Determine the  space complexity for the following function 

function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
Space Complexity: O(n)

Question 5:
Determine the space complexity for the following function

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
Space complexity: O(n)


We've encountered some of the most common complexities:
O(1), O(n), O(n2)

sometimes big O expressions involve more complex mathematical expressions

Logarithms
Log2(8) = 3 => 2*2*2 = 8

log2(value) = exponent => 2 * exponent = value

We'll omit the 2
log === log2

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

Logarithm Examples:
8
8 / 2 = 4
4 / 2 = 2
2 / 1 = 1
log(8) = 3

25
25 / 2 = 12.5
12.5 / 2 = 6.25
6.25 / 2 = 3.125
3.125 / 2 = 1.5625
1.5625 / 2 = 0.78125
log(25) = 4.64

Why care?
- Certain searchign algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

Recap
- To analyse the performance of an alogrithm, we use big O notations.
- Big O notations can give us a high level understanding of the time or space complexity of an algorithm.
- Big O notations doesn't care about precision, only about general trends(linear, quadratic, constant).
- The time or space complexity depends only on the algorithm, not the hardware used to run the algorithm.

# Analysing Performance of Arrays and Objects

Objects - unordered, key value pairs

Big O of Objects
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

When you don't need any ordering, objects are an excellent choice.

Big O of Object Methods

Object.keys - O(N)
Object.values - O(N)
Object.entires - O(N)
hasOwnProperty - O(1)

Arrays - Ordered lists

Big O of Arrays
Insertion - It depends...
Removal - It depends...
Searching - O(N)
Access - O(1)

# Problem Solving Approach
