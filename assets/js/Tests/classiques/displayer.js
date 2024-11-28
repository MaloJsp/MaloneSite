//Recupère la balise ou on insere le tests
function getMainBal(){
    return document.getElementById("exo")
}

// export function testdisp(){
//     getMainBal().innerText = "IT WORKS!!!"
// }

//Affichage d'une question des tests
// reste à gérer les doublons car n'affiche pas la question si vb déjà afficher ( voir autre manière gérer id)
function displayQuest(vb,rep,id){
    let mBal = getMainBal()
    mBal.innerHTML += `
        <div>
            <label for="${rep}">
               je ${vb.vb} 
            </label>
            <input type="text" name="${vb.vb}" id="${id}">
        </div>
    `
}

//Affichage du bouton de validation des tests
function displayBtn(){
    let mBal = getMainBal()
    mBal.innerHTML += `
            <input type="button" value="Correction" id="Vbtn">
    `
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
        console.log(verb)
        count++;
        displayQuest(verb[0], rep, count);
    });
    displayBtn()
}





