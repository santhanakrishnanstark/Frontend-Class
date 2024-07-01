// Array => [item1, item2];

/**
 * 
 * Object => {
 *  item: 'pen',
 *  isBought: false
 * }
 * 
 */


// Array of Objects : =>  [ {} , {}, {} ]

// Object

const car = {

    // charactersitc
    name: 'Fiat',
    model: 500,
    weight: '850kg',
    color: 'white',

    // behaviour/actions

    start: () => {
        console.log('Car is Started !');
    },
    drive: () => {
        console.log('Car is Driving !');
    },
    break: () => {
        console.log('Car is activating brake !');
    },
    stop: () => {
        console.log('Car is Stopped !');
    },

    getCarInfo: function () {
        return `Car Name is ${this.name}, Model: ${this.model}`;
    }

}

car.start();

car.break();

car.stop();

console.log(`Accessing Car Name and weight: `, car.name, car['weight']);

car.boughtOn = 2017;
car['color'] = 'red';

car.fly = () => {
    console.log(`Car is flying!`);
}



console.log(`After adding boughtOn property: `, car);

car.fly();

console.log(`Car Info: `, car.getCarInfo());





// Object Methods

// 1. Object.values

console.log(`Object.values() : `, Object.values(car));

// 2. Object.keys

console.log(`Object.keys() : `, Object.keys(car));

for (const key in car) {
    const value = car[key];

    console.log(key, value);
}

// Object.keys(car).forEach((item) => {
//     console.log(item)
// })


// 3. Object.entries

console.log(`Object.entries() : `, Object.entries(car));


// Printing Object in browser

document.getElementById("objectText").textContent = car;

// to convert object in to string, => JSON.stringify(object);

document.getElementById("objectText2").textContent = JSON.stringify(car);