// Array - it a list type data structure
// ['name', 2, true, {id: 01, name: 'john'}, [1,2,3,4] ]

const array = ['name', 2, true, {
        id: 1,
        name: 'john'
    },
    [1, 2, 3, 4]
];

console.log(array);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log('Fruits Array: Initial Value: ', fruits);

// CRUD - Create Read Update Delete

// Array Methods

// To Add an Element to an Array

// To add an element at the last
fruits.push('Watermelon', 'papaya');

console.log('Fruits Array: After adding watermelon: ', fruits);

// To add an element at the first 

fruits.unshift('lemon');

console.log('Fruits Array: After adding lemon at first: ', fruits);

// To replace an item from array based on index

fruits[3] = "pomogranate";

console.log('Fruits Array: After replacing Apple with Pomogranate: ', fruits);

// To Find the item based on index

console.log('Fruits Array: Finding 4th index Item: : ', fruits[4]);

// To Find the index of particular item

console.log('Fruits Array: Finding whether the watermelon is in the array or not: ', fruits.indexOf('Watermelon'));

console.log('Fruits Array: Finding whether the watermelon is in the array or not: ', fruits.indexOf('Apple'));

// To Remove an item at the end of an array

const removedItem = fruits.pop();

console.log('Fruits Array: After removing the last element: ', removedItem, fruits);

// To Remove an item at first

console.log('Fruits Array: After removing the first element: ', fruits.shift(), fruits);

// To get certain part of array element based on index

console.log('Fruits Array: Getting a part of array elements: ', fruits.slice(1, 4), fruits);

// To remove certain element and add new element in an array

const deletedElement = fruits.splice(1, 2, 'kiwi', 'Grapes');

// If you don't want to delete an item but want to add item in between the array
fruits.splice(3, 0, 'Dragon Fruit');

console.log('Fruits Array: After deleting from index 3: ', fruits, 'deletedElement: ', deletedElement);


console.log('************************ Final Array ********************** ', fruits);

// Array ES6 Methods

// 1. Looping method forEach - alternate to for loop - it will not return anything
// It will modify the original array

fruits.forEach((item, index) => {
    console.log(index, item)
});

console.log('Fruits Array: After For Each Loop: ', fruits);

// 2. map() - it will return a new Array
// if you are passing 10 items, you can able to modify those 10 items and return.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareNumbers = number.map((item, index) => {
    return item * item;
});

const newFruitsArrayWithPrice = fruits.map((item, index) => {
    return `$ ${item} - ${index+1 * 10}`;
});

console.log('Fruits Array: Storing even array using Map: ', squareNumbers, number, newFruitsArrayWithPrice, fruits);


// 3. filter()

const filteredSquareNumber = squareNumbers.filter((item, index) => {
    if (item % 2 == 0) {
        return item
    }
});

console.log('filteredSquareNumber : ', filteredSquareNumber)

// 4. Reduce()


// Task - solution

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = [];
const shoppingListEl = document.getElementById("shoppingList");

addBtn.addEventListener("click", () => {

    // step1: getting input value
    const itemValue = itemInput.value;

    // step2: if value present, store the input value to shopping list
    if (itemValue) {
        shoppingList.push(itemValue);

        // step4: show the shopping list array
        console.log("Item added ", shoppingList);

        // step5: clear the inputfield
        itemInput.value = "";

        // step6: Add the itemValue into Unorder list in the UI
        // create li tag and add the itemValue text to li tag 

        // step 6.1 : Create Li tag
        const liTag = document.createElement("li");

        // step 6.2 : add the text content into Li tag and other properties
        liTag.textContent = itemValue;
        liTag.id = `item-${shoppingList.length}`;
        liTag.className = "list-item";

        // step 6.3 : Create Delete Button tag
        const deleteBtn = document.createElement("button");

        // step 6.4: add text content "Delete" to button tag
        deleteBtn.textContent = "Delete";
        deleteBtn.style.backgroundColor = randomColorGenerator();

        // step 6.4.1 : Adding event listener to the button
        deleteBtn.addEventListener("click", (event) => {
            const clickedDeleteBtn = event.target;

            clickedDeleteBtn.remove();

            // To access parent element from target => event.target.parentElement

        });

        // step 6.5: Add the delete button into Li tag
        liTag.appendChild(deleteBtn);

        // step 6.6: Add the Li tag into ShoppingList UL
        shoppingListEl.appendChild(liTag);


    }

    // step3: if no value, then show message to add the item
    else {
        alert("Enter any value");
    }

});


// random color generator

const randomColorGenerator = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
}