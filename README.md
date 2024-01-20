# Algorithms-and-Data-Structures
Learning Algorithms and Data Structures with JavaScript

# Big O Notation

What does better mean?
Faster?
Less memory-intensive?
More readable?

Focus on evaluting speed and less memory

Rather than counting seconds, which are so variable
Let's count the number of simple operations the computer has to perform!

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

What is an Algorithm?
A process or set of steps to accomplish a certain task.

How do you improve?
1. Devise a plan for solving problems
2. Master common problem solving patterns

Problem solving 
- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and Refactor

Understand the Problem
1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solutions to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough info to solve the problem?
5. How should I label the important pieces of data that are a part of the problem?

Example:
Problem: Write a function which takes two numbers and returns their sum. 
1. Task: two numbers input, add up the numbers, returns the sum - implement addition
2. Inputs: two numbers
- ints?
- floats?
- What about string for large numbers?
3. Outputs: return sum(numbers)
- int? float? string?
4. Do we have enough input for output
- What if we have one number? or no number
always two numbers
5. labels for important pieces of data
- inputs: 
Func add(numb1, numb2)
- outputs:
sum

Explore concrete examples
- Coming up with examples can help you understand the problem better
- Examples also provide sanity checks that your eventual solution workds how it should
- User Stories!
- Unit Test!
- Input to Output

Explore Examples
- Start with Simple examples
- Progress to More complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

Example: 

Write a function which takes in a string and returns counts of each character in the string.

1. Task: Add up each character in the string, return object with char and count // {a:1, b:2, c:0}
2. Input: a string "string"
3. Outputs: Object{key(char): value(count)} // { a: 1 }
4. Enought Input: no string? return null
5. Important labels:
func charCount()
input string
count

charCount("aaa") // {a:3, b:0, c:0}
charCount("hello") // {h:1, e:1, l:2, o:1}

"my phone number is 182763" 
"Hello hi"
charCount("") // {}

Break It Down
- Explicitly write out the steps you need to take.

function charCount(str){
    // do something
    // return an object with keys(letters and numbers), value(count), only keys found in the str.
}

function charCount(str){
    // make object 
    // loop over str, for each char...
        // if char is a number/letter AND is a key in object: Add one to count
        // if char is a number/letter AND not in object: Add it and set value to 1
        // if char is something else (space, period, etc.): Do nothing
    // return object
}

Simplify
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

function charCount(str){
    // make object 
    const result = {}
    // loop over str, for each char...
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        // if char is a number/letter AND is a key in object: Add one to count
        if(result[char] > 0){
            result[char]++
        }
        // if char is a number/letter AND not in object: Add it and set value to 1
        if(!result[char]) {
            result.char = 1
        }
        // if char is something else (space, period, etc.): Do nothing
    }
    // return object
}


Refactoring Questions
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or methods for some other problems?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

function charCount(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            obj[char] > 0 ? obj[char]++ : obj[char] = 1;
        }
    }
}

RECAP
- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify


# Problem Solving Patterns

How do you improve
1. Devise a plan for solving problems
2. Master common problem solving patterns


Frequency Counters
- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n2) operations with arrays / strings

Multiple Pointers
- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
- Very effcient for solving problems with minimal space complexity as well

Sliding Window
- This pattern involves creating a window which can either be an array or number from one position to another 
- Depending on a certain condition, the window either increases or closes(and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.

Divide and Conquer
- This pattern involves divinding a data set into smaller chuncks and then repeating a process with a subset of data.
- This pattern ca trmendously descrease time complexity

# Recursion
- A process(a function in our case) that calls itself

The Call Stack
- It's a stack data structure - we'll talk about that later!
- Any time a function is invoked it is place(pushed) on the top of the call stack

Base Case
- The condition when the recursion end
- This is the most important concept to understand

Two essential parts of recursive function!
- Base Case
- Different Input

# Searching Algorithms

How do we search?
- Given an array, the simplest way to search for an value is to look at every element in teh array and check if it's the value we want.

JavaScript has search!
There ar emany different search methods on arrays in JavaScript;
- indexOf
- includes
- find
- findIndex
But how do these function work?

Linear Search
[5, 8, 1, 100, 12, 3, 12]
                i = true


Lnear Search Big O

O(1)
Best

O(n)
Average

O(n)
Worst


Binary Search
- Binary search is much faster form of search
- Rather than elminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays


Divide and Conquer
let's search for 15
[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]
 12, 15, 16, 17, 18, 19
 12, 15, 16,
 15,


# What is sorting?
- Sorting is the process of rearranging the items in a collection (eg array) so that the items are in some king of order. 

Example:
- Sorting numbers form smallest to largest
- sorting based on years

What do we need to learn this?
- Sorting is an incredibly common task, so it's good to know how it works
- There are many different way to sort things, and different techniques have their own advantages and disadvantages

Objectives
- implement bubble sort
- implement selection sort
- implement insertion sort
- Understand the importants


Bubble Sort 
- A sorting algorithm where the largest values bubble up to the top 

Selection Sort
- Similar to bubble sort, but instead of first placing large values into sorted position, it places small values 

Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted

Merge Sort
- It's a combination of two things - merging and sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted;
- Works by selecting one element (called the pivot)
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

Comparison Sorts
Bubble Sort - O(n^2)
Insertion Sort - O(n^2)
Selection Sort - O(n^2)
Quick Sort - O(n log (n))
Merge Sort - O(n log (n))

Radix Sort
- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparisons between elements
- it exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number!

# Data Structures

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.


Class Syntax in JS

What is a class?
- A blueprint for creating objects with pre-defined properties and methods

How we'll be using calsses

class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethods(){
        // what should each object created from this class be able to do?
    }
}

What is a Linked list?
- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes and each node has a value and a pointer to another node or null. 
![Alt text](image.png)

Comparisons with Arrays

List
- Dont have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed

Arrays
- Indexed in order
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index

![Alt text](image.png)

What is a Stack?
- A LIFO data structure Last In, First Out
- The last element added to the stack will be the first element removed from the stack

![Alt text](image.png)

What is a Queue?
- A FIFO data structure
- First In First Out

# Binary Search Trees

What is a tree?
- A data structure that consists of nodes in a parent/child relationship.

![Alt text](image.png)

Lists = linear 
Trees = Nonlinear

Tree Terminology

Root - The top node in a tree.
Child - A node directly connected to another node when moving away from the root.
Parent - The converse notion of a child.
Siblings - A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.


Traversing a tree

Two ways:
- Breadth-first search
- Depth-first search

Recap
- Trees are non-linear data structure that contain a root and child nodes
- Binary Trees can have values of any type, but at most two children for each parent
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
- We can search throuh trees using Breadth First Search and Depth First Search

# Binary Heaps
 
- Very similar to a binary search tree, but with some different rules!

MaxBinaryHeap - parent nodes are always larger than child nodes. 
MinBinaryHeap - parent nodes are always smaller than child nodes.

Heap
For any index of an array n...
The left child is stored at 2n + 1
The right child is stored at 2n + 2

For any child node at index n...
its parent is at index (n-1)/2 // floored

What is a Priority Queue?
- A data structure where each element has a priority.
- Elemenst with higher priorities are served before elements with lower priorities.

