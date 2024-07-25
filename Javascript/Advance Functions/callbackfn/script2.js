// function orderPizza(type, name, callback) {
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function () {
//         let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
//         callback(msg);
//     }, 3000);

//     console.log('Order Successful!!!');
// }


// orderPizza('Veg', 'Cheese Barbeque', function (message) {
//     console.log(message);
// });

// const makeBurger = () => {
//     const beef = getBeef();
//     const patty = cookBeef(beef);
//     const buns = getBuns();
//     const burger = putBeefBetweenBuns(buns, beef);
//     return burger;
// };

// const burger = makeBurger();
// console.log('burger is ready! ', burger);


// Callback hell

const makeBurger = nextStep => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(function (buns) {
                putBeefBetweenBuns(buns, cookedBeef, function (burger) {
                    nextStep(burger, () => {
                        exitShop();
                    });
                });
            });
        });
    });
};

function exitShop() {
    console.log('exitShop')
}

// Example implementations for the callback functions

function getBeef(callback) {
    // Simulate an asynchronous operation to get beef
    setTimeout(() => {
        const beef = 'raw beef';
        console.log('Got beef:', beef);
        callback(beef);
    }, 1000);
}

function cookBeef(beef, callback) {
    // Simulate an asynchronous operation to cook beef
    setTimeout(() => {
        const cookedBeef = 'cooking the ' + beef;
        console.log('Cooked beef:', cookedBeef);
        callback(cookedBeef);
    }, 2000);
}

function getBuns(callback) {
    // Simulate an asynchronous operation to get buns
    setTimeout(() => {
        const buns = 'buns';
        console.log('Got buns:', buns);
        callback(buns);
    }, 500);
}

function putBeefBetweenBuns(buns, beef, callback) {
    // Simulate an asynchronous operation to put beef between buns
    setTimeout(() => {
        const burger = `Burger with ${beef} and ${buns}`;
        console.log('Made burger:', burger);
        callback(burger);
    }, 1000);
}

// Usage
makeBurger((burger, cb) => {
    console.log('Final result:', burger);
    cb();
});