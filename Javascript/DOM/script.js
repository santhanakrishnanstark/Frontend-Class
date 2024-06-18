// JS - DOM

console.log('********************** JS DOM ***************************');

// Access the HTML element by JS

console.log('***  Document Object: ', document);

// Accessing the particular element by ID

console.log('***  Document Object of P tag by ID', document.getElementById('demo'));

// Accessing the particular element by class name

console.log('***  Document Object of li tag by class name', document.getElementsByClassName('item'));

// Access the DOM element by query selector - just like css way

console.log('***  Document Object of .active element by query selector', document.querySelector('ul .item.active'));

// Access the DOM element by query selector - just like css way

console.log('***  Document Object of .even element by query selector', document.querySelectorAll('ol .item.even'));


/*************        Accessing the DOM property  */

const pTag = document.getElementById('demo');

console.log('P tag content & id: ', pTag.textContent, pTag.id);

console.log('P tag inner html: ', pTag.innerHTML);

console.log('P tag Outer html: ', pTag.outerHTML);

console.log('Accessing class attribute value of P tag: ', pTag.getAttribute('class'));
// Above: textContent return only the text value and remove the html tag if any, but innerHTML will return with HTML tag as well


/*************        Modifying the DOM property  */

console.log('******************************************* Modifying the DOM property *******************************************');

const secondPTag = document.getElementById('demo-modify');

secondPTag.textContent = 'Updated paragraph by JS';

secondPTag.innerHTML = "<button>Changed from P tag to Button</button>";

secondPTag.setAttribute('class', 'new-classname-updated-js');

secondPTag.setAttribute('data-value', 'my second paragraph');


/*************        ADDing/Deleting DOM elements  */

console.log('******************************************* ADDing/Deleting DOM elements *******************************************');

// Option 1: easy/HTML way: Using HTML code structure

document.querySelector('.container').innerHTML = `
    <button class="primary">Submit</button>
`;

document.querySelector('.container').innerHTML += `
    <button class="secondary">Reset</button>
`;

// Option 2: Javascript way: Using JS functions

const buttonEl = document.createElement('button');

buttonEl.setAttribute("class", "primary");
buttonEl.textContent = "Submit";

const resetButtonEl = document.createElement('button');

resetButtonEl.setAttribute("class", "secondary");
resetButtonEl.textContent = "Reset";


document.querySelector('.js-container').appendChild(buttonEl);
document.querySelector('.js-container').appendChild(resetButtonEl);



// Creating the HTML EL using Functions


document.querySelector('.js-container').appendChild(createHTMLElement('button', 'secondary', 'Clear'));

document.querySelector('.js-container').appendChild(createHTMLElement('p', 'mypara', 'this is a paragraph'));



function createHTMLElement(elName, className, text) {
    const el = document.createElement(elName);

    el.setAttribute("class", className);
    el.textContent = text;

    return el;
}



/** Task */

/**
 * 
    <button type="button" aria-controls="language-menu" aria-haspopup="true">
        
        <span class="label">Language</span>
        
      </button>
 * 
 */