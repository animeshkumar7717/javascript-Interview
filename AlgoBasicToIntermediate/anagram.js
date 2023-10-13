/**
 * Anagram: Decoding Mutations in an array.
 * 
 * Anagram: cinema - iceman
 * rearrange iceman to cinema - iceman - cinema
 * 
 * What if we had an array of two strings that held the exact 
 * same values except in a different order? How could we go about verifying whether
 * they actually contained the same values or not programmatically?
 * 
 * IE: 1.'hello', 'olleh'
 * Expected: true
 *     2. 'word', 'friend'
 * Expected: false
 */

/**
 * Exercise - Write A Program to Solve Anagram Puzzles 

Someone stops you on the street and says, 'hey you! Can you please help me!'

Given the following Comparison List: 

1. 'dynamite' – 'mayitend'	
2. 'Statue of Liberty' – 'Sticky Bird free'
3. 'eleven plus two' – 'twelve plus one'	
4. 'dragon king' - 'going Darn'
5. 'the Morse Code' – 'here come dots'
6. 'the nudist colony' – 'no untidy clothes'

1. Create 6 arrays which contain two strings each. The first string in the array 
should be the first anagram string and the second string should be the second anagram string we are comparing.
IE: array1 = ['dynamite', 'mayitend'] 

2. Write a function which can determine whether the following phrase comparisons
are anagrams or not. If they are anagrams the function should return true
otherwise the function should return false!

*Be mindful to not add or change any spaces between phrases as we are not looking
at regex for this example and copy the strings in the description exactly as is.

Please share your solutions in the discord along with only the anagrams that are 
actually anagrams. 


1. 'dynamite' – 'mayitend'	
2. 'Statue of Liberty' – 'Sticky Bird free'
3. 'eleven plus two' – 'twelve plus one'	
4. 'dragon king' - 'going Darn'
5. 'the Morse Code' – 'here come dots'
6. 'the nudist colony' – 'no untidy clothes'
 */

const anagram = (array) => {
    const Firstndex = array[0].toLowerCase();
    const secondIndex = array[1].toLowerCase();
    for(let i =0; i <secondIndex.length; i++) {
        if(Firstndex.indexOf(secondIndex[i]) === -1) {
            return false;
        }
        return true;
    }
}

const array = ['dynamite', 'mayitend']
console.log(anagram(array));


/** Another way to solve the same problem... */

const anagramSecond = (array) => {
    let arr1 = array[0].split('')
    let arr2 = array[1].split('')

    let str1 =  arr1.sort().join("").toLowerCase();
    let str2 = arr2.sort().join("").toLowerCase();

    if(str1 === str2) return true;
    else return false;
}

const array = ['dynamites', 'mayitend']
console.log(anagramSecond(array));
