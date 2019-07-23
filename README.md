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

------

8 / 2 = 4
4 / 2 = 2
2 / 2 = 1
(base = 3)

log(8) = 3