export default class Request{
    static getCategories(){
        return fetch('https://opentdb.com/api_category.php');
    }
    static getFilters(){
        return {
            totalQuestions: document.getElementById('numberQuestions').value,
            dificulty: document.getElementById('dificulty').value,
            category: document.getElementById('category').value,
            type: document.getElementById('type').value
        }
    }
    static getQuestions(){
        let filters = this.getFilters()
        return `https://opentdb.com/api.php?amount=${filters.totalQuestions}&category=${filters.category}&difficulty=${filters.dificulty}&type=${filters.type}`
    }
}