// Fetch API

/**
 * 
 * Syntax: 
 * 
 *  fetch(url).then(response => console.log(response)).catch(error => console.log(error));
 * 
 */


// 1. Using https://jsonplaceholder.typicode.com/

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json));


// 2. The Meal DB

const CATEGORY_URL = 'https://themealdb.com/api/json/v1/1/categories.php';

fetch(CATEGORY_URL)
    .then(response => response.json())
    .then(json => {
        renderUI(json);
    });

function renderUI(data) {

    data.categories.map((category) => {
        const imgEl = document.createElement('img');
        imgEl.src = category.strCategoryThumb;
        imgEl.width = 300;

        document.querySelector('.container').appendChild(imgEl);
    });
}