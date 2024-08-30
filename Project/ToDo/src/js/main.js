// TODO App

// Global Variables / State

let todoList = [];
let selectedTodoItems = [];

const todoInput = document.getElementById("todoInput");
const createTaskBtn = document.getElementById("todo-button");
const todoListContainer = document.getElementById("todo-list-container");

init();


function init() {

    // Bind event to Todo Form 
    todoFormEventBinding();

    // Check for Data in Local Storage and If data is availabel then update the global todoList
    checkLocalStorage();

}


function todoFormEventBinding() {
    createTaskBtn.addEventListener("click", addTodo);
    todoInput.addEventListener("keyup", (e) => {
        if (e.code === "Enter") {
            addTodo();
        }
    })
}

function addTodo() {
    if (todoInput.value) {
        const todoItem = {
            id: Date.now(),
            todoText: todoInput.value,
            createdAt: new Date().toLocaleString(),
            isCompleted: false
        }

        todoList.push(todoItem);

        // Every time new Todo Item is added then render the Todo item UI 
        renderTodoItem(todoItem);

        // clear the Form
        todoInput.value = "";

        // Save todo into LocalStorage
        localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    }
}

function renderTodoItem(todoItem) {

    const liTag = document.createElement("li");
    liTag.classList.add("todo-item");

    if (todoItem.isCompleted) {
        liTag.classList.add("completed");
    }

    const todoItemHTML = getTodoItemHTML(todoItem);

    liTag.innerHTML = todoItemHTML;

    todoListContainer.appendChild(liTag);
}

function getTodoItemHTML(todoItem) {
    return `
        <p class="todo-check">
            ${todoItem.isCompleted
            ? `<input type="checkbox" name="todo-check" id="todo-check-${todoItem.id}" checked disabled>`
            : `<input type="checkbox" name="todo-check" id="todo-check-${todoItem.id}" onchange="handleCheckbox(event, ${todoItem.id})">`
        }
        </p>
        <div class="todo-content">
            <button class="todo-menu-btn icon-prefix dotted-menu-icon" onclick="toggleMenu(event)"></button>
            <ul class="todo-menu-list">
                <li><a href="#" class="todo-menu icon-prefix edit-icon" onclick="handleEditMode(event,  ${todoItem.id})">Edit</a></li>
                <li><a href="#" class="todo-menu icon-prefix delete-icon" onclick="handleDelete(event,  ${todoItem.id})">Delete</a></li>
            </ul>
            <p class="todo-title"><span>${todoItem.todoText}</span></p>
            <p class="todo-created-date">Created at: ${todoItem.createdAt}</p>

            ${getTodoItemStatus(todoItem.isCompleted)}

            <p class="todo-action-btn">
                <button class="button button-primary button-primary-outline icon-prefix mark-icon ${todoItem.isCompleted ? 'completed' : ''}" onClick="markTodoAsComplete(event, ${todoItem.id})">
                    ${todoItem.isCompleted ? "Undo Completed" : "Mark Complete"}
                </button>
            </p>
        </div>
    `;
}

function toggleMenu(event) {
    const menuList = event.target.nextElementSibling;
    if (menuList.classList.contains("show")) {
        menuList.classList.remove("show");
    } else {
        menuList.classList.add("show");
    }
}

function handleCheckbox(event, id) {
    const checkboxState = event.target.checked;

    const index = todoList.findIndex(item => item.id === id);

    if (checkboxState) {
        selectedTodoItems.push(todoList[index]);
    } else {
        const selectedItemIndex = selectedTodoItems.findIndex(item => item.id === id);
        selectedTodoItems.splice(selectedItemIndex, 1);
    }

    console.log('**** Selected Objects: ', selectedTodoItems);

    if (selectedTodoItems.length > 1) {
        console.log('************ Show Mark All Complted Button')
    }
}

