/**
 * Array: Array stores collections of items in one dimension array.
 * Array can contain multiple types as well. boolean, string, integer,etc.
 * 
 * Arrays can get much complex!! These are commonly called multi-dimensional array. 
 * (arrays that contains other array).
 */

let oneDimension = [];
const loader = true;

oneDimension.push(loader, 4, 'cat')

// console.log('oneDimension', oneDimension);

/* Length: length property give the number of an array. */

let lengthArray = oneDimension.length;

// console.log('length of an array: ',lengthArray);

/*Complex array */

let multiArray = [
    [
        {
            mexico: 'Mexico',
            rusia: 'Rusia',
        },
        {
            hot: true,
            cold: false,
        }
    ],
    [
        {
            cat: 'Cat',
            dog: 'Dog',
        },
        {
            cute: true,
            cuddly: false,
        }
    ],
]

/**
 * Exercise
 * 
 * 1. Write an array called simpleArray, and assign it with 6 different data type.
 * 2. To pass this exercise, the array must contain atleast 1 boolean, 2 integer and 1 string
 * 3. Log out the length of the array.
 */

const simpleArray = [true, 1, 10, 'come', 'here', 5]
// console.log('the result of simple array', simpleArray.length);


/**
 *                                  Indexing Value of an Array
 * 
 * Array are not meant only by storing the data, but it retriving the data as well.
 * Every items of an array in JS is marked with an index.
 * In an array, the items starts with index zero 0.
 * 
 * You can set the value of an arrays by selecting the value of the array and defining said value.
 */

/* Ex:1 Assign array value */
let animalArray = ['dog', 'cat', 'monkey', 'human'];
let favAnimal = animalArray[2];

// console.log('fav Animal in animalArray',favAnimal);

/*Ex:2 Set array value */
animalArray[2] = 'Bird'
// console.log('updated animalArray',animalArray);

/*Example: set the true value as false:  let arr = [true, 'bird', 'human', 'animal']*/

const arr = [true, 'bird', 'human', 'animal']
arr[0] = false
// console.log('update arr',arr);


/**
 *                             Modyfing array and unshift in JS
 * 
 * Modifying array by adding new items with the push and unshift in JavaScript.
 * Array don't have a fixed size, it can be dynamically modify as the item that they stores.
 * 
 * Element can be added and removed over time that array called mutable.
 * push is add to the element in the end of an array, where as unshift add to the element 
 * in the start of an array. Both method can add one or more element to the array.
 */

/* Push and unshift method */

let kitchenItems = ['fork', 'knife', 'plates'];
// console.log('Ex1:', kitchenItems);
kitchenItems.unshift("cabinets")
// console.log('Ex1: unshift::', kitchenItems);

kitchenItems.push("spoon")
// console.log('Ex1: push::', kitchenItems);


/*pop remove the last item of an array*/
kitchenItems.pop();
// console.log('Ex1: pop::', kitchenItems);

/**Exercise:
 * 
 * write a func. called dragonBallz, which takes an array parameter and retutrn array.
 * log the result of the dragonBallz func. passing into the argument the string 'Bulma' into the array
 * Back in the function, modify the array with push and unshift method, add 'san goku' and 'piccalo' in the start of an array
 * at the end of an array add 'vegeta'
 */

const dragonBallz = (array) => {
    array.unshift('san goku', 'piccalo' )
    array.push('vegeta')
    return array
}

const dragon = ['animesh', 'bunty', 'chinmay', 'dipa']
// console.log(dragonBallz(dragon));


/**
 *                              Modify array with pop and shift
 * 
 * We have remove element of an array with pop and shift.
 * 
 * pop(): it remove the last element of an array.
 * shift(): it can remove the first element of an array
 */

const outdoorCloth = ['raincoat', 'shirt', 'T-shirt', 'pant', 'gense'];
outdoorCloth.pop()
// console.log(outdoorCloth);
outdoorCloth.shift()
// console.log(outdoorCloth);


/**
 * Exercise: 
 * 
 * 1. write a func. eBook which takes an argument array.
 * 2. Log eBook in console and pass into the array of following books as string.
 * Lord of the rings, Infinite Jest, Javascript, The Good parts
 * 3. whithin the e-book fuunction, using the pop and shift methods, modify the array so that is
 * removes ONLY Infinite Jest book.
 */

const eBook = (bookArray) => {
    const pop = bookArray.pop();
    const shift = bookArray.shift();
    const shiftAgain = bookArray.shift();
    return [shift, shiftAgain, pop]
}

// console.log('eBook------->>>>>',eBook(['Lord of the rings', 'Infinite Jest', 'Javascript', 'The Good parts']));


/**
 * Splice: It is used to remove element in javascript. It is customizable way to remove items anywhere from the array.
 * It can remove multiple items in an array consecutively with starting index to ending index.
 * 
 * Splice: It takes 3 arguments.
 * 1. Starting posn. to remove an element.
 * 2. Ending posn. to consecutively remove an element.
 * 3. Replacement of element in an array with third argument
 * 
 * Splice can also be used for teh new copy of removed items.
 */

