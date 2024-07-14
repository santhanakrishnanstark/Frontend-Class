// Scheduling: setTimeout and SetInterval


/**
 * setTimeout - allows to run a function once after the interval of specified time.
 * setInterval - allows to run a function repeatedly at specified time.
 */


const clock = document.getElementById("clock");

let clockId = null;

function runClock() {
    clockId = setInterval(() => {
        clock.textContent = new Date();
        // clock.textContent = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }, 1000);
}

function startClock() {
    runClock();
}

function stopClock() {
    clearInterval(clockId);
}

startClock();


// setTimeout Eg

let timeoutID = null;

function startTimeoutCode() {
    setTimeout(() => {
        console.log('*********** Settimeout is called! after 2s');
    }, 2000);

    setTimeout(() => {
        console.log('*********** Settimeout is called! after 4s');
        clearTimeout(timeoutID);
        console.log('*********** Settimeout is cleared for 3rd timeout Fns');
    }, 4000);

    timeoutID = setTimeout(() => {
        console.log('*********** Settimeout is called! after 6s');
    }, 6000);
}

startTimeoutCode();