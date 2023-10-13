/**
 * In Javascript: Regular Expression are pattern used to match characters or character combitions in string.
 * 
 * In Javascript: Regular Expression are also a object.
 * 
 * Grouping: a grouping is basically like a mini-regex inside a pair of parenthesis, while a character set is
 * a range between square brackets
 * 
 * IE:
 * /([a-z])([A-Z])/g -> {// g stands for grouping}
 * 
 * The above example capture: one character a-z and another character A-Z.
 */

// let str = 'Three + Two = Five'

// console.log('Example of regex::', str.replace(/([a-z])([A-Z])/g, function(match, g1, g2){
//     return g1 + " " + g2;
// }));

/**
 * Exercise - Star Power with Regex in JavaScript

You are working for a website called Star Power and they just can't get enough
stars. They loves stars so much in fact, so much that they want you to design an
algorithm which will replace all string grouping of upper and lowercases with spaces 
following by an asterix in between. 

Strange request? - Perhaps! But sometimes we just gotta do what the job requires. 

For Example - 
Given the following string: 'starPower Forever', we should replace it with:
star * power * forever

1. Write a function starPowerAlgo which takes a string as an argument and returns a
new string in all lowercase.

2. The function should replace all groupings of uppercases and lowercases with a space
and should also replace all spaces with an asterix. 

IE: The string 'starPower Forever' should be replaced with 'star * power * forever'

2. Call and log the function passing in 'starPower Forever'

Share your solution on the discord and good luck!
 */

function starPowerAlgoRegex(str) {
    let convertedStr = []
    convertedStr = str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase()
      .split(" ");
    return convertedStr.join(" * ");
  }

console.log(starPowerAlgoRegex("starPower Is alwaysAnd Forever"));

function starPowerAlgo(str) {
    let convertedStr = str.toLowerCase().split(' ');
    let asterix = [];
  
    for(let i = 0; i < convertedStr.length; i++) {
      asterix += convertedStr[i] + ' * ';
    }
      let array = asterix.toString().split('').splice(0, asterix.length - 3)
      let string = array.join('')
   return string
}

console.log(starPowerAlgo("starPower Is alwaysAnd Forever"));
