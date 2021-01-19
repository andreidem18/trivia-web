export default class UI {

    static printCategories(categories){
        let html = '';
        categories.forEach(category => {
            html += `<option value="${category.id}">${category.name}</option>`;
        });
        document.getElementById('category').innerHTML = html;
    }

}