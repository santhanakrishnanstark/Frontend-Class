const clickBtn = document.getElementById("clickBtn");

// clickBtn.addEventListener("click", function (event) {
//     console.log('Button CLicked!')
// });

// clickBtn.addEventListener("click", (event) => {});

clickBtn.addEventListener("click", handleButtonClick);


function handleButtonClick(event) {
    console.log('Button CLicked! from separate function : ', event.target);
    event.target.textContent = "Button is Clicked !!!";
    event.target.disabled = true;
}

// Mouse Move Event

document.getElementsByTagName("body")[0].addEventListener('click', (event) => {
    console.log(event, event.clientY);

    const ball = document.createElement("span");
    ball.classList.add("ball");

    ball.style.setProperty('--ballX', event.offsetX + 'px');
    ball.style.setProperty('--ballY', event.offsetY + 'px');

    // Other ways to update css values in runtime
    // ball.style.transform = `translate(calc(${event.offsetX}px - 40%), calc(${event.offsetY}px - 40%))`;

    document.querySelector("body").appendChild(ball);

});

document.getElementsByTagName("body")[0].addEventListener('mousemove', (event) => {

    const cursor = document.querySelector("#cursor");

    // cursor.style.top = event.clientY + 'px';
    // cursor.style.left = event.clientX + 'px';

    // better way
    cursor.style.setProperty('--cursorX', event.clientX + 'px');
    cursor.style.setProperty('--cursorY', event.clientY + 'px');

});