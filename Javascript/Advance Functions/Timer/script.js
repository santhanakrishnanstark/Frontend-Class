const timerInput = document.getElementById("timer");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");


let timerIntervalID = null;
let currentTimerValue = 0;

start.addEventListener("click", () => {
    if (currentTimerValue === 0) {
        const value = timerInput.value;
        currentTimerValue = value;
    }

    startTimer();
});

pause.addEventListener("click", () => {
    clearInterval(timerIntervalID);
});

reset.addEventListener("click", () => {

});


function startTimer() {
    timerIntervalID = setInterval(runCountdown, 1000);
}

function runCountdown() {
    const value = currentTimerValue--;
    if (value) {
        document.getElementById("timerCount").textContent = value;
    } else {
        document.getElementById("timerCount").textContent = 'TIMES UP!!!';
        clearInterval(timerIntervalID);
    }
}