/**
 * Sort And order Numbers into the array in JavaScript...
 * 
 * the sort() method sorts the element in an array and return the array with sorted element.
 * 
 * the default sort is assending order.
 * 
 * Ex: sort((a,b)=> (a-b))
 * 
 * a>b: 1
 * a<b: -1
 * a===b: 0
 * 
 */


let NumberArray = [2,8,12, 6,4,10];
let letter = ['a', 'f', 'g', 'k', 'c', 'd', 'b']

const sortedNumberArray = NumberArray.sort((a,b)=>a-b);
const sortedLetter = letter.sort();
console.log(sortedNumberArray);
console.log(sortedLetter);

/**
 * Exercise: Sort And Order Numbers into an Array 

You are at an interview you get asked the famous sort question but with a TWIST! duh duh duh

The interviewer wants to see if you can go above and beyond and asks you to not only sort a 
disordered array of numbers, but also insert any given number into the array in its correct
ordered position. 

IE array = [3,35,2,1] and num = 4
script expected output: [1,2,3,4,35]

Prove your valour and show this interviewer what you're made of ;) 

Before beginning, create a new array (numbersArray) under the 
Exercise Solution section of the template with the following numerical 
values in the given order: numbersArray = [120, 420, 12, 3, 24]

1. Write a a function called sortAndOrder which takes two arguments; an array and a number.

2. The function should sort ascendingly and evaluate any given array's numerical values 
as well as insert in order any number into the array provided by the number argument of the
sortAndOrder function. 

3. Call and log the function sortAndOrder passing in the arguments the 
numbersArray and the value 42.

4. Share you solution on the discord in the #alogrithms channel and rejoice victorious!
 */

const sortAndOrder = (arr, num) => {
    arr.push(num)
    return arr.sort((a,b) => a-b);
}

const array = [120, 420, 12, 3, 24]
console.log(sortAndOrder(array, 42));


/** solution 2 */

const sortAndOrderTwo = (arr, num) => {
    arr.sort((a,b)=>a-b);
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>num) {
            arr.splice(i,0,num)
            break;
        }
    }
    return arr;
}

const array2 = [120, 420, 12, 3, 24]
console.log(sortAndOrderTwo(array2, 42));
