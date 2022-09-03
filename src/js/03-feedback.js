import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
getData();

function onFormInput() {
    const storageData = {
        mail: inputEmail.value,
        message: textareaMessage.value,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function getData() {
    if (parsedData) {
        inputEmail.value = parsedData.mail;
        textareaMessage.value = parsedData.message;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    form.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(parsedData);
}

