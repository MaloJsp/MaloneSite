const tempLib = {
    "present":"Présent",
    "imparfait":"Imparfait",
    "passe":"Passé simple",
    "futur": "Futur",
    "conditionnel": "Conditionnel",
    "imperatif": "Imperatif",
    "pc": "Passé composé",
    "pqp": "Plus-que-parfait"
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
    let aux= ""
    if(tp == "pc" || tp == "pqp"){
        if(vb.pp_id == 1){
            aux = "être"
        }else{
            
            aux = "avoir"
        }
    }

    let libPrsn = displayPrsn(p,tp)
    if (localStorage.getItem("temps") == "all"){
        mBal.innerHTML += `
        <div class="test">
            <label for="${rep}">
              ${tempLib[tp]} : ${libPrsn} (${aux} ${vb.vb}) 
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
              ${libPrsn} (${aux} ${vb.vb})
            </label>
            <input type="text" name="${vb.vb}" id=${id}>
            <div id="r${id}"></div>
        </div>
        </br>
    `
    }
    
    
}

function displaySentence(tot){
    if(tot<16){return "BAD"}else if(tot>=16 && tot<26){return "NOT BAD"}else if(tot>=26 && tot<32){return "EXCELLENT"}else{return "BEST"}
}

export function stylizerQuest(){
    let nbq
        if (localStorage.temps == "all"){
             nbq = 32
        }else{
             nbq = 10
        }
        for (let index = 1; index < nbq ; index++) {
            
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
        for (let index = 1; index < nbq +1 ; index++) {
            inp = document.getElementById(index)
            console.log("INPP: ",inp)
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

function displayPrsn(vb,tp){
    let idPrsn = vb
    let libPrsn = ""
    switch (idPrsn) {
        case 1:
            if(tp == "imperatif"){
                libPrsn = "Tu"
            }else{
                libPrsn = "Je"
            }
            
            break;
        case 2:
            if(tp == "imperatif"){
                libPrsn = "Nous"
            }else{
                libPrsn = "Tu"
            }
            break;
        case 3:
            if(tp == "imperatif"){
                libPrsn = "Vous"
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

            libPrsn = "Ils"
            
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
    // colorError(tabCheck)
    displayGoodRep(tabCheck)
    
    localStorage.setItem("chk",tabCheck)
    if (localStorage.temps == "all"){
        displayModal(calcStat(tabCheck))
    }

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
        "pqp": 0,
        "ts": 0,
        "tc": 0,
        "total": 0
    }
    let count = 0
    chk.forEach(element => {
        count ++
        if(element){stat["total"] ++}
        if (count<5){
            if(element){stat["present"]++;stat["ts"]++}
        }else if (count>=5 && count<9){
            if(element){stat["imparfait"]++;stat["ts"]++}
        }else if(count >=9 && count<13){
            if(element){stat["futur"]++;stat["ts"]++}
        }else if(count >=13 && count<17){
            if(element){stat["passe"]++;stat["ts"]++}
        }else if(count >=17 && count<21){
            if(element){stat["conditionnel"]++;stat["ts"]++}
        }else if(count >=21 && count<25){
            if(element){stat["imperatif"]++;stat["ts"]++}
        }else if(count >=25 && count<29){
            if(element){stat["pc"]++;stat["tc"]++}
        }else{
            if(element){stat["pqp"]++;stat["tc"]++}
        }
    })
    return stat
    
}

function colorError(tabCheck){
    let bal
    let nbq
    if (localStorage.temps == "all"){
         nbq = 32
    }else{
         nbq = 10
    }    for (let index = 0; index < nbq ; index++) {
        bal = document.getElementById(index +1)
        
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
    let nbq
        if (localStorage.temps == "all"){
             nbq = 32
        }else{
             nbq = 10
        }
    for (let index = 1; index < nbq +1 ; index++) {
        if(!chk[index-1]){
            balRep =  document.getElementById("r"+(index))
            balRep.innerHTML = `
                La bonne réponse est <b>${repL[index-1]}</b></br>
            `
        }
        
    }
}

function displayModal(stat){
        let rPann = ""
        if (!JSON.parse(localStorage.isFinal)) {
            rPann = `
            <div class="right-panel">
                <p>Phrase petit bateau</p>
                   ${genererListeAvecTirets(trierStat(stat))}
            </div>
            `
        }
        getMainBal().innerHTML += `
            <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content" style:"color: black;">
          
          <div class="left-panel" id="lPanne">
                <p>Résultat total: ${stat.total} / 32</p>
                <div> Temps Simples: ${stat.ts} /24 | Temps Composés: ${stat.tc} / 8 </div>
                <div> Présent : ${stat.present} / 4 </div>
                <div> Futur : ${stat.futur} / 4 </div>
                <div> Passé simple : ${stat.passe} / 4 </div>
                <div> Impératif : ${stat.imperatif} / 4 </div>
                <div> Conditionnel : ${stat.conditionnel} / 4 </div>
                <div> Imparfait : ${stat.imparfait} / 4 </div>
                <div> Passé composé : ${stat.pc} / 4 </div>
                <div> Plus-que-parfait : ${stat.pqp} / 4 </div>
                <div> ${displaySentence(stat.total)} </div>
            </div>
            ${rPann}
            <span class="close">&times;</span>

        </div>
      
      </div>
       <style>
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */

        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
      }
      
      /* Modal Content/Box */
      .modal-content {
              border-radius: 15px; /* Ajuste la valeur pour plus ou moins d'arrondi */

      color: white;
          display: flex;
        background-color:rgb(24, 24, 34);
        margin: 5% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
      }
      
      /* The Close Button */
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }

      .left-panel {
    flex: 1;
    text-align: center;
}

/* Panneau droit */
.right-panel {
    flex: 1;
    text-align: center;
}
    </style>

        `
        let mod =document.getElementById("myModal")
        mod.style.display = "block";

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            mod.style.display = "none";
          }
}



function trierStat(stat) {
    // Convertir l'objet en tableau de paires [clé, valeur]
    let entries = Object.entries(stat);

    // Trier le tableau selon les valeurs (croissantes)
    entries.sort((a, b) => a[1] - b[1]);

    // Filtrer les clés qui ont un libellé dans tempLib et les convertir en libellés
    let sortedLibelles = entries
        .filter(entry => tempLib.hasOwnProperty(entry[0])) // Garde seulement les clés présentes dans tempLib
        .map(entry => tempLib[entry[0]]); // Récupère le libellé correspondant

    return sortedLibelles; // Retourne le tableau de libellés triés
}

// Fonction pour générer une liste HTML à partir du tableau de libellés
function genererListeAvecTirets(libelles) {
    // Générer une liste avec un tiret devant chaque libellé
    return libelles.map((libelle, index) => `${index + 1}) ${libelle}`).join("<br>");
}