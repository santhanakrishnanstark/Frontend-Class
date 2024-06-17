// Function

// Ways to work with function

// 1st Method

myFunctionParams('krish', 27);

function myFunction() {
    console.log("Function with function keyword: Inside My Function");
}

myFunction();

// 2nd Method - Function with params

function myFunctionParams(name, age) {
    console.log(`Hello, I'm ${name} and my age is ${age} `);
}

myFunctionParams('krish', 27);

// 3rd Method - Arrow Function - () => {}

const myArrowFn = () => {
    console.log("Arrow Function");
}

myArrowFn();

// Difference btw the Function and Arrow Function is 
// In Default/Normal Function, You can call the function before the function declarations 
// But, In Arrow Function, You can't call the function before the function declarations 

// In Default/Normal Function runs based on Hoisting concept.


// 4th Method - return function

function functionWithReturn(square) {
    return square * square;
}

const square = 10;
console.log(`Square Value of 10 is : `, functionWithReturn(square));

/** Function usage
 * 
    myFunction(functionWithReturn(10));
    myFunction(100);
 * 
 */


// 5th Method - with arguments array - only works with Normal Function
// If you are passing n number of parameters to the function.

// Spread operator (...)

function myFunctionWithArgument(...arguments) {
    console.log(`myFunctionWithArgument: ${arguments}`);
    console.log(`myFunctionWithArgument: ${arguments[1]}`);

    let total = 0;
    for (const item of arguments) {
        total += item;
    }

    console.log('Sum of the arguments : ', total)
}

myFunctionWithArgument(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 22, 34, 55, 66, 77, 5);