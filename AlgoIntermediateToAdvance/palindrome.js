/**
 * word is same if we reverse the word  --> Palindrome
 * ex:
 * abc is palindrome of cba =>    cba -> (opposite) -> abc
 * 
 * What is a Palindrome in JavaScript
 *
 * The difference between anagram and palindrome is that anagram is (of words) 
 * a word or phrase that is created by rearranging the letters of another word or 
 * phrase while palindrome is a word, phrase, number or any other sequence of 
 * units which has the property of reading the same forwards as it does backwards, 
 * character for character, sometimes disregarding punctuation, capitalization and 
 * diacritics. 
 * 
 * IE eye = true, eyes = false 
 */


/**
 * Interview Question - Check if a string is a Palindrome 

1. Write a function called palindrome that takes a string as a parameter
that returns true if a word is a palindrome and false if a word is not a
palindrome.

2. NOTE that any non-alphanumeric characters (including the underscore) should
be disregarded (for example: ./[[]] should be disregarded).

3. Log and call the function twice passing in the following strings:
"// [_t    o t_]" expected output: true
" map" expected output: false

4. Share your solution in the discord and good luck! 
 */

const palindrome = (str) => {
    // \W = [0-9a-zA-Z_]
    let array1 = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('')
    let array2 = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse();
    // console.log(array1, array2);
    let str1 = array1.join('')
    let str2 = array2.join('')

    // console.log(str1, str2);

    if(str1 === str2) return true
    return false
}

console.log(palindrome("// [_t    o t_]"));
console.log(palindrome(" mam"));

