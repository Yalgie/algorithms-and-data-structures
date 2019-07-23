# Algorithms & Data Structures

Making my way through the Udemy course [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/) by Colt Steele.

## Big O
In a nutshell, Big O is an equation that describes how the run time scales in respect to input variables

> As input (n) grows how does that reflect in the run time.

### O(n)
These functions scale to the amount of input (n)
```
add1.js
countUpDown.js
```

### O(1)
These functions scale linearly, the input does not necessarily effect the run time
```
add2.js
```

### O(n<sup>2</sup>)
When you have a O(n) operation inside another O(n) operation (nested) you get O(n<sup>2</sup>)
```
printAllPairs.js
```