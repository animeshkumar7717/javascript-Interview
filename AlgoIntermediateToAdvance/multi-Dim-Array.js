/**
 * Exercise: Battle Royale Game - Pairing Elements in Multi Dimensional Arrays

You are working on a feature for a game: 'Battle Royale Mode'. When 
the players initially spawn into the arena, depending on their class, they
are given special starting items. 

The Knight class is given 'Sword of Power' whereas the Wizard Class is 
given the 'Staff of Infernal Blasts' and finally the Thief Class is g
iven the 'Invisibility Dagger'.

IE:

"Knight Class" pairs with 'Sword of Power' 
"Wizard Class" pairs with 'Staff of Infernal Blasts'
'Thief Class' pairs with 'Invisibility Dagger' 

For the purposes of simplifying the code structure, Knight Class is 
denoted by 'K', Wizard Class by 'C' and Thief Class by 'T'

1. Write a function spawnItems which takes a string as an argument
and will match the missing items to the provided player attributes.

2. Return a multi dimensinoal array where the character classes and 
its item pairs are paired up in an array, 
and all the arrays are grouped into one encapsulating array.

IE: 'K' should yield = [['Kight Class', 'Sword of Power']]

3. Call and log the function passing in the argument string 'KWT'

4. Share your solution in the #algorithm channel in the discord! 

Good luck and may the schwartz be with you!
 */

const spawnItems = (str) => {
    const finalArray = []
    const arr = str.split('');
    const knightArray = ["Knight Class" , 'Sword of Power' ];
    const WizardArray = ["Wizard Class" ,'Staff of Infernal Blasts'];
    const ThiefArray = ['Thief Class' , 'Invisibility Dagger' ]
    for(let i=0;i <arr.length; i++) {
        if(arr[i] === 'K') {
            finalArray.push(knightArray);
        }
        else if(arr[i] === 'W') {
            finalArray.push(WizardArray);
        }
        else if(arr[i] === 'T') {
            finalArray.push(ThiefArray)
        }
    }
    // console.log(arr);
    return finalArray;

}

console.log("Exercise Solution I", spawnItems('KWT'));


/** Another way callback */

function spawnedItems2(str) {
    let connectedElems = []
  
      function matchPairs(elem) {
        switch (elem) {
          case 'K':
          connectedElems.push(["Knight Class", "Sword of Power"]);
          break;
          case 'W':
              connectedElems.push(["Wizard Class", "Staff of Infernal Blasts"]);
          break;
          case 'T':
          connectedElems.push(["Thief Class", "Invisibility Dagger"]);
          break;
          default: console.log('Battle Royale item pairing not found')
        }
      }
  
      for(let i = 0; i < str.length; i++) {
        matchPairs(str[i]);
      }
  
      return connectedElems;
  }
  
  console.log("Exercise Solution II", spawnedItems2("KWT"));