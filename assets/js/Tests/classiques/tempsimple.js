import * as Displayer from "./displayer.js"

let terminaisons = {
    "present": [
        ["e","es","e","ons","ez","ent"],
        ["is","is","it","issons","issez","issent"],
        ["s","s","t","ons","ez","ent"]
    ],
    "imparfait": [
        ["ais","ais","ait","ions","iez","aient"],
        ["ais","ais","ait","ions","iez","aient"],
        ["ais","ais","ait","ions","iez","aient"]
    ],
    "futur": [
        ["erai","eras","era","erons","erez","eront"],
        ["irai","iras","ira","irons","irez","iront"],
        ["rai","ras","ra","rons","rez","ront="]
    ],
    "passe": [
        ["ai","as","a","âmes","âtes","èrent"],
        ["is","is","it","îmes","îtes","irent"],    
        ["is","is","it","îmes","îtes","irent"],
        ["us","us","ut","ûmes","ûtes","urent"],
        ["ins","ins","int","înmes","întes","inrent"]
    ],
    "conditionnel": [
        ["erais","erais","erait","erions","eriez","eraient"],
        ["irais","irais","irait","irions","iriez","iraient"],
        ["rais","rais","rait","rions","riez","raient"]
    ],
    "imperatif": [
        ["e","ons","ez"],
        ["is","issons","issez"],
        ["s","ons","ez"]
    ]
}

let vb = [
    {
        vb: "tester",
        rad: "test",
        grp: 1,
        grpps: 1
    },
    {
        vb: "apercevoir",
        rad: "aperç",
        grp: 3,
        grpps: 4
    }
]


//Fonction qui récupere la terminaison dans le tableau (confort d'utilisation)
//tp: temps, valeurs possibles: present,imparfait,futur,passe,conditionnel,imperatif
//grp: groupe du verbe, valeurs possibles: 1,2,3 ( si au passé simple accepte aussi 4,5)
//prsn: personne, valeurs possibles: de 1 à 6 
function getTerminaison(tp,grp,prsn) {
    return (terminaisons[tp][grp-1][prsn-1])
}

// Fonction utilitaire qui genere un entier entre min et max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction qui renvoie un verbe aléatoire
function getRandVb(){
    return vb[getRandomInt(0,vb.length-1)]
}

//Fonction qui renvoie le verbe conjugué
//vb: verbe ( mettre un verbe envoyé par la fonction getRandVb)
//tp: temps, valeurs possibles: present,imparfait,futur,passe,conditionnel,imperatif
//prsn: personne, valeurs possibles: de 1 à 6 
function getConj(vb,tp,prsn){
    let term
    if (tp == "passe"){
        // console.log(tp)
        term = getTerminaison(tp,vb.grpps,prsn)
    }else{
        term = getTerminaison(tp,vb.grp,prsn)
    }
    return vb.rad + term
}

function genTest(){
    let tb={}
    let conj
    let vb
    let tp
    for (let index = 0; index < 2; index++) {
        console.log("OK")
        vb = getRandVb()
        conj = getConj(vb,"passe",5)
        tp = "passe"
        tb[conj]=[vb,5,tp]
    }
    return tb
}

let a = genTest()
console.log(a)
Displayer.displayExo(a)

// let verb = getRandVb()








