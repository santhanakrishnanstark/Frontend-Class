// Morning Routine

// 1. Wake Up

// 2. Bathing

// 3. Having Breakfast

// 4. Going to Office


function wakeUp(next) {
    setTimeout(() => {
        console.log('Waking Up...');
        next();
    }, 1000);
}

function Bathing(next) {
    setTimeout(() => {
        console.log('Bathing done!');
        next();
    }, 4000);
}

function haveBreakfast(next) {
    setTimeout(() => {
        console.log('Breakfast completed!');
        next();
    }, 2000);
}

function goToOffice(next) {
    setTimeout(() => {
        console.log('Going to Office....');
        next();
    }, 3000);
}


// wakeUp();
// Bathing();
// haveBreakfast();
// goToOffice();

// console.log('Morning Routine Completed!');


// 1. Old Fashioned way to solve this asyncronize task -callback hell

wakeUp(() => {
    Bathing(() => {
        haveBreakfast(() => {
            goToOffice(() => {
                console.log('Morning Routine Completed!');
            });
        })
    })
});


/*

How to pass function with parameters 

wakeUp(Bathing); // here you are passing "Bathing" to wakup function.

wakeUp(Bathing()); // here you are passing "Bathing" and calling the "Bathing" immediately which will cause issue.

wakeUp(() => {
    Bathing(value)
}) // here the inside "Bathing" function won't call even if used () brackets. because it's inside another function.


*/