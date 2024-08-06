const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");

const registerForm = document.getElementById("registerForm");
const registerButton = document.getElementById("registerBtn");

init();

function init() {

    // 0. check for browser storage data
    checkBrowserStorage();

    // 1. after page load validate the form 
    validateForm();

    // 2. Add event listener to input fields
    addEventsToInputs();
}

function validateForm() {
    if (!firstName.value || !lastName.value || !email.value || !isValidEmail(email.value)) {
        registerButton.disabled = true;
    } else {
        registerButton.disabled = false;
    }

    // store data into session storage
    const registerFormData = {
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        email: email.value
    };

    sessionStorage.setItem("registerFormData", JSON.stringify(registerFormData));


}

function addEventsToInputs() {
    firstName.addEventListener("keyup", (event) => {
        validateForm();
    });
    lastName.addEventListener("keyup", (event) => {
        validateForm();
    });
    email.addEventListener("keyup", (event) => {
        validateForm();
    });


    // Add blur event
    firstName.addEventListener("blur", handleFormItem);

    lastName.addEventListener("blur", handleFormItem);

    email.addEventListener("blur", (event) => {
        handleFormItem(event, "EMAIL");
    });
}

function handleFormItem(event, type) {
    const existingErrorTag = event.target.parentElement.querySelector(".error");
    if (!event.target.value && !existingErrorTag) {
        // show error message
        const errorTag = createErrorMessage(`${event.target.dataset.name} Should not be Empty!`);
        event.target.parentElement.appendChild(errorTag);
    }

    if (event.target.value && existingErrorTag) {
        if (type === "EMAIL" && isValidEmail(event.target.value)) {
            existingErrorTag.remove();
        } else if (type !== "EMAIL") {
            existingErrorTag.remove();
        }
    }

    validateForm();
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function createErrorMessage(message) {
    const spanTag = document.createElement("p");
    spanTag.classList.add("error");
    spanTag.textContent = message;

    return spanTag;
}

function checkBrowserStorage() {
    const formData = JSON.parse(sessionStorage.getItem("registerFormData"));

    for (const fieldName in formData) {
        const formValue = formData[fieldName];
        document.getElementById(`${fieldName}`).value = formValue;
    }
}

// Add Event to Form

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the Form Data

    const formData = new FormData(this);
    const fname = formData.get("firstName");
    const lname = formData.get("lastName");
    const password = formData.get("password");
    const email = formData.get("email");

    const registerFormData = {
        firstName: fname,
        lastName: lname,
        password: password,
        email: email
    };

    console.log(registerFormData);

    // Store the form data into sessionStorage

    sessionStorage.setItem("registerFormData", JSON.stringify(registerFormData));

});