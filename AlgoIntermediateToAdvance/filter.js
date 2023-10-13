/**
 * FILTER
 * A very useful tool for grouping for the specific values is the filter method in Javascript.
 * 
 * The filter method returns an array with element which pass the test provided by the given function.
 * 
 * filter method with arrow function.
 * 1. filter(item => {// checks some truth})
 * 2. filter((item, index) => {// checks some truth})
 * 3. filter((item, index, array) => {// checks some truth})
 * 
 * filter method with callback function.
 * 1. filter(callback func)
 * 2.  filter(callback func, thisArg)
 */

const array = ['Animesh', 'Soamnath', 'Sashi', 'Naagnath', 'Karan', 'Vaibhav']

const filterArray = array.filter((name) => name.length>7);

// console.log('Arrow fnc: ', filterArray);


/** Filter with Call-Back Function */
function callBack(word) {
    if(word.length>7) {
        return true
    } else {
        return false;
    }
}

const callBackFilterArray = array.filter(callBack);
// console.log('call-back fnc: ',,callBackFilterArray);

/**
 * Exercise - Group Objects by Values in JavaScript

You are moved into the basement of a company and asked to do some data entry work. 

Yikes.

Since you have coding skills, you decide to write some algorithms instead to do the
work for you so you can get out of the basement and get an office with a window and
a view. 

1. Given the following array containing objects of company employee information:

employees = [
  {name: "Tony Stark", department: "Accounting"},
  {name: "Peter Parker", department: "Sushi Chef"},
  {name: "Bruce Wayne", department: "Accounting"},
  {name: "Clark Kent", department: "Mail Room"}
];

1. Write a function called groupingObjectsByValues which takes one array as an argument
called data and one object as an argument called department. 

2. The function must check through all the employee information in the data argument
and return into a new global array all the object data of only the accountant employees
including their name and department information. 

3. Call and log the groupingObjectsByValues passing in the employees array as the first
argument and select the department for grouping accordingly inputted as the s
econd object argument

Good luck getting out of that basement! 
 */


// let globalArray = [];
// const groupingObjectsByValues = (data, department) => {

//     const array = data.filter((data) => data.department === department.department)
//     globalArray = [...array]
//     return globalArray
// }

const employees = [
    {name: "Tony Stark", department: "Accounting"},
    {name: "Peter Parker", department: "Sushi Chef"},
    {name: "Bruce Wayne", department: "Accounting"},
    {name: "Clark Kent", department: "Mail Room"}
  ];


// console.log(groupingObjectsByValues(employees, {department: "Accounting"} ));


/** With the callback and filter: Approch 2 */

let globalVal = []
function callBackgroupingObjectsByValues (data, department) {
    let arrayValue = Object.values(department);
    function callBack(obj) {
        for(let i=0; i<=arrayValue.length; i++) {
            if(Object.values(obj).indexOf(arrayValue[i])>-1) {
                return globalVal.push(obj);
            }
        }
        return false;
    }
    return data.filter(callBack);
}

console.log(callBackgroupingObjectsByValues(employees, {department: "Accounting"} ));

