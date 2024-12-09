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
        tabCheck[count]= rep.trim() == inputs[count].trim()
        count++
    });
    colorError(tabCheck)
    localStorage.setItem("chk",tabCheck)
}

export function displayAlert(){
    let bal = getMainBal()
    bal.innerHTML += `
    <style>
        /* Style de l'arrière-plan semi-transparent */
        .modal {
            display: none; /* Masquée par défaut */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        .modal-content {
            position: relative;
            margin: 10% auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            width: 80%;
            max-width: 400px;
            text-align: center;
        }
    </style>
       <div id="modal" class="modal">
        <div class="modal-content">
            <button class="close-btn" id="closeModalBtn">&times;</button>
            <h2>Voici une popup</h2>
            <p>Vous pouvez y ajouter votre contenu.</p>
        </div>
    </div>

    `

}

function colorError(tabCheck){
    let bal
    for (let index = 0; index < 10; index++) {
        bal = document.getElementById(index+1)
        bal.disabled = ! localStorage.getItem("temps") == "all"
        console.log(getMainBal())
        if (tabCheck[index]) {
            bal.style.color = "green"
        }else{
            bal.style.color = "red"
        }
    }
}