let colorArray = ['blue', 'green', 'red', 'white', 'brown', 'black'];
colorArray.splice(3,1)
// console.log(colorArray);

let numberArray = [1,2,3,4]
const newArray = numberArray.splice(2,2);
// console.log('newArray', newArray );
// console.log('numberArray', numberArray); 

/**
 * Exercise - Use Splice to decode the puzzle 

OBJ: You work for the CIA and your job is to decode an unusual communicaiton of strings
(a sequence of strings) with a hidden message using the splice method. 

The final sentence  should only contain the following sequence of indexed 
values of the INITIAL strings in the given array: 2,3,5,6,7

1. Initialize an array called jumbled with the following strings consecutively:
'unlock', 'hidden', 'the', 'cat', 'messages', 'jumped', 'over', 'the moon'  

2. You can only use the splice method to selectively decode and return the final message
logged in the console. 

BONUS Return the deleted items to a new variable called CIAConfidential and share both 
confidential decoded logs in the discord in the #datastructures channel. 

Good luck saving the world! 
 */

const CIAarray = ['unlock', 'hidden', 'the', 'cat', 'messages', 'jumped', 'over', 'the moon']

const deletedElem1 = CIAarray.splice(0,2);
const deletedElem2 = CIAarray.splice(2,1);
const CIAConfidential = [...deletedElem1, ...deletedElem2]
// console.log('CIAarray', CIAarray);
// console.log('CIAConfidential', CIAConfidential);

/**
 * Adding to Array with Splice...
 * 
 * Splice also takes 3rd argument, it allows you to swap out the presented element in an array with
 * the provided element in the 3rd argument.
 */

const fixMePlease = ['this', 'sentance', 'boken', 'piece', 'now'];
fixMePlease.splice(2,2,'is','fixed')
// console.log(fixMePlease);


/**
 * Exercise Update User Names with Splice 
1. Declare the function updateUserNames which takes an array as an argument and return 
the array.
2. Log to the console updateUserNames and append the following string literal names
to the array: 'Thomas', 'Suzie','Jessica','Jonny'
3. Back in the updaetUserNames function, update the user names of the array by replacing
'Suzie' with the new user 'Bob' using the splice method.
4. Dub yourself victorious, Apprentice level up!
 */

const updateUserNames = (array) => {
    array.splice(1,1, 'Bob')
    return array;
}

// console.log(updateUserNames(['Thomas', 'Suzie','Jessica','Jonny']));


/**
 * How to clone Array with slice method.
 * 
 * Slice: It is a method of an array which can copy array data to the new storage without modifying 
 * the original array.
 * 
 * Slice takes two argument
 * 1. take a start index of an array.
 * 2. take a end index of an array
 */

let trainingData = ['10,000', '7 steps of Javascript', '4 React Videos'];

let codingData = trainingData.slice(1,3)
// console.log('trainingData', trainingData);
// console.log('codingData', codingData);

/**
 * Exercise: Update CryptoCurrency Portfolio Data

1. Declare a function called cryptoPortfolio which returns the argument array of an array.
2. Log out cryptoPortfolio into the console passing the following crypto data as strings:
'Bitcoin', 'Ethereum', 'Solana', 'Ada', 'Chainlink' 
3. Within the crpyotPortfolio function, duplicate our user's 
crypto portfolio of only the large caps (Bitcoin and Ethereum) 
into a new array called newArray and modify the function so that it 
returns the new array instead of the original one. 
4. Share your solution in our discord in the #datastructures channel.
5. Good luck and may the defi be with you!
 */

const cryptoPortfolio = (array) => {
    const newArray = array.slice(0,2)
    return newArray
}

// console.log(cryptoPortfolio(['Bitcoin', 'Ethereum', 'Solana', 'Ada', 'Chainlink' ]));

/**
 * How to copy an array with spread operator
 */

const humanName = ['Animesh', 'Siya', 'Deepak', 'Shweta', 'Aashlesha', 'Hemalata', 'Mayur'];
const spreadArray = [...humanName]

// console.log('spreadArray',spreadArray);


/**
 * Exercise: Make multiple copies of an array with the spread Operator 
1. Declare a variable called numberofCopies and set the value to 4.
2. Create a function called makeFourCopies which takes an argument array as an array. 
3. Log into the console the function makeFourCopies passing into it the following string
data: 'gains', 'losses', 'losses'
4. Back in the makeFourCopies function, write the logic
in order to make multiple copies of the array data (
make the EXACT amount of copies as the value in numberOfCopies) into
a new array return the new array and share your solution on the discord.
Good luck!
 */

let numberofCopies = 4;

const makeFourCopies = (array) => {
    let newArray = [];
    while (numberofCopies>0) {
        newArray.push([...array])
        numberofCopies--;
    }
    return newArray

}
// console.log(makeFourCopies(['gains', 'losses', 'losses']));


