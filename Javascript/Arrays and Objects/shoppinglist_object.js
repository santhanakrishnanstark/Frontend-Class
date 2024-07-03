// Shoppinglist with object



const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = [];
const shoppingListEl = document.getElementById("shoppingList");


// const myButton = createButton("Submit");
// document.getElementsByTagName("body")[0].appendChild(myButton);

addBtn.addEventListener("click", () => {

    const item = itemInput.value;

    // Validate input value
    if (checkInputValue(item)) {

        const addedItem = addToShoppingList(item);

        renderListItem(addedItem);

        itemInput.value = "";

    } else {
        alert("Enter any value");
    }

});






function checkInputValue(itemValue) {
    return itemValue ? true : false
}

function addToShoppingList(item) {
    const itemObject = {
        name: item,
        isBought: false
    }

    shoppingList.push(itemObject);
    console.log('*** Shopping List is updated with ', itemObject, shoppingList);

    return itemObject;
}

function renderListItem(newItem) {
    const liTag = createListItem(newItem);
    const deleteBtn = createButton("Delete");
    const checkbox = createCheckbox(newItem);

    deleteBtn.addEventListener("click", (event) => {
        const clickedDeleteBtn = event.target;
        clickedDeleteBtn.parentElement.remove();

        // updateShoppingList();
    });

    checkbox.addEventListener("change", (event) => {
        console.log('*** Checkbox: ', event.target.checked);
        // is checkbox selected:  console.log(" pen is bought ");

        // updateShoppingList();
    });

    liTag.appendChild(checkbox);
    liTag.appendChild(deleteBtn);
    shoppingListEl.appendChild(liTag);
}


function createListItem(newItem) {
    const liTag = document.createElement("li");
    liTag.textContent = newItem.name;
    liTag.id = `item-${shoppingList.length}`;
    liTag.className = "list-item";

    return liTag;
}

function createCheckbox(newItem) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = newItem.isBought;
    input.id = "item-" + shoppingList.length;
    input.name = "item-" + shoppingList.length;

    return input;
}

function createButton(buttonName) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = buttonName;
    buttonEl.style.backgroundColor = randomColorGenerator();

    return buttonEl;
}

// random color generator

function randomColorGenerator() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}