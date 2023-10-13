/**
 * How to repeat a string in JavaScript.
 * 
 * There are many ways to repeat a string in JS. 
 * 
 * repeat(): This method nice and easy which introduce in 2015
 * 
 * Supported Browsers: 
 *
 *  Google Chrome 41 and above
 *  Edge 12 and above
 *  Firefox 24 and above
 *  Opera 28 and above
 *  Safari 9 and above
 */


/**
 * Exercise: Repeat A String in JavaScript

1. Write a function repeatString which takes two arguments, a string and a number 
and return a new string repeating the function's argument string 
as many times as the number argument specifies. 

2. Log the result in the console and share your solution in the discord. 
 */

const repeatString = (str, num) => {
    let newString = str.repeat(num);
    return newString;
}

console.log(repeatString('Javascript', 3));


// How to do that with iteration::

const repeatStringIteration = (str, num) => {
    let updateString = ''
    for(let i=1; i<=num; i++) {
        updateString += str;
    }
    return updateString;
}

console.log(repeatStringIteration('Javascript', 3));


const repeatStringIterationArray = (str, num) => {
    let array = []
    for(let i=1; i<=num; i++) {
        array.push(str);
    }
    return array.join('');
}


console.log(repeatStringIterationArray('Javascript', 3));

const repeatStringIterationArrayFill = (str, num) => {
    return Array(num).fill(str).join('')
}


console.log(repeatStringIterationArrayFill('Javascript', 3));
