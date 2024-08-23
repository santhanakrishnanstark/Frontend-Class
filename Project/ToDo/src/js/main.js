// TODO App

// Global Variables / State

let todoList = [];

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
    const todoItem = {
        id: todoList.length,
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

function renderTodoItem(todoItem) {

    const liTag = document.createElement("li");
    liTag.classList.add("todo-item");

    const todoItemHTML = getTodoItemHTML(todoItem);

    liTag.innerHTML = todoItemHTML;

    todoListContainer.appendChild(liTag);
}

function getTodoItemHTML(todoItem) {
    return `
        <p class="todo-check">
            ${
                todoItem.isCompleted 
                ? `<input type="checkbox" name="todo-check" id="todo-check-${todoItem.id}" checked>`
                : `<input type="checkbox" name="todo-check" id="todo-check-${todoItem.id}">`
            }
        </p>
        <div class="todo-content">
            <button class="todo-menu-btn icon-prefix dotted-menu-icon"></button>
            <ul class="todo-menu-list">
                <li><a href="#" class="todo-menu icon-prefix edit-icon">Edit</a></li>
                <li><a href="#" class="todo-menu icon-prefix delete-icon">Delete</a></li>
            </ul>
            <p class="todo-title">${todoItem.todoText}</p>
            <p class="todo-created-date">Created at: ${todoItem.createdAt}</p>

            ${getTodoItemStatus(todoItem.isCompleted)}

            <p class="todo-action-btn">
                <button class="button button-primary button-primary-outline icon-prefix mark-icon ${todoItem.isCompleted ? 'completed' : ''}" onClick="markTodoAsComplete(event, ${todoItem.id})">
                    ${todoItem.isCompleted ? "Undo Completed" : "Mark Complete" }
                </button>
            </p>
        </div>
    `;
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
    currentListEl.querySelector(`#todo-check-${id}`).checked = isCompleted;

    const badgeEl = currentListEl.querySelector(`.todo-status`);
    if (isCompleted) {
        badgeEl.classList.remove('warning');
        badgeEl.classList.add('success');
        badgeEl.textContent = "completed";

        // update the mark button text
        markBtn.textContent = "Undo Completed";
    } else {
        badgeEl.classList.add('warning');
        badgeEl.classList.remove('success');
        badgeEl.textContent = "yet to start";

        // update the mark button text
        markBtn.textContent = "Mark Completed";
    }

}

function getTodoItemStatus(isCompleted) {
    if (isCompleted) {
        return `<p class="todo-status badge success">Completed</p>`;
    }

    return `<p class="todo-status badge warning">Yet to start</p>`;
}