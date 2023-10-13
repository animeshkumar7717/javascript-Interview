/**
 * OK wow... so CONGRATULATIONS! we've covered pretty much all the key basics for arrays and objects in 
 * JavaScript up to this point! That includes, building, syntax, modifying, cloning, accessing,
 * iterating and so much more!
 * 
 * Great work going through everything and READY now you are to advance young young padawan into 
 * more complex JavaScript. 
 * 
 * Before we dive deep into algorithmic scripting let's take a look at one final exercise for 
 * you to get some practice and test your overall ability and understanding with objects thus far.
 * 
 * If you can succeed in understanding and solving the exercise then consider it your passport
 * forward. If you struggle, please review any core concepts you may find difficulty with and
 * come back once you feel newly prepared. 
 */

/**
 * Final Exercise 
  let facebookUser = {
  handle: "Krystal",
  age: 26,
  data: {
    fullname: "Krystal Ballington",
    joinDate: new Date(),
    profilePic: "httpsAWS...",
    friends: ["Bob", "Jerry", "Ashley"],
    groups: [
    "New York Squash", 
    "Spirtual Cooking", 
    "Fossil Hunting"]
  }
};

0. Copy the facebookUser object into your exercise solution

1. Write a function unfriend that can search through the 
facebook user's info (ie the facebookUser object) and dynamically remove 
a friend of choice. 

2. The function should take two arguments, the first argument being an object
and the second argument the friend the user wishes to remove. 

3. If the friend's name does not exist in the object, the function should return
an error message stating that the friend does not exist. 

4. The function should return an array of all of the facebook user's updated friends
list.

This exercise combines an overview of the basics we have been covering in this course
on objects and arrays in javaScript up to this point! 

Pass this and prove your valure for more advanced lessons to come. 

Brave, you are. Luck, may you have! let facebookUser = {
  handle: "Krystal",
  age: 26,
  data: {
    fullname: "Krystal Ballington",
    joinDate: new Date(),
    profilePic: "httpsAWS...",
    friends: ["Bob", "Jerry", "Ashley"],
    groups: [
    "New York Squash", 
    "Spirtual Cooking", 
    "Fossil Hunting"]
  }
};

0. Copy the facebookUser object into your exercise solution

1. Write a function unfriend that can search through the 
facebook user's info (ie the facebookUser object) and dynamically remove 
a friend of choice. 

2. The function should take two arguments, the first argument being an object
and the second argument the friend the user wishes to remove. 

3. If the friend's name does not exist in the object, the function should return
an error message stating that the friend does not exist. 

4. The function should return an array of all of the facebook user's updated friends
list.

This exercise combines an overview of the basics we have been covering in this course
on objects and arrays in javaScript up to this point! 

Pass this and prove your valure for more advanced lessons to come. 

Brave, you are. Luck, may you have! 
 */

let facebookUser = {
    handle: "Krystal",
    age: 26,
    data: {
      fullname: "Krystal Ballington",
      joinDate: new Date(),
      profilePic: "httpsAWS...",
      friends: ["Bob", "Jerry", "Ashley"],
      groups: [
      "New York Squash", 
      "Spirtual Cooking", 
      "Fossil Hunting"]
    }
  };

const unFriend = (obj, friend) => {
    let friendArray = obj.data.friends;
    let index = friendArray.indexOf(friend);
    if(index!==-1) {
        friendArray.splice(index,1);        
    } else {
        return `The friend ${friend} does not exist.`
    }
    return friendArray;
};

console.log(unFriend(facebookUser, 'Jerry'));
