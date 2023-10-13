/**
 * Program the computer to identify the longest word in a string! 
 * We can do it with our minds and so why not ask our robot friends as well.
 */

/**
 * You are at a coding interview, the interviewer sits you down and asks you to find
the longest word in a string with JavaScript. 

1. Declare a function longestWord which takes an input of a string and returns
the longest word in the string. 

It's up to you to impress them with your skills and land the golden job!
 */

const longestWord = (string) => {
    const arr = string.split(' ');
    let count = 0;
    let word = '';
    for(let i = 0; i<arr.length; i++) {
        let stringCount = arr[i].length
        if(stringCount>count) {
            count = stringCount;
            word = arr[i];
        }
    }
    console.log(count);
    return word;
}

console.log(longestWord('this is my fav coding challenge'));


// Another way to solve the same problem... Solution 2:
// -----------------------------------------------------

const longestWordTwo = (string) => {
    const array = string.split(' ');
    let count = 0;
    let word = '';
    array.forEach(element => {
        if(word.length<element.length) {
            // count = element.length;
            word = element
        }
    });
    console.log(count);
    return word;
}

console.log(longestWordTwo('get the amazing gift when you solve this problem'));


