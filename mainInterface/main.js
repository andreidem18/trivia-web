import Request from './classes/Request.js';
import UI from './classes/UI.js';

let form = document.getElementById('form-questions');

form.addEventListener("submit", () => {
    event.preventDefault();
    window.location.replace('../test/test.html');
    sessionStorage.setItem('questions', Request.getQuestions());
    sessionStorage.setItem('total', document.getElementById("numberQuestions").value);
    sessionStorage.setItem('type', document.getElementById("type").value);
});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories));

