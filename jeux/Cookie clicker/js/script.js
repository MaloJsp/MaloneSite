//Variables globales
//#region
// Booléen indiquant si la partie est en cours
let playing = false;

// Niveau de difficulté (3: easy, 2: medium, 1: hard)
// = nombre de secondes pendant lesquelles le cookie est immobile
let difficulty = 3;

// Nombre de clics sur le cookie
let clickCount = 0;

// Temps restant
let remainingTime = 15;

// Numéro de la cellule où se trouve le cookie
// = numéro de l'enfant dans une grille de 9 éléments div de classe col-4
let cell = 4;

// Zone d'affichage du score et du temps restant
let state = document.querySelector("#state");

// Zone d'affichage du score
let score = document.querySelector("span#score");

// Zone d'affichage du score final (fenêtre modale)
let finalScore = document.querySelector("#click-count");

// Zone d'affichage du temps restant
let time = document.querySelector("span#time");

// Bouton de démarrage
let startButton = document.querySelector("button");

// Cookie à cliquer
let cookie = document.querySelector("img#cookie");

let grille = document.querySelectorAll(".column.col-4");

let openav = document.querySelector(".icon.icon-plus");

let mod = document.querySelector("#modal-settings");

let closnav = document.querySelector("#closeModal");

let ez = document.querySelector("#ez");

let med = document.querySelector("#med");

let ard = document.querySelector("#ard");

let closhare = document.querySelector("#closeShareMod");

let modshare = document.querySelector("#modal-share");

let clickspan = document.querySelector("#click-count");

let colselect = document.querySelector("#backgroundColor");

let navbar = document.querySelector("header");

let sendBut = document.querySelector("#sendBut");

let pseudoInput = document.querySelector("#pseudoInput");

let TopScores = document.querySelector("#HOF");

//#endregion

function reset() {
    // Cache le bouton start
    startButton.classList.toggle("d-none");

    // Affiche le temps restant
    state.classList.toggle("d-none");

    // Remise à zéro du score
    score.textContent = 0;

    // Réinitialisation du temps restant
    remainingTime = 15;

    clickCount = 0;

    grille[cell].removeChild(cookie);
    cell = 4;
    console.log("reset ?");
    grille[cell].append(cookie);

}

function countdown() {
    if (remainingTime === 0) { // Si le temps est écoulé
        // Fin de la partie
        playing = false;

        // Affiche le bouton start
        startButton.classList.toggle("d-none");

        // Cache le temps restant
        state.classList.toggle("d-none");

        clickspan.textContent = clickCount;

        modshare.classList.toggle("active");


    }
    else {

        if ( remainingTime % difficulty === 0)
        {
            grille[cell].removeChild(cookie);
            cell = Math.round(Math.random() * (8 - 0) + 0);
            console.log(cell);
            grille[cell].append(cookie);
        }
        // Mise à jour des secondes restantes
        time.textContent = remainingTime;

        // Mise à jour du temps restant


        remainingTime --;

        // Appel de la fonction countdown dans 1 seconde
        window.setTimeout(countdown, 1000);
    }
}

colselect.addEventListener("change", function(event){
    console.log(colselect.value);
   navbar.style.backgroundColor = colselect.value;
});





cookie.addEventListener("click", function(event) {
    if (playing) { // Si la partie est en cours

        // Mise à jour du score
        clickCount++;
        score.textContent = clickCount;
    }
});

startButton.addEventListener("click", function(event) {
    playing = true;
    reset();
    countdown();


});
openav.addEventListener("click", function(event){
    mod.classList.toggle("active");
});

closnav.addEventListener("click", function(event){
    mod.classList.toggle("active");
});

ez.addEventListener("click", function(event){
    difficulty = 3;
    console.log("diff ez");
});

med.addEventListener("click", function(event){
    difficulty = 2;
    console.log("diff med");
});

ard.addEventListener("click", function(event){
    difficulty = 1;
    console.log("diff ard");
});

closhare.addEventListener("click", function(event) {
    modshare.classList.toggle("active");
});

sendBut.addEventListener("submit", function(event) {
    sendScore();
    modshare.classList.toggle("active");
    event.preventDefault();
});

function sendScore() {
    console.log("ici", this);
    fetch("save_score.php?score="+clickCount+"&pseudo="+pseudoInput.value);
    return false;
}

function getHOF(){
    fetch("hall_of_fame.php?n=5")
        .then((response) => {
            return response.json();
        })
        .then((HOF) => {
            for(let i = 0; i<HOF.length; i++)
            {
                TopScores.innerHTML += "<tr> <td>"+HOF[i].nickname+"</td> <td>"+HOF[i].score +"</td> </tr>";

            }

        });
}
window.addEventListener("DOMContentLoaded", (event) =>
{
    console.log("ayyy lmao");
    getHOF();
});