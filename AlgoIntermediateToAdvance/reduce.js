/**
 * Reduce is a method is very difficult to understand especially with many explaination that can be found on
 * web. There are many benifits for reduce as it is often used in state management. (think redux)
 * 
 * Reduce is basically a loop - but it's a loop with memory built in -recall basically arthematic: we sum
 * number up from left to right - 1 + 2 + 3 = 6
 * 
 * Reduce(signature): 
 * arr.reduce(callback, initialValue)
 * 
 */

const num = [1,2,3,4];

const orders = [
    { id: 1, total: 12 },
    { id: 2, total: 22 },
    { id: 3, total: 32 }
  ];

  console.log(
    num.reduce((acc, curr) => {
        return acc+curr
    })
);

/**---------------------------------------------------------------------- */
  let total = 0;
  for(let i=0; i<orders.length; i++) {
      total += orders[i].total;
  }
  console.log('total', total);

  console.log('Total Reduce', 
    orders.reduce((acc, curr) => {
        return acc + curr.total
    }, 0)
  );

/**---------------------------------------------------------------------- */

/**
 * Exercise - Sort Out Facebook Group Users by Location 

You are working at Facebook and you need to write an algorithm in order to 
filter through two different meetup facebookGroups
so that the users can be organized by their respective countries to help organize
future meetups. 

Given the following two arrays of object data: 

facebookGroup1 = [
  { name: "cassandra", location: "sweden" },
  { name: "tommy", location: "usa" },
  { name: "eloise", location: "jamaica" },
  { name: "gunita", location: "india" }
];

facebookGroup2 = [
  { name: "voytek", location: "poland" },
  { name: "senja", location: "sweden" },
  { name: "george", location: "sweden" },
  { name: "batman", location: "jamaica" }
];

1. Write a function meetupByLocation which ONLY takes a location as an argument
and returns a new flattened array of all the users object data
 filtered out by their location. IE. If the argument is 'sweden' then the expected
 output should be: 
 [
 { name: "cassandra", location: "sweden" },
 { name: "senja", location: "sweden" },
 { name: "george", location: "sweden" }
 ] 

2. Log and console your function and pass in 'jamaica' for the location argument.

Share your solutions in the discord and best of luck!!
 */



const facebookGroup1 = [
    { name: "cassandra", location: "sweden" },
    { name: "tommy", location: "usa" },
    { name: "eloise", location: "jamaica" },
    { name: "gunita", location: "india" }
  ];
  
const facebookGroup2 = [
    { name: "voytek", location: "poland" },
    { name: "senja", location: "sweden" },
    { name: "george", location: "sweden" },
    { name: "batman", location: "jamaica" }
  ];


function meetupByLocation(_location) {
    let flattenedArr;
  
    let args = Array.prototype.slice.call(arguments, 1);
  
    flattenedArr = args.reduce((accum, item) => {
      return accum.concat(item);
    });
      return flattenedArr.filter((i) => {
      return i.location === _location;
    });
  }
  
  console.log(
    "Exercise Solution I",
    meetupByLocation("jamaica", facebookGroup1, facebookGroup2)
  );

/** ------------------------------ solution 2 ------------------------------- */

function meetupByLocation2(_location) {
    let finalArr = [];
    let args = Array.prototype.slice.call(arguments, 1);
  
    for(let i = 0; i < args.length; i++) {
       let arrArgs = args[i];
  
    for(let j = 0; j < arrArgs.length; j++) {
       let innerVal = arrArgs[j];
       
       if(innerVal.location === _location) {
        finalArr.push(innerVal)
       }
      }
    }
  return finalArr;
  }

  console.log(
    "Exercise Solution II",
    meetupByLocation2("sweden", facebookGroup1, facebookGroup2)
  );