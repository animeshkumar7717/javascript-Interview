/**
 *  Object Constructors in JavaScript 
 * 
 * Sometimes we need a "blueprint" for creating many objects of the same "type".
 * 
 * The way to create an "object type", is to use an object constructor function.
 * 
 * The this keyword in JavaScript is the object that 'owns' the code.
 */


/** this is the object itself */
function Cyborg (first, last, age, eyes, mode) {
    this.first = first,
    this.last = last,
    this.age = age,
    this.eyes = eyes,
    this.mode = mode
}

console.log(
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Solo", 300, "auburn", true),
    new Cyborg("Hans", "Quatro", 299.999999999, "black", true)
    );



/**
 * Exercise: Uber Eats Payment Database

You are building a CMS frontend payment database for Uber Eats. 
The higherups ask you to build an object constructor to generate user object data
called userGenerator.

1. The blueprint of the object should have keys for the full name (first and last),
location, and billing.    The data should include an entire name 
(first name and last name), address, and billing information.

2. Create four new user objects with userGenerator 
with the following string information passed as arguments 
(entireName, address, billing):

user1: Lisa Simpson, Carribeans, Mastercard
user2: Michael Jordan, Chicago, Visa
user3: Bunny Foofoo, Canada, null
user4: The Dude, LA, Ethereum 

3. Store the user objects of only the users that have filled out valid billing information
(vaild billing methods can only include Visa or Ethereum) in an array payingUsersDatabase.

4. Console log a message displaying how many total users there are being
generated, how many users with valid billing there are, 
and all the data of only the users with valid billing.

5. Share your solution on the discord and break a leg! 
 */

var UserGenerator = function (entireName, location, billing) {
        this.fullName = entireName;
        this.location = location;
        this.billing = billing;
    };
    
    
    let payingUsersDatabase = [];
    let eachUserObj = [];
    let totalPaymentUsers = 0;
    
    function createNewUser(name, address, card) {
        eachUserObj.push(new UserGenerator(name, address, card));
        addNewPaymentUsers();
    }
    
    createNewUser("Lisa Simpson", "Carribeans", "Mastercard");
    createNewUser("Michael Jordan", "Chicago", "Visa");
    createNewUser("Bunny Foofoo", "Canada", null);
    createNewUser("The Dude", "LA", "Ethereum");
    
    console.log(eachUserObj[0].location);
    
    function addNewPaymentUsers() {
        let newObjData = {};
        for (let i = 0; i < eachUserObj.length; i++) {
            newObjData.name = eachUserObj[i].fullName;
            newObjData.address = eachUserObj[i].location;
            newObjData.billing = eachUserObj[i].billing;
        }
        let billingExists = newObjData.billing;
        if (billingExists)
            if (billingExists === "Visa" || billingExists === "Ethereum") {
                totalPaymentUsers++;
                return payingUsersDatabase.push(newObjData);
            }
    }
    
    console.log(
        "Exercise Solution:",
        `You currently have a total of ${eachUserObj.length} users of which
        ${totalPaymentUsers} users have valid payment methods`,
        payingUsersDatabase
    );
    
    //name, address, billing information
    