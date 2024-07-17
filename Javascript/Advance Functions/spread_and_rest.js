// Rest Operator => ...

function sum(...args) {
    console.log('rest of arguments: ', args);



    // Method 1
    /**
        let sum = 0;
     
        for (let i = 0; i < args.length; i++) {
            const element = args[i];
            sum += element;
        }
     */

    // Method 2 Reduce fn

    const sum = args.reduce((total, currentValue) => {
        return total + currentValue
    }, 0);

    return sum;
}


console.log('Total Sum: ', sum(5, 15, 20, 25, 30, 35, 40, 45, 50, 55));


// Destructuring

const profile = ["Oluwatobi", "Sofela", "codesweetly.com", '34534534534', 'New York'];

const [firstName, lastName, website, ...rest] = profile;

console.log('firstName: ', firstName);
console.log('lastName: ', lastName);
console.log('Website: ', website);
console.log('Rest of Profile: ', rest);


const person = {
    firstName: "John",
    lastName: "Doe",
    website: "johndoe.com",
    mobile: '43534534',
    city: 'canada'
};

const {
    firstName: fName,
    lastName: lName,
    website: web,
    ...restPersonData
} = person;

console.log('fName: ', fName);
console.log('lName: ', lName);
console.log('web: ', web);
console.log('restPersonData: ', restPersonData);



// Spread Operator (...) => opposite to rest

// it will expand the array or object to make it as an individual item

//  Before Spread => ["Oluwatobi", "Sofela", "codesweetly.com", '34534534534', 'New York'];
//  After Spread  => "Oluwatobi", "Sofela", "codesweetly.com", '34534534534', 'New York'

console.log('person with Spread: ', ...profile);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const totalArrayValues = [...array1, ...array2, 7, 8, 9];

console.log('Total Array of array1 + array2 ', totalArrayValues);