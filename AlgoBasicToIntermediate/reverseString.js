/**
 * How to reverse a string in JS.
 * 
 * The split(): splits a string into the array of substring, and return an array.
 * The reverse(): method present in an array to reverse an array.
 * The join(): creates and returns a new string by concatinating all of the elementS in an array, seprated by 
 * commas or any specific operator.
 */

/**
 * Exercise: How to reverse a string in JavaScript

1. Write a function which takes the argument of a string and returns another string which holds
the reverse order of characters of the original argument string.

2. Call the function in the console and test your solution with the argument 
'The universe is amazing'

3. Share your solution in the discord channel #algorithms
 */

const reverse = (str) => {
    const reverseString = str.split('').reverse().join('');
    return reverseString;
}

const reverseItterative = (str) => {
    let reverseStr = ''
    for(let i = str.length-1; i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr;
}

console.log(reverse('The universe is amazing'));
console.log(reverseItterative('The universe is amazing'));