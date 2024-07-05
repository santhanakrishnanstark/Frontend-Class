// Shoppinglist with object



const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = [];
const shoppingListEl = document.getElementById("shoppingList");


// const myButton = createButton("Submit");
// document.getElementsByTagName("body")[0].appendChild(myButton);

addBtn.addEventListener("click", () => {
    saveThisItem();
});

// itemInput.addEventListener("keydown", (e) => console.log(e.target.value));

// itemInput.addEventListener("keypress", (e) => console.log(e.target.value));

itemInput.addEventListener("keyup", (e) => {
    if (e.code == 'Enter') {
        saveThisItem();
    }
});

function saveThisItem() {
    const item = itemInput.value;

    // Validate input value
    if (checkInputValue(item)) {

        const addedItem = addToShoppingList(item);

        renderListItem(addedItem);

        itemInput.value = "";

    } else {
        alert("Enter any value");
    }
}

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

        const itemIndex = event.target.parentElement.id.split('-')[1];

        updateShoppingList('DELETE', itemIndex);
    });

    checkbox.addEventListener("change", (event) => {
        const isBought = event.target.checked;
        const itemIndex = event.target.id.split('-')[1];

        updateShoppingList('UPDATE', itemIndex, isBought);
    });

    liTag.appendChild(checkbox);
    liTag.appendChild(deleteBtn);
    shoppingListEl.appendChild(liTag);
}

function updateShoppingList(type, itemIndex, isBought) {
    if (type === "UPDATE") {
        shoppingList[itemIndex].isBought = isBought;
    }
    if (type === "DELETE") {
        shoppingList.splice(itemIndex, 1);
    }

    console.log('Shopping list is Updated! ', shoppingList);
}

function createListItem(newItem) {
    const liTag = document.createElement("li");
    liTag.textContent = newItem.name;
    liTag.id = `item-${shoppingList.length - 1}`;
    liTag.className = "list-item";

    return liTag;
}

function createCheckbox(newItem) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = newItem.isBought;
    console.log('checkbox: ', shoppingList.length - 1)
    input.id = `item-${shoppingList.length - 1}`;
    input.name = `item-${shoppingList.length - 1}`;

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