function handleEditMode(event, id) {
    event.preventDefault();

    const currentItem = event.target.closest(".todo-item");

    if (!currentItem.classList.contains("completed")) {
        const textInput = document.createElement("input");
        textInput.type = "text";
        textInput.setAttribute("data-id", id);

        const currentTitleEl = currentItem.querySelector(".todo-title");

        // get the previous todo title text and assign it to the text input
        textInput.value = currentTitleEl.querySelector("span").textContent;

        // Add event listener to the textInput, On enter press Update the todo Item.
        textInput.addEventListener("keyup", (event) => {
            if (event.code === "Enter") {
                const updatedTitle = event.target.value;
                const currentId = event.target.getAttribute("data-id");

                todoList[currentId].todoText = updatedTitle;

                // Update the localStorage
                localStorage.setItem("TODOLIST", JSON.stringify(todoList));

                // Update the span tag value
                event.target.previousElementSibling.textContent = updatedTitle;

                event.target.parentElement.classList.remove("edit-mode");
                event.target.remove();

            }
        });

        currentTitleEl.classList.add("edit-mode");

        currentTitleEl.appendChild(textInput);
    }

    // After rendering the text input, close the menu
    currentItem.querySelector(".todo-menu-list").classList.remove("show");

}

function handleDelete(event, id) {
    event.preventDefault();

    // Update the global TodoList by removing the current todo item
    const index = todoList.findIndex(item => item.id === id);
    todoList.splice(index, 1);

    // Store the updated TodoList into Localstorage
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));

    // remove the current deleted Todo List Item from UI
    event.target.closest(".todo-item").remove();

}

// <button class="todo-menu-btn icon-prefix dotted-menu-icon"></button>
function getTodoMenuBtn() {
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("todo-menu-btn icon-prefix dotted-menu-icon");

    return menuBtn;
}

function checkLocalStorage() {
    const localTodoList = JSON.parse(localStorage.getItem("TODOLIST"));
    if (localTodoList) {
        localTodoList.forEach((item) => {
            renderTodoItem(item);
        });

        todoList = localTodoList;
    }
}

function markTodoAsComplete(event, id) {

    const markBtn = event.target;
    let isCompleted = false;

    // Once Mark as button is clicked, add the completed class name to button

    if (markBtn.classList.contains("completed")) {
        markBtn.classList.remove("completed");
        isCompleted = false;
    } else {
        markBtn.classList.add("completed");
        isCompleted = true;
    }

    const updatedTodoList = todoList.map(todoItem => {

        if (todoItem.id === id) {
            todoItem.isCompleted = isCompleted;
        }

        return todoItem;
    });

    todoList = updatedTodoList;

    // Store the updated value in localstorage
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));

    // Update the Local UI
    const currentListEl = markBtn.closest(".todo-item");

    // selecting / deselecting the checkbox based on the completed status
    currentListEl.querySelector(`#todo-check-${id}`).checked = isCompleted;

    // disabling / enabling the checkbox based on the completed status
    currentListEl.querySelector(`#todo-check-${id}`).disabled = isCompleted;

    const badgeEl = currentListEl.querySelector(`.todo-status`);
    if (isCompleted) {
        badgeEl.classList.remove('warning');
        badgeEl.classList.add('success');
        badgeEl.textContent = "completed";

        // update the mark button text
        markBtn.textContent = "Undo Completed";

        // add class "completed" to the parent class todo-item 
        markBtn.closest(".todo-item").classList.add("completed");

    } else {
        badgeEl.classList.add('warning');
        badgeEl.classList.remove('success');
        badgeEl.textContent = "yet to start";

        // update the mark button text
        markBtn.textContent = "Mark Completed";

        // remove the class "completed" to the parent class todo-item 
        markBtn.closest(".todo-item").classList.remove("completed");
    }

}

function getTodoItemStatus(isCompleted) {
    if (isCompleted) {
        return `<p class="todo-status badge success">Completed</p>`;
    }

    return `<p class="todo-status badge warning">Yet to start</p>`;
}