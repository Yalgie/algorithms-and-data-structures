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

### Frequency Counters

#### Example 1 (Array)
Write a function called *same*, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
sameNaive.js
// Time Complexity O(n<sup>2</sup>)
// Space Complexity O(n)

sameRefactor.js
// Time Complexity O(n)
// Space Complexity O(n)
```

The naive version of this function seems shorter but it uses nested loops with the indexOf method making it an O(n<sup>2</sup>) operation.

The refactored version counts the frequency of each integer in both arrays and stores the frequency in an object. It uses more loops but they are not nested which makes this function an O(n) operation which makes it a lot faster then the naive version. For example, if _n_ was 1000, the refactored version would be 3n (3x1000 = 3000) but the naive version would be 2n<sup>2</sup> (1000x1000 = 1,000,000).

#### Example 2 (String Anagram)
Write a function called *validAnagram*, which accepts two strings. The function should return true if both strings contain the same amount of matching characters. Assuming all characters are lowercase and there is no special characters like spaces, !, & etc.

```
anagram.js
// Time Complexity O(n<sup>2</sup>)
// Space Complexity O(n)

validAnagram("anagram", "nagaram"); // true
validAnagram("aaz", "zza"); // false
validAnagram("textreverse", "reversetext"); // true
```

Similarly to the sameRefactor.js example I use the frequency counter method but instead of making 2 seperate objects and having 3 loops this solution only uses one object and 2 loops.

The first loop stores the frequency of each letter in the ```lookup``` object, we then loop through the second string and this time we check if the letter exists in  ```lookup```, if it does we subtract one instead of adding one. If we ever encounter a ```0``` in ```lookup``` it means the two strings were not matching. 

```
// str1 = anagram
// str2 = nagaram
// First Loop:
{ a: 3, n: 1, g: 1, r: 1, m: 1 }

// Second Loop:
{ a: 0, n: 0, g: 0, r: 0, m: 0 }
```

### Multiple Pointers

#### Example 1
Write a function called _sumZero_ which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```
sumZeroNaive.js
// Time Complexity O(n<sup>2</sup>)
// Space Complexity O(1)

sumZeroRefactor.js
// Time Complexity O(n)
// Space Complexity O(1)
```

The naive version uses one loop to start at 0 (i) and another nested loop to search 1 ahead (j).

The refactored version starts with a pointer at 0 (leftI) and another pointer which stars at the end of the array (rightI), it then moved the left or right index inwards depending on if the sum is greater or less then 0 until it finds a match.

#### Example 2
Implement a function called _countUniqueValues_ which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
countUniqueValues.js
// Time Complexity O(n)
// Space Complexity O(1)
```

This example again uses 2 pointers, but instead of working from either end into the middle, they start at 0 and 1. If the number at i is different to j it will increment i by 1 and replace the current value in the array to the new number. This means we don't need to create an additonal variable, as we can just replace the values in the current array. We then return the value of i once the loop has ended. Because we're using the same array and not adding any additonal space complexity it stays at O(1).