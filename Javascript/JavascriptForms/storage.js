const textEditor = document.getElementById("editor");

init();


function init() {

    // check if any data stored in the storage
    const data = getDataFromLocalStorage();

    textEditor.value = data;

    // add event listener to text editor
    textEditor.addEventListener("keyup", debounce((event) => {
        storeDataInLocalStorage(event.target.value);
    }, 1000));
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


function storeDataInSessionStorage(value) {
    sessionStorage.setItem("editorValue", value);
}

function getDataFromSessionStorage() {
    return sessionStorage.getItem("editorValue");
}

const historyArray = [];

function storeDataInLocalStorage(value) {
    historyArray.push(value);
    localStorage.setItem(`editorValue-${historyArray.length}`, value);
}

function getDataFromLocalStorage() {
    return localStorage.getItem("editorValue-1");
}