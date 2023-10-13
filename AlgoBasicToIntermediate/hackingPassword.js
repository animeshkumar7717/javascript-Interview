/**
 * Hacking A Password with Matching keywords in JavaScript
 * 
 * Finding matching values in javaScript is a very valuable algorithm with many uses.
 * 
 * Consider searching through an array of values and then testing each value to see if
 * it passes a truthiness test. This is an excellent method to match up values through
 * testing
 * 
 * let x = 34,
 * let y = [12,324325325,3523,235,35, 34...]
 * expected match = 34
 */


/**
 * Exericse - Hacking A Password with Matching keywords in JavaScript

You're walking down the street and suddenly the FBI pulls you over and throws
you in the back of the van! Before you know it, you're at some secret location and are
given instructions to hack into the dark web and help prevent the end of the world!!

0. Insert the following array into your solution script (found in descriptions):
let keywordPossibilities = [
  "cat",
  "cold",
  "this",
  "is",
  "frame",
  "cutey",
  "hope"
];

1. Write a function called findMatch which takes two arguments: arr and a function.

2. findMatch should conditionally check whether the function argument given any strings
in the keywordPossibilities are true and if they are to then store the string into the
findMatch function and then finally return the stored string value. 

3. If the string does not exist in the array then findMatch should return an error
message stating that there is no match in this file.

4. Log into the console findMatch passing in the keywordPossibilities as the first
argument and an anonymous assertion function for the second argument.

Ex Anonymous function:
function(ar) {
  return ar
}

5. The second argument (anonymous function) passed into the findMatch function should take
an argument of a string and return the following assertion: 
(copy exactly from the description): return string + " is a match" === "this is a match";

6. Share your solution in the discord #alogrithm channel and best of luck!  
 */

let keywordPossibilities = [
    "cat",
    "cold",
    "this",
    "is",
    "frame",
    "cutey",
    "hope"
  ];

const findMatch = (arr, fn) => {
    let word = '';
    for(let i=0; i<arr.length; i++) {
        if(fn(arr[i])) {
            word = arr[i];
            return word;
        }
    }
    if(word === "") return 'there is no match in this file.'
}

console.log(
    findMatch(keywordPossibilities, function (string) {
      return string + " is a match" === "col is a match";
    })
  );
