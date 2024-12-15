import * as Displayer from "./displayer.js"

let terminaisons = {
    "present": [
        ["e","es","e","ons","ez","ent"],
        ["is","is","it","issons","issez","issent"]
    ],
    "imparfait": [
        ["ais","ais","ait","ions","iez","aient"],
        ["ais","ais","ait","ions","iez","aient"]
    ],
    "futur": [
        ["erai","eras","era","erons","erez","eront"],
        ["irai","iras","ira","irons","irez","iront"]
    ],
    "passe": [
        ["ai","as","a","âmes","âtes","èrent"],
        ["is","is","it","îmes","îtes","irent"]
    ],
    "conditionnel": [
        ["erais","erais","erait","erions","eriez","eraient"],
        ["irais","irais","irait","irions","iriez","iraient"]
    ],
    "imperatif": [
        ["e","ons","ez"],
        ["is","issons","issez"]
    ]
}

let vb = [
    {
        vb: "saisir",
        rad: "sais",
        rad_imp: "saisiss",
        grp: 2,
        pp : "saisi",
        pp_id : 2
    },
    {
        vb: "finir",
        rad: "fin",
        rad_imp: "finiss",
        grp: 2,
        pp : "fini",
        pp_id : 2
    },
    {
        vb: "grandir",
        rad: "grand",
        rad_imp: "grandiss",
        grp: 2,
        pp : "grandi",
        pp_id : 2
    },
    {
        vb: "agir",
        rad: "ag",
        rad_imp: "agiss",
        grp: 2,
        pp : "agi",
        pp_id : 2
    },
    {
        vb: "agrandir",
        rad: "agrand",
        rad_imp: "agrandiss",
        grp: 2,
        pp : "agrandi",
        pp_id : 2
    },
    {
        vb: "aplatir",
        rad: "aplat",
        rad_imp: "aplatiss",
        grp: 2,
        pp : "aplati",
        pp_id : 2
    },
    {
        vb: "appauvrir",
        rad: "appauvr",
        rad_imp: "appauvriss",
        grp: 2,
        pp : "appauvri",
        pp_id : 2
    },
    {
        vb: "applaudir",
        rad: "applaud",
        rad_imp: "applaudiss",
        grp: 2,
        pp : "applaudi",
        pp_id : 2
    },
    {
        vb: "approfondir",
        rad: "approfond",
        rad_imp: "approfondiss",
        grp: 2,
        pp : "approfondi",
        pp_id : 2
    },
    {
        vb: "arrondir",
        rad: "arrond",
        rad_imp: "arrondiss",
        grp: 2,
        pp : "arrondi",
        pp_id : 2
    },
    {
        vb: "assortir",
        rad: "assort",
        rad_imp: "assortiss",
        grp: 2,
        pp : "assorti",
        pp_id : 1
    },
    {
        vb: "atterir",
        rad: "atter",
        rad_imp: "atteriss",
        grp: 2,
        pp : "atteri",
        pp_id : 2
    },
    {
        vb: "avertir",
        rad: "avert",
        rad_imp: "avertiss",
        grp: 2,
        pp : "averti",
        pp_id : 2
    },
    {
        vb: "bannir",
        rad: "bann",
        rad_imp: "banniss",
        grp: 2,
        pp : "banni",
        pp_id : 1
    },
    {
        vb: "bâtir",
        rad: "bât",
        rad_imp: "bâtiss",
        grp: 2,
        pp : "bâti",
        pp_id : 2
    },
    {
        vb: "bénir",
        rad: "bén",
        rad_imp: "béniss",
        grp: 2,
        pp : "béni",
        pp_id : 2
    },
    {
        vb: "choisir",
        rad: "chois",
        rad_imp: "choisiss",
        grp: 2,
        pp : "choisi",
        pp_id : 2
    },
    {
        vb: "convertir",
        rad: "convert",
        rad_imp: "convertiss",
        grp: 2,
        pp : "converti",
        pp_id : 2
    },
    {
        vb: "définir",
        rad: "défin",
        rad_imp: "définiss",
        grp: 2,
        pp : "défini",
        pp_id : 2
    },
    {
        vb: "démolir",
        rad: "démol",
        rad_imp: "démoliss",
        grp: 2,
        pp : "démoli",
        pp_id : 2
    },
    {
        vb: "désobéir",
        rad: "désobé",        
        rad_imp: "désobéiss",
        grp: 2,
        pp : "désobéi",
        pp_id : 2
    },
    {
        vb: "durcir",
        rad: "durc",
        rad_imp: "durciss",
        grp: 2,
        pp : "durci",
        pp_id : 1
    },
    {
        vb: "éclaircir",
        rad: "éclairc",
        rad_imp: "éclairciss",
        grp: 2,
        pp : "éclairci",
        pp_id : 2
    },
    {
        vb: "élargir",
        rad: "élarg",
        rad_imp: "élargiss",
        grp: 2,
        pp : "élargi",
        pp_id : 2
    },
    {
        vb: "embellir",
        rad: "embell",
        rad_imp: "embelliss",
        grp: 2,
        pp : "embelli",
        pp_id : 1
    },
    {
        vb: "enrichir",
        rad: "enrich",
        rad_imp: "enrichiss",
        grp: 2,
        pp : "enrichi",
        pp_id : 1
    },
    {
        vb: "envahir",
        rad: "envah",
        rad_imp: "envahiss",
        grp: 2,
        pp : "envahi",
        pp_id : 2
    },
    {
        vb: "épaissir",
        rad: "épaiss",
        rad_imp: "épaississ",
        grp: 2,
        pp : "épaissi",
        pp_id : 2
    },
    {
        vb: "établir",
        rad: "établ",
        rad_imp: "établiss",
        grp: 2,
        pp : "établi",
        pp_id : 2
    },
    {
        vb: "fleurir",
        rad: "fleur",
        rad_imp: "fleuriss",
        grp: 2,
        pp : "fleuri",
        pp_id : 2
    },
    {
        vb: "fournir",
        rad: "fourn",
        rad_imp: "fourniss",
        grp: 2,
        pp : "fourni",
        pp_id : 2
    },
    {
        vb: "garantir",
        rad: "garant",
        rad_imp: "garantiss",
        grp: 2,
        pp : "garanti",
        pp_id : 2
    },
    {
        vb: "gémir",
        rad: "gém",
        rad_imp: "gémiss",
        grp: 2,
        pp : "gémi",
        pp_id : 2
    },
    {
        vb: "grossir",
        rad: "gross",
        rad_imp: "grossiss",
        grp: 2,
        pp : "grossi",
        pp_id : 2
    },
    {
        vb: "guérir",
        rad: "guér",
        rad_imp: "guériss",
        grp: 2,
        pp : "guéri",
        pp_id : 1
    },
    {
        vb: "investir",
        rad: "invest",
        rad_imp: "investiss",
        grp: 2,
        pp : "investi",
        pp_id : 1
    },
    {
        vb: "jaillir",
        rad: "jaill",
        rad_imp: "jailliss",
        grp: 2,
        pp : "jailli",
        pp_id : 2
    },
    {
        vb: "jaunir",
        rad: "jaun",
        rad_imp: "jauniss",
        grp: 2,
        pp : "jauni",
        pp_id : 2
    },
    {
        vb: "maigrir",
        rad: "maigr",
        rad_imp: "maigriss",
        grp: 2,
        pp : "maigri",
        pp_id : 2
    },
    {
        vb: "mincir",
        rad: "minc",
        rad_imp: "minciss",
        grp: 2,
        pp : "minci",
        pp_id : 2
    },
    {
        vb: "moisir",
        rad: "mois",
        rad_imp: "moisiss",
        grp: 2,
        pp : "moisi",
        pp_id : 1
    },
    {
        vb: "mûrir",
        rad: "mûr",
        rad_imp: "mûriss",
        grp: 2,
        pp : "mûri",
        pp_id : 2
    },
    {
        vb: "noircir",
        rad: "noirc",
        rad_imp: "noirciss",
        grp: 2,
        pp : "noirci",
        pp_id : 2
    },
    {
        vb: "nourrir",
        rad: "nourr",
        rad_imp: "nourriss",
        grp: 2,
        pp : "nourri",
        pp_id : 2
    },
    {
        vb: "obéir",
        rad: "obé",
        rad_imp: "obéiss",
        grp: 2,
        pp : "obéi",
        pp_id : 2
    },
    {
        vb: "pourrir",
        rad: "pourr",
        rad_imp: "pourriss",
        grp: 2,
        pp : "pourri",
        pp_id : 2
    },
    {
        vb: "punir",
        rad: "pun",
        rad_imp: "puniss",
        grp: 2,
        pp : "puni",
        pp_id : 1
    },
    {
        vb: "raccourcir",
        rad: "raccourc",
        rad_imp: "raccourciss",
        grp: 2,
        pp : "raccourci",
        pp_id : 2
    },
    {
        vb: "rafraîchir",
        rad: "rafraîch",
        rad_imp: "rafraîchiss",
        grp: 2,
        pp : "rafraîchi",
        pp_id : 1
    },
    {
        vb: "rajeunir",
        rad: "rajeun",
        rad_imp: "rajeuniss",
        grp: 2,
        pp : "rajeuni",
        pp_id : 2
    },
    {
        vb: "ralentir",
        rad: "ralent",
        rad_imp: "ralentiss",
        grp: 2,
        pp : "ralenti",
        pp_id : 2
    },
    {
        vb: "ramollir",
        rad: "ramoll",
        rad_imp: "ramolliss",
        grp: 2,
        pp : "ramolli",
        pp_id : 1
    },
    {
        vb: "réagir",
        rad: "réag",
        rad_imp: "réagiss",
        grp: 2,
        pp : "réagi",
        pp_id : 2
    },
    {
        vb: "réfléchir",
        rad: "réfléch",
        rad_imp: "réfléchiss",
        grp: 2,
        pp : "réfléchi",
        pp_id : 2
    },
    {
        vb: "refroidir",
        rad: "refroid",
        rad_imp: "refroidiss",
        grp: 2,
        pp : "refroidi",
        pp_id : 1
    },
    {
        vb: "réjouir",
        rad: "réjou",
        rad_imp: "réjouiss",
        grp: 2,
        pp : "réjoui",
        pp_id : 1
    },
    {
        vb: "remplir",
        rad: "rempl",
        rad_imp: "rempliss",
        grp: 2,
        pp : "rempli",
        pp_id : 2
    },
    {
        vb: "réunir",
        rad: "réun",
        rad_imp: "réuniss",
        grp: 2,
        pp : "réuni",
        pp_id : 2
    },
    {
        vb: "réussir",
        rad: "réuss",
        rad_imp: "réussiss",
        grp: 2,
        pp : "réussi",
        pp_id : 2
    },
    {
        vb: "rôtir",
        rad: "rôt",
        rad_imp: "rôtiss",
        grp: 2,
        pp : "rôti",
        pp_id : 2
    },
    {
        vb: "rougir",
        rad: "roug",
        rad_imp: "rougiss",
        grp: 2,
        pp : "rougi",
        pp_id : 2
    },
    {
        vb: "salir",
        rad: "sal",
        rad_imp: "saliss",
        grp: 2,
        pp : "sali",
        pp_id : 2
    },
    {
        vb: "subir",
        rad: "sub",
        rad_imp: "subiss",
        grp: 2,
        pp : "subi",
        pp_id : 2
    },
    {
        vb: "surgir",
        rad: "surg",
        rad_imp: "surgiss",
        grp: 2,
        pp : "surgi",
        pp_id : 2
    },
    {
        vb: "trahir",
        rad: "trah",
        rad_imp: "trahiss",
        grp: 2,
        pp : "trahi",
        pp_id : 2
    },
    {
        vb: "unir",
        rad: "un",
        rad_imp: "uniss",
        grp: 2,
        pp : "uni",
        pp_id : 1
    },
    {
        vb: "vieillir",
        rad: "vieill",
        rad_imp: "vieilliss",
        grp: 2,
        pp : "vieilli",
        pp_id : 2
    },
    {
        vb: "vomir",
        rad: "vom",
        rad_imp: "vomiss",
        grp: 2,
        pp : "vomi",
        pp_id : 2
    }
]

