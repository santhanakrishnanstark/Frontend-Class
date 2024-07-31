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

// 3. Jsonplaceholder - using async/await

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch(POST_URL)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//     });

runPostUI();


async function runPostUI() {
    try {
        // need data
        const postData = await getPostData(POST_URL);

        throw new Error("Something Changed!!!");

        // render UI

        renderPostUI(postData);
    } catch (error) {
        console.error('Error Came: ', error);

        // render fallback UI
        const pTag = document.createElement("p");
        pTag.textContent = "Network Error / No Data Available";
        document.getElementById("posts").appendChild(pTag);
    }
}


async function getPostData(URL) {
    const response = await fetch(URL);
    const postData = await response.json();

    return postData;
}

function renderPostUI(postData) {
    postData.forEach((post, index) => {
        const liTag = document.createElement("li");
        const h3Tag = document.createElement("h3");
        const pTag = document.createElement("p");

        h3Tag.textContent = post.title;
        pTag.textContent = post.body;

        liTag.appendChild(h3Tag);
        liTag.appendChild(pTag);
        document.getElementById("posts").appendChild(liTag);
    });
}