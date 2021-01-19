import Question from './classes/Question.js';
import Request from './classes/Request.js';

Request.getQuestions()
    .then(response => response.json())
    .then(data => Question.doCards(data.results, 0, sessionStorage.getItem('total'), 0))
    .catch(errorMessage);

function errorMessage(){
    let html = document.getElementById('question-container');
    html.innerHTML = `<div class="card color-red position-absolute">
                         <div class="card-body">
                            Sorry, we couldn't filter your questions
                            <div class="text-end">   
                                <button class="continue-button color-red" id="retry-button">
                                    retry
                                </button>
                            </div>
                        </div>
                    </div>`;
    let button = document.getElementById('retry-button');
    button.addEventListener('click', () => {
        window.location.replace('/');
    })
}
