/**
 * Gererating Missing Alphabet letter!
 * 
 * when it comes to modify the string values for various purpose, by having a clear understanding of their UTF
 * codes and how we can manipulate them, we can render this process much more efficient and gain real flexibility.
 * 
 * Ex1: UTF-16 values
 */

// console.log('Ex1: ', 'abc'.charCodeAt(0));
// console.log('Ex2: ', String.fromCharCode(97));

/**
 * Exercise: Generate Missing Alphabet Letters

You are at an interview and the interviewer asks you how familiar 
you are with UFT in JavaScript. It's time to show them your skills...

1. Write a function generateLetters which takes a string as an argument.

2. The function should be able to input any given two alphabet letters and output 
all of the missing alphabet letters in between the two letters including the original
input in the correct alphabetized order. 

For Ex: 
Input: 'ad', Expected output: 'abcd'

3. Log and call the function passing in the string 'ap'

4. Share your solution in the discord in the #algorithms channel and good luck!
 */

const generateLetters = (string) => {
    const start = string.charCodeAt(0);
    const end = string.charCodeAt(1);
    let middle = ''
    let str = string[0]
    for(let i=start+1; i<end; i++) {
        
        middle += String.fromCharCode(i)
    }
    str+= middle;
    str+= string[string.length-1]
    return str;
}

console.log(generateLetters('ad'));
