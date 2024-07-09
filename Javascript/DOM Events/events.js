// events


// 1. focus and blur

document.querySelectorAll(".box").forEach(el => {
    el.addEventListener("focus", handleBoxFocus);
    el.addEventListener("blur", handleBoxBlur);
    el.addEventListener("dblclick", handleDblClick);

    el.addEventListener("mouseover", handleMouseOver);
    el.addEventListener("mouseout", handleMouseOut);
});


function handleBoxFocus(event) {
    console.log('Focus on Box: ', event.target);
    event.target.classList.add("focus");
}

function handleBoxBlur(event) {
    console.log('Blur on Box: ', event.target);
    event.target.classList.remove("focus");
}

function handleDblClick(event) {
    console.log('Double Click on Box: ', event.target);
    event.target.style.backgroundColor = "red";
}

function handleMouseOver(event) {
    console.log('MouseOver on Box: ', event.target);
}

function handleMouseOut(event) {
    console.log('MouseOut on Box: ', event.target);
}