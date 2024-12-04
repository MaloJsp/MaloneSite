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
        localStorage.setItem("reponses",tab)
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
    // console.log(lsvb)
    Object.entries(lsvb).forEach(([rep, verb]) => {
        // console.log(verb)
        count++;
        displayQuest(verb[0], rep, count,verb[3]);
    });
    displayBtn()
}

function displayPrsn(vb){
    console.log("Vb PRSN: ",vb)
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
    console.log(libPrsn)
    return libPrsn
}




