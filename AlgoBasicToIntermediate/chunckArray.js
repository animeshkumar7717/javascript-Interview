/**
 * Chuncking Arrays into Groups & Sub-group.
 * 
 * RECALL!
 * 
 * The array.slice method can extract a slice from the beginning, 
 * middle, or end of an array for whatever 
 * purposes you require, without changing the original array.
 */

/**
 * Exercise - Capture The Flag Groups of Teams

You are a working on a capture the flag style Call of Duty game
regardless whether you're into shooter types or not! :P 

Your boss comes up to you asks you to create a function that can
take an array of 6 players and divide them up evenly into 3 teams
each time containing its own sub array of two players.

1. Create an array called captureTheFlagPlayers and input the following
player string data:

["player 1", "player 2", 
"player 3", "player 4",
"player 5", "player 6"]

2. Write a function chunkPlayersIntoGroups which can take the 
captureTheFlagPlayers array as an argument and return the player data
divided into 3 even teams each containing its own sub array 
of two players each.

3. Call and log the function passing in the captureTheFlagPlayers array.

4. Share your solutions on the discord #algorithms channel! 
 */

const chunkPlayersIntoGroups = (array) => {
    let temp = [];
    const chunck = 2;
    for(let i = 0; i< array.length; i+=chunck) {
        temp.push(array.slice(i, i+chunck));
    }
    return temp;
}

const captureTheFlagPlayers = ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6"]
console.log(chunkPlayersIntoGroups(captureTheFlagPlayers));

/** Same think with while loop */

const chunkPlayersIntoGroupsPart2 = (array) => {
    let temp = [];
    const chunck = 2;
    let i = 0;
    while(i<array.length) {
        temp.push(array.slice(i, i+chunck))
        i+=chunck;
    }
    return temp;
}

const captureTheFlagPlayersPart2 = ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6"]
console.log(chunkPlayersIntoGroupsPart2(captureTheFlagPlayersPart2));