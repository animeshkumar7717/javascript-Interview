/**
 *                              Objects in Jaavscript
 * Object = {key: value} pair
 * In JavaScript, an object is a standalone entity, with properties and type. 
 * Compare it with a car, for example. A car is an object, with properties. 
 * A car has a color, a design, engine, a material it is made of, etc. 
 * The same way, JavaScript objects can have properties, which define their characteristics.
 */

const instagramUser = {
    handle: '@coolWater47',
    photos: ['cat', 'family', 'car'],
    bussinessAccount: false
}

// console.log('instagramUser', instagramUser);

/** we can add properties in object with dot notation and bracket notation */

instagramUser.location = 'pune'
instagramUser['followers'] = 6          /*if it not declare, we have to use it in the string 'followers'*/

// console.log('instagramUser', instagramUser);

/**
 * Build an Uber app customer javascript object datatable.

1. Write an object called uberCustomer
2. The object needs to take a minimum of 5 properties with values.
3. The properties and values can be whatever you think would be most appropriate
as long as the values are not blank.
4. At least two of the properties and values should be added with either bracket
or dot notation. 
5. Share your solution with the discord community! 
 */

let uberCustomer = {
    name: 'Sachine Jha',
    location: 'Mumbai',
    'Total Ride': 57
}

uberCustomer.creaditCard = 'MasterCard';
uberCustomer['rating']  =   4.3;

// console.log('uberCustomer',uberCustomer);


/**
 * Modifying and Accessing Object in JavaScript.
 * let deepObject = {
 *  id: 463872,
 *  amount: 89,
 *  time = new Date()
 * }
 */

 let deepObject = {
    id: 463872,
    amount: 89,
    time: new Date(),
    geoLocation: {
        city: 'Pune',
        country: 'India'
    }
   }

/*update exisiting properties of deepObject */

deepObject.geoLocation.city = 'Mumbai'

/* storing the value in a variable */
const objectCountry = deepObject.geoLocation.country
// console.log(deepObject);
// console.log(objectCountry);

/**
 * Accessing Weather API Data Structures

You are building a weather application and need to access and modify a copy of the API weather data.

1. Copy a real world Weather API data structure (taken from OpenWeatherMap) under exercise solution
from the description of this video.

2. Assign the weather data to an object called weatherAPI

3. Declare a function checkWeather which can dynamically return humidity and either the temperature, 
min temperature in an object.

4. Log your results and celebrate good times! 

Good luck and fair weather to you. 
 */

const weatherAPI = {
    coord: {
      lon: -122.08,
      lat: 37.39
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d"
      }
    ],
    base: "stations",
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100
    },
    visibility: 16093,
    wind: {
      speed: 1.5,
      deg: 350
    },
    clouds: {
      all: 1
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200
  };

const checkWeather = (weather) => {
    let temp = weatherAPI.main[weather];
    let humidity = weatherAPI.main['humidity'];

    const obj = {
        temp,
        humidity
    }

    return obj
}
// console.log(checkWeather('temp'));

/**
 * Checking Object Properties in Javascript
 * hasOwn: It will return true, if property exists in the same object else return false.
 */

const restaurant = {
    salad: 'romaine',
    burger: true
}
// console.log('Ex1: ', 'burger' in restaurant);       /* without using object method */
// console.log('Ex2: ',restaurant.hasOwnProperty('burger'));

/**
 * Exercise: Fix a Bug for A Medical Company's Data 

You work at a medical company and you've been getting this weird bug 
where the data property 'fever', of whether a patient has a fever 
has been oddly and mistakenly replaced with the property 'shoes'.

const medicalData = {
  perscriptions: true,
  weight: 156,
  height: 508,
  shoes: false
};

Your boss says he spoke with the doctors and you need to fix this confusing information
ASAP so as not to distract the doctors from their hard work.

1. Write a function cleanUp which will check whether an object contains the property
shoes and delete it if it does. Additionally, create and assign the value of the 
property shoes to a new property fever. 

2. Log out the solution and share it with the discord! :)

The medical communnity is counting on you! ;) Good luck.`;
 */

const medicalData = {
    perscriptions: true,
    weight: 156,
    height: 508,
    shoes: false
  };

const fixBug = (obj) => {
    const checkData = obj.hasOwnProperty('shoes');
    if(checkData) {
        obj.fever = obj.shoes;
        delete obj.shoes;
        return obj;
    }
    return;
}

// console.log(fixBug('Exercise', medicalData));

/**
 * Itterate Object with for...in statement
 * 
 * The for...in loop: Iterates all over enumerable properties of an object that are keyed by string, 
 * including inheritated enumerable properties.
 */

let npc = {
    character: "knight", 
    weapon: "enhance long sword",
    beard: true
}

for(let attribute in npc) {
    // console.log('------------------------');
    // console.log('Ex1 keys: ', attribute);
    // console.log('Ex1 value: ', npc[attribute]);
}

/**
 * Exercise: Login Iteration Calculator 

Given the following object of login information:

let logins = {
  week1: true,
  week2: false,
  week3: true,
  week4: true,
  week5: true
};

1. Write a function which can calculate and return the total number of logins 
using a for...in statement from this given object. 

And that's all she wrote, folks!
 */

let logins = {
    week1: true,
    week2: false,
    week3: true,
    week4: true,
    week5: true,
  };

// for(let week in logins) {
//     console.log(week.length);
// }

function calculate(obj) {
    let count = 0;
    // const arr = Object.keys(obj)
    // return arr.length
    for(let week in obj) {
        if(obj[week] === true) {
            count++;
        }
    }
    return count;
}

// console.log(calculate(logins));

/**
 * What is Object.keys in Javascript storing keys into array with javascript.
 */

const language = {
    french: true,
    hindi: true,
    english: true,
    spanish: false,
    german: true,
    rusian: false,
    sanskrit: true
}

console.log('Ex1: keys', Object.keys(language));