# Algorithms & Data Structures

Making my way through the Udemy course [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/) by Colt Steele.

## Big O
In a nutshell, Big O is an equation that describes how the run time scales in respect to input variables.

> As input (n) grows how does that reflect in the run time.

### O(n)
These functions scale to the amount of input (n).
```
add1.js
countUpDown.js
logAtLeast5.js
```

### O(1)
These functions scale linearly, the input does not necessarily effect the run time.
```
add2.js
logAtMost5.js
```

### O(n<sup>2</sup>)
When you have a O(n) operation inside another O(n) operation (nested) you get O(n<sup>2</sup>).
```
printAllPairs.js
```

### Auxiliary Space Complexity
The term *auxiliary space complexity* (Space) refers to the amount of _space_ required by the alogorithm, things like booleans, variables, numbers, undefined and null are constant and always take up the same amount of space.

Things like reference types such as arrays and objects or strings will increase the space needed for each new item or character.

### O(n) Space
```
double.js
```

### O(1) Space
```
add1.js
countUpDown.js
logAtLeast5.js
add2.js
logAtMost5.js
printAllPairs.js
```

### Logarithms
```2 * 2 * 2 = 8  // value```

log<sub>2</sub>(8) = 3 ----> 2<sup>3</sup> = 8 

log<sub>2</sub>(value) = exponent ----> 2<sup>exponent</sup> = value

8 / 2 = 4

4 / 2 = 2

2 / 2 = 1

(base = 3)

log(8) = 3

## Problem Solving Patterns

### Frequency Counter

#### Example 1
Write a function called *same*, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
sameNaive.js
sameRefactor.js
```

The naive version of this function seems shorter but it uses nested loops with the indexOf method making it an O(n<sup>2</sup>) operation.

The refactored version counts the frequency of each integer in both arrays and stores the frequency in an object. It uses more loops but they are not nested which makes this function an O(n) operation which makes it a lot faster then the naive version. For example, if _n_ was 1000, the refactored version would be 3n (3x1000 = 3000) but the naive version would be 2n<sup>2</sup> (1000x1000 = 1,000,000).