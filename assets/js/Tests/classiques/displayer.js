//Recupère la balise ou on insere le tests
function getMainBal(){
    return document.getElementById("exo")
}

// Fonction utilitaire qui genere un entier entre min et max
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Affichage d'une question des tests
// reste à gérer les doublons car n'affiche pas la question si vb déjà afficher ( voir autre manière gérer id)
function displayQuest(vb,rep,id,p){
    let mBal = getMainBal()
    let libPrsn = displayPrsn(p)
    mBal.innerHTML += `
        <div>
            <label for="${rep}">
               ${libPrsn} ${vb.vb} 
            </label>
            <input type="text" name="${vb.vb}" id=${id}>
        </div>
    `
    displayAlert()
}

//Affichage du bouton de validation des tests
function displayBtn(){
    let mBal = getMainBal()
    mBal.innerHTML += `
            <input type="button" value="Correction" id="Vbtn" >
    `
    document.getElementById("Vbtn").onclick = () => {
        let inp
        let tab = []
        for (let index = 1; index < 11; index++) {
            inp = document.getElementById(index)
            tab[index-1]=inp.value
        }
        localStorage.setItem("reponses",JSON.stringify(tab))
        verifRep()
    }
}

// nb question exo classiques: 10
//                       Test: 20
// [
// {rep:[vb,prsn,tps]}
// ]
// reste à gérer les doublons car n'affiche pas la question si vb déjà afficher
export function displayExo(lsvb){
    let count = 0
    Object.entries(lsvb).forEach(([rep, verb]) => {
        count++;
        displayQuest(verb[0], rep, count,verb[3]);
    });
    displayBtn()
}

function displayPrsn(vb){
    let idPrsn = vb
    let libPrsn = ""
    let rd =  getRandomInt(0,1)
    switch (idPrsn) {
        case 1:
            libPrsn = "Je"
            break;
        case 2:
            libPrsn = "Je"
            break;
        case 3:
            if (rd == 0){
                libPrsn = "Elle"
            }else{
                libPrsn = "Il"
            }
            break;
        case 4:
            libPrsn = "Nous"
            break;
        case 5:
            libPrsn = "Vous"
            break;
        case 6:
            if (rd == 0){
                libPrsn = "Elles"
            }else{
                libPrsn = "Ils"
            }
            break;
        default:
            break;
    }
    return libPrsn
}

function verifRep(){
    let inputs = JSON.parse(localStorage.getItem("reponses"))
    let corr = JSON.parse(localStorage.getItem("corr"))
    let count = 0
    let tabCheck = []
    Object.entries(corr).forEach(([rep, verb]) => {
        tabCheck[count]=rep == inputs[count]
        count++;

    });

    localStorage.setItem("chk",tabCheck)
}

function displayAlert(){
    let bal = getMainBal()
    bal.innerHTML += `
    <style>
        /* Style de l'arrière-plan semi-transparent */
        .popup-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        /* Style de la fenêtre pop-up */
        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            z-index: 1000;
        }

        /* Bouton de fermeture */
        .close-btn {
            display: inline-block;
            margin-top: 10px;
            padding: 8px 15px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .close-btn:hover {
            background-color: #d32f2f;
        }

        
        .open-popup-btn:hover {
            background-color: #45a049;
        }
    </style>
    <div class="popup-overlay" id="popup">
        <div class="popup-content">
            <h2>Bonjour !</h2>
            <p>Ceci est une fenêtre pop-up.</p>
            <button class="close-btn" onclick="closePopup()">Fermer</button>
        </div>
    </div>

    `
}



