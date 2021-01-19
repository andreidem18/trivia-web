export default class Question {

    static printQuestion(question, number, total){
        let category = sessionStorage.getItem('type');
        let html = document.getElementById('question-container');
        if(category == 'multiple'){
            let answers = [question.correct_answer, question.incorrect_answers[0], question.incorrect_answers[1], question.incorrect_answers[2]]
            let index = this.differentIndex();
            html.innerHTML = `
                <div class="card ${this.chooseColor(question.category)}">
                    <div class="card-body card-body-question">
                        <div class="category-container d-flex justify-content-between">
                            <div class="continue-button category ${this.chooseColor(question.category)}" id="category-space">${question.category}</div>
                            <div class="continue-button number ${this.chooseColor(question.category)}" id="number-space">${number}/${total}</div>
                        </div>
                        <p id="question">${question.question}</p>
                            <form action="/" class="answers" id="options-form">
                                <div class="radio">
                                    <input type="radio" name="options" id="option1_input" value="${answers[index[0]]}" required>
                                    <label for="option1_input">${answers[index[0]]}</label>

                                    <input type="radio" name="options" id="option2_input" value="${answers[index[1]]}" required>
                                    <label for="option2_input">${answers[index[1]]}</label>

                                    <input type="radio" name="options" id="option3_input" value="${answers[index[2]]}" required>
                                    <label for="option3_input">${answers[index[2]]}</label>

                                    <input type="radio" name="options" id="option4_input" value="${answers[index[3]]}" required>
                                    <label for="option4_input">${answers[index[3]]}</label>
                                </div>
                                <div class="text-end">
                                    <button class="continue-button submit-question ${this.chooseColor(question.category)}" type="submit">
                                        <i class="fas fa-caret-square-right"></i>
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>`
        } else {
            html.innerHTML = `
                <div class="card ${this.chooseColor(question.category)}">
                    <div class="card-body card-body-question">
                        <div class="category-container d-flex justify-content-between">
                            <div class="continue-button category ${this.chooseColor(question.category)}" id="category-space">${question.category}</div>
                            <div class="continue-button number ${this.chooseColor(question.category)}" id="number-space">${number}/${total}</div>
                        </div>
                        <p id="question">${question.question}</p>
                            <form action="/ddd" class="answers" id="options-form">
                                <div class="radio">
                                    <input type="radio" name="options" id="option1_input" value="True" required>
                                    <label for="option1_input">True</label>

                                    <input type="radio" name="options" id="option2_input" value="False">
                                    <label for="option2_input">False</label>
                                </div>
                                <div class="text-end">
                                    <button class="continue-button submit-question ${this.chooseColor(question.category)}" type="submit">
                                        <i class="fas fa-caret-square-right"></i>
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>`
        }
    }
    static doCards(questions, index, total, score){
        console.log(questions.length);
        if(index+1 <= total){
            this.printQuestion(questions[index], (index+1), total);
            let optionsForm = document.getElementById('options-form');
            optionsForm.addEventListener('submit', (event) => {
                event.preventDefault();
                let options = document.getElementsByName('options')
                if(options[0].checked){
                    this.validateAnswer(options[0], questions, index, total, score);
                } else if(options[1].checked){
                    this.validateAnswer(options[1], questions, index, total, score);
                } else if(options[2].checked){
                    this.validateAnswer(options[2], questions, index, total, score);
                } else if(options[3].checked){
                    this.validateAnswer(options[3], questions, index, total, score);
                } else {
                    alert('Select an option');
                }
            })
        } else {
            sessionStorage.setItem('score', score);
            window.location.replace('../../result/result.html');
        }
    }

    static validateAnswer(option, questions, index, total, score){
        if(option.value === questions[index].correct_answer){
            let html = document.getElementById('question-container');
            html.innerHTML += `<div class="card color-light-green position-absolute">
                                <div class="card-body">
                                    Correct answer!
                                    <div class="text-end">   
                                        <button class="continue-button color-light-green" id="retry-button">
                                            <i class="fas fa-check"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>`;
            score++;
        } else {
            let html = document.getElementById('question-container');
            html.innerHTML += `<div class="card color-red position-absolute">
                                <div class="card-body">
                                    Sorry, correct answer:
                                    <p>${questions[index].correct_answer}</p>
                                    <div class="text-end">   
                                        <button class="continue-button color-red" id="retry-button">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>`;
        }
        let button = document.getElementById('retry-button');
        button.addEventListener('click', () => {
            this.doCards(questions, index+1, total, score);
        })
    }

    static chooseColor(category){
        if(category === 'General Knowledge' || category === 'Science & Nature' || category === 'Mythology'
        || category === 'Geography'){
            return 'color-green';
        }
        else if(category === 'Entertainment: Books' || category === 'Entertainment: Film'|| category === 'Entertainment: Music'
        || category === 'Entertainment: Musicals & Theatres'){
            return 'color-blue';
        }
        else if(category === 'Entertainment: Television' || category === 'Entertainment: Video Games'
        || category === 'Entertainment: Board Games' || category === 'Entertainment: Japanese Anime & Manga'
        || category === 'Entertainment: Cartoon & Animations'){
            return 'color-violet';
        }
        else if(category === 'Science: Mathematics' || category === 'Science: Computers' || category === 'Sports' || category === 'Celebrities'){
            return 'color-light-blue';
        }
        else if(category === 'History' || category === 'Politics' || category === 'Science: Gadgets' || category === 'Art'){
            return 'color-yellow';
        }
        else if(category === 'Vehicles' || category === 'Animals' || category === 'Entertainment: Comics'){
            return 'color-red';
        }
    }

    static differentIndex(){
        let index = [];
        index[0] = Math.floor(Math.random() * 4);
        index[1] = Math.floor(Math.random() * 4);
        while(index[1] == index[0]){
            index[1] = Math.floor(Math.random() * 4);
        }
        index[2] = Math.floor(Math.random() * 4);
        while(index[2] == index[0] || index[2] == index[1]){
            index[2] = Math.floor(Math.random() * 4);
        }
        index[3] = Math.floor(Math.random() * 4);
        while(index[3] == index[0] || index[3] == index[1] || index[3] == index[2]){
            index[3] = Math.floor(Math.random() * 4);
        }       
        return index;
    }
}