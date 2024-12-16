
//Recupère la balise ou on insere le tests
function getMainBal(){
    return document.getElementById("exo")
}

// Fonction utilitaire qui genere un entier entre min et max
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


//Affichage d'une question des tests
// reste à gérer les doublons car n'affiche pas la question si vb déjà afficher ( voir autre manière gérer id)
function displayQuest(vb,rep,id,p){
    let mBal = getMainBal()
    mBal.style.margin = "5%"
    // mBal.style.color="black"
    let libPrsn = displayPrsn(p)
    mBal.innerHTML += `
        <div class="test">
            <label for="${rep}">
              ${libPrsn} (${vb.vb}) 
            </label>
            <input type="text" name="${vb.vb}" id=${id}>
            <div id="r${id}"></div>
        </div>
        </br>
    `
    
}

export function stylizerQuest(){
        for (let index = 1; index < 11; index++) {
            
            const element = document.getElementById(index)
            
            element.style.background = "rgb(34, 30, 30) "
        }
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
            // 
            
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
    // stylizerQuest()
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
            libPrsn = "Tu"
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
    displayGoodRep(tabCheck)
    localStorage.setItem("chk",tabCheck)
}


function colorError(tabCheck){
    let bal
    for (let index = 0; index < 10; index++) {
        bal = document.getElementById(index+1)
        bal.disabled = ! localStorage.getItem("temps") == "all"
        // )
        bal.disabled = true
        if (tabCheck[index]) {
            bal.style.color = "green"
        }else{
            bal.style.color = "red"
        }
    }
}


function displayGoodRep(chk){
    let balRep
    let repL = []
    Object.entries(JSON.parse(localStorage.getItem("corr"))).forEach(([rep, verb]) => {
        repL.push(rep)
    });
    
    for (let index = 1; index < 11; index++) {
        if(!chk[index-1]){
            balRep =  document.getElementById("r"+(index))
            balRep.innerHTML = `
                La bonne réponse est <b>${repL[index-1]}</b></br>
            `
        }
        
    }
}

function displayModal(){
    if (localStorage.getItem("temps") == "all"){
        document.getElementById("myModal")
    }
}