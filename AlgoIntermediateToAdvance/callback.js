/**
 * callBack: It is a function which is passed into other function's argument, which is invoked inside
 * the outer function to complete some kind of actions.
 */


// This not work here, you can try this in your browser!

// const signIn = (user) => {
//     console.log(user + ' has successfully sign in');
// }

// const signUserIn = (callback) => {
//     const name = prompt('please sign in');
//     callback(name);
// }

// signUserIn(signIn)


/**
 * Exercise - Virus Detection Algorithm - Asymmetric Arrays 

You are working client side for a successful start up company. You even have a fooseball table
in the lounge, but it doesn't even matter because you can work remotely on the beach. 
Lucky you!

Some hackers get into the client side and implant viruses into the userbase with false accounts.
You boss asks you to locate and track down wihch accounts are causing the malevolent attacks.

Using the cloud database you begin a search to isolate the accounts which do not belong and 
track down the bad actors before it's too late. 

1. Assign the usersCloud array and usersClient arrays with the following data. 

usersCloud = ['tom','susan','jordan','lucy','abraham','jose','maria'];

let usersClient = ['tom','susan', 'VIRUS', 'jordan',
'lucy', 'VIRUS', 'abraham', 'TROJAN','jose','maria'];

2. Create a function virusDetection that can search through two arrays and return a new
array of all the non equal elements in either array 
(ie. any element in one array which does not exist in the other array and vice versa.)

3. Call and log the function virusDetection 
passing in the two arrays usersCloud and usersClient 

4. Share your solution in the discord in the #algorithm channel.

Good luck and show these hackers what's up! 
 */

const virusDetection = (arr1,arr2) => {
    const virusArray = [];

    const alterVirusDetection = (usersCloud,usersClient) => {
        for(let i=0; i<usersClient.length; i++) {
            if( usersCloud.indexOf(usersClient[i]) === -1 ) {
                virusArray.push(usersClient[i])
            }
        }
    }

    alterVirusDetection(arr1, arr2);
    alterVirusDetection(arr2, arr1);
    return virusArray;
}

const usersCloud = ['tom','susan','jordan','lucy','CHROME','abraham','jose','maria'];

const usersClient = ['tom','susan', 'VIRUS', 'jordan', 'lucy', 'VIRUS', 'abraham', 'TROJAN','jose','maria', 'MALWARE'];

console.log(virusDetection(usersCloud,usersClient));