/**
 * Search for Items with indexOf
 * 
 * array data can faily gets too large and complex. It can aslo change mutable with some method
 * like pop, push, etc.
 * indexOf: takes one parameter which the element you are searching, and gives it's index. If element 
 * doesn't present it will return -1.
 * It is a case sensitive.
 */

let kingsCourt = ['Knight', 'Bishops', 'Rooks', 'Pawns', 'Queen'];
// console.log(
//         'Example',
//         kingsCourt.indexOf('Rooks'), 
//         kingsCourt.indexOf('Black Rooks')
//     );


/**
 * Exercise: Search for game items and clone the kingdom!

You are working for a gaming company and your boss comes over to your desk and hands you
an array holding the game's kingdom items and asks you for help.
She asks you to check to see if 'Magic Arrows' exists in the array and if it does to make
two copies of the array into a new array for further analysis without modifying the original data. 
She also notes that if you get this right this could mean a big up in your salary... 

1. Write a function called searchAndClone which takes two arguments: array and elem.
2. Log into the console searchAndClone passing in the following data from your bosses array: 
"Throne", "Silver sword", "Magic Arrows", "Queen", "Jester", "Spooky Advisor"

3. Back in the function searchAndClone write in logic using the indexOf method to search
and see whether or not the element 'Magic Arrows' exists in the searchAndClone array argument. 
If magic arrows does exist then add conditional logic so that the function will push two
copies of the argument array into a new array and return the new array. If the magic
arrows string does not exist as an element in the argument array then return an error message
to the console stating that: the Magic Arrows are not to be found. 

4. Save the kingdom from impending doom and post your solution in the discord #datastructures
channel.

Good luck, brave Warlock! the Magic Arrows are not to be found. 
 */

const searchAndClone = (array, elem) => {
    const elePresent =  array.indexOf(elem);
    let newArr = []
    if(elePresent === -1){
        return 'the Magic Arrows are not to be found.'
    } else {
        for(let i = 0; i<2; i++) {
            newArr.push([...array])
        }
        return newArr;
    }
}

// console.log(searchAndClone(["Throne", "Silver sword", "Magic Arrows", "Queen", "Jester", "Spooky Advisor"], 'Magic Arrows'));


/**
 * Looping through an array in Javascript.
 * 
 * Javascript, offers multiple build-in methods for looping through array.
 * some of these powerful methods include: 
 * 1). map()
 * 2). forEach()
 * 3). every()
 */

/* Push each word from a string into a single array */

const convertStringToArray = (word) => {
    const array = []
    const splitArray = word.split(' ');
    for(let i = 0; i< splitArray.length; i++) {
        array.push(splitArray[i]);
    }
    return array;
}

// console.log(convertStringToArray('hi this is Animesh Kumar who is learning javascript'));


/**
 * Exercise - Chunking Arrays with Nested Loops

1. Copy the chunked array from the video description into the Exercise Solution portion
of the IDE. 

let chunked = [['a','b','c'], ['d','e','f'], ['g','h','i']];

2. Write a function called alphabet that 'unchunks' the nested arrays and returns all the string 
elements in chunked into a single array. 

3. Log the solution and share in the discord in the #datastructures channel.
 */

let chunked = [['a','b','c'], ['d','e','f'], ['g','h','i']];

const alphabet = (chunked) => {
    // return unchunks.flat(1);
    let arr = []
    for(let i = 0; i<chunked.length; i++) {
        for(let j = 0; j<chunked[i].length; j++) {
            arr.push(chunked[i][j])
        }
    }
    return arr;
}

// console.log(alphabet(chunked));

/**
 * Complex array in Javascript...
 * 
 * const deeplyNestedArray = [[[[[]]]]]
 */

const deeplyNestedArray = [
    [
        [
            'third level', 
            [
                'fourth level',
                [
                    'fifth level'
                ]
            ]
        ]
    ]
]
// console.log(deeplyNestedArray[0][0][1][1][0]);

/**
 * Exercise - Skyrim Dungeon Master - Multi-Dimensional Array

1. Declare an array called dungeonLevelSeven
2. The array should have seven nested levels.
3. On the third level the array should contain the strings Treasure and Goblins
4. On the fifth level the array should contain the strings Ghosts and Nooby Trap
5. On the sixth level the array should contain the string Easter Egg
6. On the deepest level the array should contain the string Big Boss
7. Bonus - First access the treasure and skip the goblins and then access the Easter Egg! :) 
*Share your final solution in the discord!!!
8. Good luck, brave Wizard!
 */

const dungeonLevelSeven = 
[
    [
        [
            'Treasure', 'Goblins', 
            [
                [
                    'Ghosts', 'Nooby Trap',
                    [
                        'Easter Egg', 
                        [
                            'Big Boss'
                        ]
                    ]
                ]
            ]
        ]
    ]
]

// console.log(dungeonLevelSeven[0][0][0]);
// console.log(dungeonLevelSeven[0][0][2][0][2][0]);
