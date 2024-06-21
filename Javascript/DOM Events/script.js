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