/**
 * The Fibonnaci Series in JavaScript
 *
 * The Fibonnaci Series is a 'magical' series of numbers in which 
 * each number (Fibonnaci number) is the sum of the two proceeding numbers. 
 * 
 * very basic whole intgers Fib Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... 
 * 
 * The Golden Ratio - describes predictable patterns on everything from atoms
 * to huge stars in the sky! The Golden Ratio is derived from the Fibbonaci Sequence,
 * named after its founder, Leonardo Fibonnaci. Nature uses this ratio to maintain balance,
 * and the financial markets seem to as well. 
 * 
 * The Fibbonaci Series: 
 * F(n) = F(n - 1) + F(n - 2) 
 * Fib: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
 * Fn(0) = 0, Fn(1) = 1, Fn(2) = 1, Fn(3) = 2, Fn(5) = 5, Fn(10) = 55
 * 
 * Example 1: Recursive Fibonnaci Solution
 * Recursion is when a function calls itself until something stops it.
 * 
 * Big 0 Notation: the growth of some quantity as a function of n or
 * the limiting behaviour of the function - in time complexity.
 * 
 * It describes the execution time of a task in relation 
 * to the number of steps required to complete it
 * 
 * The amount of time it takes for an algorithm to run. 
 */

// const FabonacciRecursive = (num) => {
//     if (num === 0 || num === 1) return num;
//     return FabonacciRecursive(num - 1) + FabonacciRecursive(num - 2);
// }

// console.log(FabonacciRecursive(10));


/**
 * Exercise: Convert A Big O Exponential Solution to a Linear Solution

You are working at a financial company measuring predictive graphs of
indexes and stocks. 

1. Your boss asks you to write a function that can calculate the
fibonacci sum of terms in a series that does not have an exponential
time complexity. 

IE:

Fib Series:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Fn(0) = 0, Fn(1) = 1, Fn(2) = 1 Fn(3) = 2, Fn(4) = 3

2. Name the function fibonnaciSum. It should take an argument which is the 
sequential number position of F(n) in the series and return all the added sums
of each position starting at the value where 1 equals: f(n1) = 1. 

For Example: 
fibonnaciSum(10) 
 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 + 55 
expected output: 143

fibonnaciSum(7) - Expected Output: 33 

3. Log and call your function passing in 14 as the value and
share your solutions in the #algorithms channel on the discord!
 */

function fibonacciSum(num) {
    let currentNum = 1, fibResult = 0, temp, sum = 0;
    if (num === 0) return 0;
    while (num > 0) {
      temp = currentNum;
    //   console.log("temp", temp);
      currentNum += fibResult;
    //   console.log("currentNum", currentNum);
      fibResult = temp;
    //   console.log("fib", fibResult);
      sum += fibResult;
      num--;
    }
    return sum;
}
console.log(fibonacciSum(10));

