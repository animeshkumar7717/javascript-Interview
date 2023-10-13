/**
 * toUpperCase: Capitalize the string - JavaScript
 * 
 * When you cycle through string and wish to format the text
 * it helps to consider a breakdown of components 
 * 
 * IE string: 'a bunch of words'
 * 
 * C1: 'a', C2: 'bunch', C3: 'of', C4: 'words'
 * 
 * PC: ['a','bunch','of','words']
 * 
 * .split(): The split method divides a string into an ordered list 
 * of substrings and then puts them into an array and returns the array
 */

/**
 * Exercise: Capitalize letters in strings

You're building the front end webiste for a big marketing company in New York.
You're getting the big bucks! 

A company exec comes up to you and ask if you can write some algorithms to help
automate the text format on the UI. If you can spruce it up and they increase sales,
a big bonus is coming your way $$$$$ 

1. Write a function titleCapitalize which can take any string as an argument and return
only the first letter of each word in the string capitalized. 

Ex:
input: 'asdGasdg asdg sdg SDJHFKSDFJ sadf'
output: 'Asdgasdg Asdg Sdg Sdjhfksdfj Sadf'

2. Write a second function sentenceCapitalize which can take any string as an argument
and return only the first letter of the first word in the string capitalized. 

Ex:
input: 'it is a SUNNY wedneSday morning right now'
output: 'It is a sunny wednesday morning right now'

3. Call and log titleCapitalize with the following argument: 'the future is now'

4. Call and log sentenceCapitalize with the following argument: 'hello, my fiend'

5. Share your solutions on the discord in the #alogrithms channel!

Good luck and bring home that cheddah! 
 */


const titleCapitalize = (string) => {
    string = string.toLowerCase();
    let split = string.split(' ');
    for(let i=0; i<split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].slice(1)
    }
    console.log(split);
    return split.join(' '); 
}

const sentenceCapitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

console.log(titleCapitalize('the future is now'));
console.log(sentenceCapitalize('hello, mY fiend'));
