/**
 * Returns the smallest number in an nested array...
 * 
 * Lets challenge, our ability to work with nested array as well as understand of bracket notation.
 * 
 * math.min(): It returns the minimum number present in an array.
 * math.max(): It returns the maximum number present in an array.
 */

const array = [1,2,3,4,5,6,7];

console.log('minimum', Math.min(...array));

/**
 * Given the following multi-dimensional array:

const multiArray = [[234,35,2,1],[53,3,6554,4],[45,632,31,566]]

1. Write a function smallestNumbers which takes a multi dimensional array as an argument and 
returns a new array containing only the smallest integers from each sub array. 

2. Log out the function and pass in multiArray as the argument.

3. Share your solutions in the discord channel #algorithms 
 */

const multiArray = [[234,35,2,1],[53,3,6554,4],[45,632,31,566]]

const smallestNumbers = (multiArr) => {
    let smallestArray = [];
    for(let i=0; i<multiArr.length; i++) {
        smallestArray.push(Math.min(...multiArr[i]))
    }
    return smallestArray;
}

console.log('Smallest number in each array: ', smallestNumbers(multiArray));
