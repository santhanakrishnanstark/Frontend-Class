const makeBurger = () => {
    getBeef()
        .then(beef => cookBeef(beef))
        .then(cookedBeef => getBuns().then(buns => putBeefBetweenBuns(buns, cookedBeef)))
        .then(burger => nextStep(burger))
        .catch(error => console.error('Error:', error));
};

// Example implementations for the functions returning Promises

function getBeef() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const beef = 'raw beef';
            console.log('Got beef:', beef);
            resolve(beef);
        }, 1000);
    });
}

function cookBeef(beef) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cookedBeef = 'cooking the ' + beef;
            console.log('Cooked beef:', cookedBeef);
            resolve(cookedBeef);
        }, 2000);
    });
}

function getBuns() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const buns = 'buns';
            console.log('Got buns:', buns);
            resolve(buns);
        }, 500);
    });
}

function putBeefBetweenBuns(buns, beef) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burger = `Burger with ${beef} and ${buns}`;
            console.log('Made burger:', burger);
            resolve(burger);
        }, 1000);
    });
}

// Usage
const nextStep = burger => {
    console.log('Final result:', burger);
};

makeBurger();