let score = sessionStorage.getItem('score')*100/sessionStorage.getItem('total');
let html = document.getElementById('results');

if(score >= 80){
    html.innerHTML=`<img src="../img/felicidades 100.svg" alt="" class="img-fluid">
                    <h2 class="title text-center success">Congratulations!</h2>
                    <p>Your score: <span>${score}%</span></p>
                    <div class="text-end">
                        <button class="continue-button">try Again</button>
                    </div>`
} else if(score >= 30){
    html.innerHTML=`<h2 class="title text-center">You have approached <span class="title">${score}%</span></h2>
                    <img src="../img/casi.svg" alt="" class="img-fluid">
                    <div class="text-end">
                        <button class="continue-button">try Again</button>
                    </div>`
} else {
    html.innerHTML=`<h2 class="title text-center">Ups... Aparently you have not hit</h2>
                    <img src="../img/reprobado.svg" alt="" class="img-fluid">
                    <p>Your score: <span>${score}%</span></p>
                    <div class="text-end">
                        <button class="continue-button">try Again</button>
                    </div>`
}

document.addEventListener('click', () => window.location.replace('../index.html'));