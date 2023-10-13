/**
 * Im math and Computer Science, truncate is the limit the digit to the right of the value.
 * 
 * let x = = 'hello'
 * slice of the o from x 
 * to equal = 'hell'
 * 
 * The slice method is good for truncate.
 */

/**
 * Exericse Truncate - Paywall Text Algorithm: 

You're working at a Blob The Blog Blog company and they are putting up a 
paywall to restrit guest viewers from reading the full article. 

Truncate the text so that it only returns up to a maximum value and replaces the 
additional overflow with '...'

1. Write a function truncate which takes a string and number as arguments and returns
the string truncated determined by the value of the number argument. 

Ex: string = 'hello', num = 3 then expected output = 'hel'

2. Log the result in the console and pass in the arguments:
"Really important stuff you'll pay to read", 21

Guten luck! 
 */

const truncate = (value, num) => {
    if(value.length>num) {
        return value.slice(0,num) + '...'
    }
    return value
}

console.log(truncate("Really important stuff you'll pay to read", 210));