window.onload = () => {
    // if (localStorage.getItem("test")){
    //     document.getElementById("btnP").addEventListener('click', () => {
    //         modal.style.display = 'block';
    //     });
    //     testPopup()
    // }
    localStorage.setItem("temps",document.getElementById("exo").classList[0])
    let a = genTest()
    Displayer.displayExo(a)
    localStorage.setItem("reponses",[])
    
}


//Fonction qui récupere la terminaison dans le tableau (confort d'utilisation)
//tp: temps, valeurs possibles: present,imparfait,futur,passe,conditionnel,imperatif
//grp: groupe du verbe, valeurs possibles: 1,2,3 ( si au passé simple accepte aussi 4,5)
//prsn: personne, valeurs possibles: de 1 à 6 
function getTerminaison(tp,grp,prsn) {
    return (terminaisons[tp][grp-1][prsn-1])
}


// Fonction qui renvoie un verbe aléatoire
function getRandVb(){
    return vb[Displayer.getRandomInt(0,vb.length-1)]
}

//Fonction qui renvoie le verbe conjugué
//vb: verbe ( mettre un verbe envoyé par la fonction getRandVb)
//tp: temps, valeurs possibles: present,imparfait,futur,passe,conditionnel,imperatif
//prsn: personne, valeurs possibles: de 1 à 6 
function getConj(vb,tp,prsn){
    let term
    let conj
    term = getTerminaison(tp,vb.grp,prsn)
    if (tp == "imparfait") {
        conj = vb.rad_imp + term
    }else{
        conj = vb.rad + term 
    }
    return conj
}

// genere une liste pour les tests (pour l'instant que 2 pour tester)
function genTest(){
    let tb={}
    let conj
    let vb
    let tp
    let p
    for (let index = 0; index < 10; index++) {
        p = Displayer.getRandomInt(1,6)
        vb = getRandVb()
        conj = getConj(vb,localStorage.getItem("temps"),p)
        tp = localStorage.getItem("temps")
        tb[conj]=[vb,5,tp,p]
    }
    
    localStorage.setItem("corr",JSON.stringify(tb))
    return tb
}

function testPopup(){
    Displayer.displayAlert()
}

// let verb = getRandVb()

//Reste la fonction pour le résultat, reprendre en partie ce qui a été fait 
// On affiche le resultat sur une pop up ( alert ou pop up  )
//temps composé: il faudrait juste adapter les listes et adapter la fonction de traitement
// Test de positionnement: affichage temps conseillé 






