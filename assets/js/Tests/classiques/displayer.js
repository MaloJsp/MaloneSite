const tempLib = {
    "present":"Présent",
    "imparfait":"Imparfait",
    "passe":"Passé simple",
    "futur": "Futur",
    "conditionnel": "Conditionnel",
    "imperatif": "Imperatif",
    "pc": "Passé composé",
    "pqp": "Plus que parfait"
}
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
function displayQuest(vb,rep,id,p,tp){
    let mBal = getMainBal()
    mBal.style.margin = "5%"
    // mBal.style.color="black"
    

    let libPrsn = displayPrsn(p)
    if (localStorage.getItem("temps") == "all"){
        mBal.innerHTML += `
        <div class="test">
            <label for="${rep}">
              ${tp}: ${libPrsn} (${vb.vb}) 
            </label>
            <input type="text" name="${vb.vb}" id=${id}>
            <div id="r${id}"></div>
        </div>
        </br>
    `   
    }else{
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
    
    
}

export function stylizerQuest(){
        for (let index = 1; index < localStorage.corr.length ; index++) {
            
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
        let nbq
        if (localStorage.temps == "all"){
             nbq = 32
        }else{
             nbq = 10
        }
        for (let index = 1; index < nbq  ; index++) {
            inp = document.getElementById(index)
             console.log(inp)
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
        displayQuest(verb[0], rep, count,verb[2],verb[1]);
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
        console.log("inputs: ",inputs[count])
        tabCheck[count]= rep.trim() == inputs[count].trim()
        count++
    });
    colorError(tabCheck)
    displayGoodRep(tabCheck)
    calcStat(tabCheck)
    localStorage.setItem("chk",tabCheck)
}

function calcStat(chk){
    let stat = {
        "present":0,
        "imparfait":0,
        "futur":0,
        "passe": 0,
        "conditionnel": 0,
        "imperatif": 0,
        "pc": 0,
        "pqp": 0
    }
    let count = 0
    chk.forEach(element => {
        count ++
        if (count<5){
            if(element){stat["present"]++}
        }else if (count>=5 && count<9){
            if(element){stat["imparfait"]++}
        }else if(count >=9 && count<13){
            if(element){stat["futur"]++}
        }else if(count >=13 && count<17){
            if(element){stat["passe"]++}
        }else if(count >=17 && count<21){
            if(element){stat["conditionnel"]++}
        }else if(count >=21 && count<25){
            if(element){stat["imperatif"]++}
        }else if(count >=25 && count<29){
            if(element){stat["pc"]++}
        }else{
            if(element){stat["pqp"]++}
        }
    })
    
}

function colorError(tabCheck){
    let bal
    for (let index = 0; index < localStorage.corr.length -1 ; index++) {
        bal = document.getElementById(index)
        // bal.disabled = ! localStorage.getItem("temps") == "all"
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
    
    for (let index = 1; index < localStorage.corr.length ; index++) {
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