// Morning Routine

// 1. Wake Up

// 2. Bathing

// 3. Having Breakfast

// 4. Going to Office


function wakeUp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Waking Up...');
        }, 1000);
    });
}

function Bathing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Bathing done!');
        }, 4000);
    });
}

function haveBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const foodAvailable = false;

            if (foodAvailable) {
                resolve('Breakfast completed!');
            } else {
                reject('No Food! No Breakfast !');
            }
        }, 2000);
    });
}

function goToOffice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Going to Office....');
        }, 3000);
    });
}

// 2. After callback hell, the next approach is Promise
// it is used to handle async operations

// syntax:  new Promise(resolve, reject); it will either resolve (Success) or reject (Error)

// wakeUp(() => {
//     Bathing(() => {
//         haveBreakfast(() => {
//             goToOffice(() => {
//                 console.log('Morning Routine Completed!');
//             });
//         })
//     })
// });

wakeUp().then((value) => {
    console.log(value);
    return Bathing();
}).then(value => {
    console.log(value);
    return haveBreakfast();
}).then(value => {
    console.log(value);
    return goToOffice();
}).then(value => {
    console.log(value);
    doneMorningRoutine();
}).catch(error => console.log(error));


function doneMorningRoutine() {
    console.log('Morning Routine Completed!')
}