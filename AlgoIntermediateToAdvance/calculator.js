/**
 * Math helpers in JavaScript
 * 
 * The Math.max() method returns the largest of the zero or
 * more number given in an input, or NaN if any paramenter
 * isn't a number. 
 */

//  console.log(Math.min(2, 3, 123));

 /**
  * Exercise - Build An Array Calculator 

1. Create a calculator function called productAll which can calculate the product of the first
and last number in an array and all of its product numbers in between of the first and last
values. 

2. The function should pass an argument as an array and return the product all of values. 

IE arr: [1,4] = 24 & arr: [4,43,2,1] = 24
1 * 4 = 4, 2 * 3 = 6, p = 4 * 6 = 26 

3. Call and log the productAll function passing in an array with the values [5, 2, 1] 

4. Share your math skills with your solution in the discord! 

FL: 5 * 1 = 5, MS: 2 * 3 * 4 = 24
5 * 24 = 120
  */

const productAll = (arr) => {
    let lastElement = arr.pop();
    let startElement = arr[0] * lastElement;        // 5*1 = 5
    let middleSum = 1;

    if(arr[0]>lastElement) {
        for(let i= lastElement+1; i<arr[0]; i++) {
            middleSum *= i;     // 4*3*2 = 24
        }
    } else {
        for(let i= arr[0] + 1; i<lastElement; i++) {
            middleSum *= i;     // 4*3*2 = 24
        }
    }

    return startElement * middleSum;      // 5*24
}

const array = [1,43,2,5]

console.log('productAll', productAll(array));

const prodAll = (arr) => {
    let lastElement = arr.pop();
    let productSum = 1;

    let max = Math.max(arr[0], lastElement);
    let min = Math.min(arr[0], lastElement);

    for(let i = min; i<=max; i++) {
        productSum *= i
    }
    return productSum;
}

const array2 = [1,43,2,5]

console.log('prodAll', prodAll(array2));

