import { throttle } from "lodash.throttle";
/**HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, 
 * коли користувач щось друкує.

Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, 
у яких зберігай поточні значення полів форми. 
Нехай ключем для сховища буде рядок "feedback-form-state".


Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
В іншому випадку поля повинні бути порожніми.

Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, 
message та їхніми поточними значеннями.

Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.  */
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);
getData();

function onFormInput(evt) {
    const storageData = {
        mail: evt.target.value,
        message: evt.currentTarget.value,
    };
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function getData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        // inputEmail.value = JSON.parse(savedData);
        inputEmail.value = savedData;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
}