export default class Request {
    static getQuestions(){
        return fetch(sessionStorage.getItem('questions'));
    }
}

