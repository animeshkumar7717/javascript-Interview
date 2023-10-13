/**
 * Factorials help us to create probabilities
 * 
 * If you have a puzzle and you want to know all the puzzle piece can puzzle form.
 * [puzzle form 1, puzzle form 2, puzzle form 3]
 * 
 * factoral of 4, {ex: 4!}
 * 4! = 4*3*2*1 = 24.
 */

/**
 * Exercise: What is A Factorial - JavaScript (Probability Calculations)

1. Declare a function called factorialize which takes a number as an argument.
The function should return the factorial product of the number. 

Ie: 4! = 24, 5! = 120 etc

2. Call the function in the console and pass in 7 as the argument and log out the result.

3. Share your solution in the discord and well done! 
 */

const factorialize = (num) => {
    if(num==1) return num;
    return num*factorialize(num-1);
}

const factorializeItterative = (num) => {
    let ans = 1;
    for(let i=num; i>0 ; i--) {
        ans *= num
        num--;
    }
    return ans;
}
console.log(factorialize(4));
console.log(factorializeItterative(5));