// Object - combines with behaviour and characteristic/property

let person = {
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

// Array

const cars = ["Saab", "Volvo", "BMW"];


// Functions

function myFunction() {
    console.log('Inside My Function')
}


// calling the created function
myFunction();


person.walk();