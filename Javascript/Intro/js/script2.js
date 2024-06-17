// Variables

/**
 * 1. let
 * 2. const
 */

// Datatypes

// String, Number, Array, Object, Undefined, Null, Date

// Operators

// And (&&) OR (||)  Not (!) 

// control statements  -  to decide what to do with the code

let num = 50;

if (num < 10) {
    console.log('num is smaller then 10')
} else {
    console.log('num is bigger then 10')
}

// Nested If statement

//EG: Problem - find the biggest of 3 numbers
let j, k, l;

j = 10;
k = 50;
l = 30;

if (j > k && j > l) {
    console.log('J is Greater');
} else if (k > j && k > l) {
    console.log('K is Greater');
} else {
    console.log('L is Greater');
}

// OR Operator Example

const person = {
    age: 20,
    isGraduate: false
}

if (person.age >= 18 || person.isGraduate) {
    // this code will run only if the person should be 18 or more in age (OR) the person should be graduate.

    console.log('This Person is Eligible! age: ', person.age, 'Graduate: ', person.isGraduate);
}

// Switch Statement

// syntax

/**
 * switch(input) {
 *  case input: 
 *       // code here will execute   
 *  break; 
 * case input: 
 *       // code here will execute   
 *  break; 
 * case input: 
 *       // code here will execute   
 *  break; 
 *  
 * }
 * 
 */


const month = 'FEB';


switch (month) {
    case 'JAN':
        console.log('*************** JAN Month is selected');
        break;
    case 'FEB':
        console.log('*************** FEB Month is selected');
        break;
    case 'MAR':
        console.log('*************** MAR Month is selected');
        break;
    case 'APR':
        console.log('*************** APR Month is selected');
        break;

    default:
        console.log('************** Default Switch Case : The Month is invalid');
}


// Array

// Syntax: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myarray, 'myarray Length: ', myarray.length);

// print or take element from an array
console.log('Getting 5th index value: ', myarray[5]);

// get the first item from array
console.log('Getting 1st item: ', myarray[0]);

// get the last item from array
console.log('Getting last item: ', myarray[myarray.length - 1]);

// Update the array item by index
myarray[5] = 'New Fifty item';

// Looping - loop through each item in an array or object

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log('For Loop myarray: ', element);
}

// Example 2

for (let index = 0; index < 5; index++) {
    console.log('******************** For loop demo ', index)
}

// Loop Through Object

let person2 = {
    name: 'John',
    age: 25,
    city: 'bangalore',
    isSingle: true,
    course: {
        ug: 'Bsc',
        pg: 'Msc'
    },

    walk() {
        console.log("person is walking")
    }
}

for (const key in person2) {
    console.log('***** FOR Object Loop: ', key, person2[key]);
}

for (const item of myarray) {
    console.log('****** For Of: ', item);
}


// while loop

let number = 0;

while (number < 10) {
    console.log('**** While Loop with the number: ', number);
    number++;
}

// Need to Take

/**
 * 
 * 1. Array methods
 * 2. Object methods
 * 
 */