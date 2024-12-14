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
        vb: "accepter",
        rad: "accept",
        grp: 1
    },
    {
        vb: "acheter",
        rad: "achet",
        grp: 1
    },
    {
        vb: "aider",
        rad: "aid",
        grp: 1
    },
    {
        vb: "aimer",
        rad: "aim",
        grp: 1
    },
    {
        vb: "ajouter",
        rad: "ajout",
        grp: 1
    },
    {
        vb: "appeler",
        rad: "appel",
        grp: 1
    },
    {
        vb: "apporter",
        rad: "apport",
        grp: 1
    },
    {
        vb: "approcher",
        rad: "approch",
        grp: 1
    },
    {
        vb: "appuyer",
        rad: "appuy",
        grp: 1
    },
    {
        vb: "arrêter",
        rad: "arrêt",
        grp: 1
    },
    {
        vb: "arriver",
        rad: "arriv",
        grp: 1
    },
    {
        vb: "assurer",
        rad: "assur",
        grp: 1
    },
    {
        vb: "avancer",
        rad: "avanc",
        grp: 1
    },
    {
        vb: "briller",
        rad: "brill",
        grp: 1
    },
    {
        vb: "brûler",
        rad: "brûl",
        grp: 1
    },
    {
        vb: "cacher",
        rad: "cach",
        grp: 1
    },
    {
        vb: "causer",
        rad: "caus",
        grp: 1
    },
    {
        vb: "cesser",
        rad: "cess",
        grp: 1
    },
    {
        vb: "changer",
        rad: "chang",
        grp: 1
    },
    {
        vb: "chanter",
        rad: "chant",
        grp: 1
    },
    {
        vb: "charger",
        rad: "charg",
        grp: 1
    },
    {
        vb: "chercher",
        rad: "cherch",
        grp: 1
    },
    {
        vb: "commencer",
        rad: "commenc",
        grp: 1
    },
    {
        vb: "compter",
        rad: "compt",
        grp: 1
    },
    {
        vb: "continuer",
        rad: "continu",
        grp: 1
    },
    {
        vb: "coucher",
        rad: "couch",
        grp: 1
    },
    {
        vb: "crier",
        rad: "cri",
        grp: 1
    },
    {
        vb: "décider",
        rad: "décid",
        grp: 1
    },
    {
        vb: "demander",
        rad: "demand",
        grp: 1
    },
    {
        vb: "deviner",
        rad: "devin",
        grp: 1
    },
    {
        vb: "donner",
        rad: "donn",
        grp: 1
    },
    {
        vb: "écouter",
        rad: "écout",
        grp: 1
    },
    {
        vb: "élever",
        rad: "élev",
        grp: 1
    },
    {
        vb: "embrasser",
        rad: "embrass",
        grp: 1
    },
    {
        vb: "emporter",
        rad: "emport",
        grp: 1
    },
    {
        vb: "entrer",
        rad: "entr",
        grp: 1
    },
    {
        vb: "envoyer",
        rad: "envoy",
        grp: 1
    },
    {
        vb: "espérer",
        rad: "espér",
        grp: 1
    },
    {
        vb: "essayer",
        rad: "essay",
        grp: 1
    },
    {
        vb: "exister",
        rad: "exist",
        grp: 1
    },
    {
        vb: "expliquer",
        rad: "expliqu",
        grp: 1
    },
    {
        vb: "exprimer",
        rad: "exprim",
        grp: 1
    },
    {
        vb: "fermer",
        rad: "ferm",
        grp: 1
    },
    {
        vb: "former",
        rad: "form",
        grp: 1
    },
    {
        vb: "frapper",
        rad: "frapp",
        grp: 1
    },
    {
        vb: "gagner",
        rad: "gagn",
        grp: 1
    },
    {
        vb: "garder",
        rad: "gard",
        grp: 1
    },
    {
        vb: "glisser",
        rad: "gliss",
        grp: 1
    },
    {
        vb: "jeter",
        rad: "jet",
        grp: 1
    },
    {
        vb: "jouer",
        rad: "jou",
        grp: 1
    },
    {
        vb: "juger",
        rad: "jug",
        grp: 1
    },
    {
        vb: "lever",
        rad: "lev",
        grp: 1
    },
    {
        vb: "manger",
        rad: "mang",
        grp: 1
    },
    {
        vb: "manquer",
        rad: "manqu",
        grp: 1
    },
    {
        vb: "marcher",
        rad: "march",
        grp: 1
    },
    {
        vb: "monter",
        rad: "mont",
        grp: 1
    },
    {
        vb: "montrer",
        rad: "montr",
        grp: 1
    },
    {
        vb: "nommer",
        rad: "nomm",
        grp: 1
    },
    {
        vb: "occuper",
        rad: "occup",
        grp: 1
    },
    {
        vb: "oublier",
        rad: "oubli",
        grp: 1
    },
    {
        vb: "parler",
        rad: "parl",
        grp: 1
    },
    {
        vb: "passer",
        rad: "pass",
        grp: 1
    },
    {
        vb: "payer",
        rad: "pay",
        grp: 1
    },
    {
        vb: "penser",
        rad: "pens",
        grp: 1
    },
    {
        vb: "placer",
        rad: "plac",
        grp: 1
    },
    {
        vb: "pleurer",
        rad: "pleur",
        grp: 1
    },
    {
        vb: "porter",
        rad: "port",
        grp: 1
    },
    {
        vb: "poser",
        rad: "pos",
        grp: 1
    },
    {
        vb: "posséder",
        rad: "posséd",
        grp: 1
    },
    {
        vb: "pousser",
        rad: "pouss",
        grp: 1
    },
    {
        vb: "préparer",
        rad: "prépar",
        grp: 1
    },
    {
        vb: "présenter",
        rad: "présent",
        grp: 1
    },
    {
        vb: "prier",
        rad: "pri",
        grp: 1
    },
    {
        vb: "prononcer",
        rad: "prononc",
        grp: 1
    },
    {
        vb: "quitter",
        rad: "quitt",
        grp: 1
    },
    {
        vb: "raconter",
        rad: "racont",
        grp: 1
    },
    {
        vb: "rappeler",
        rad: "rappel",
        grp: 1
    },
    {
        vb: "refuser",
        rad: "refus",
        grp: 1
    },
    {
        vb: "regarder",
        rad: "regard",
        grp: 1
    },
    {
        vb: "rencontrer",
        rad: "rencontr",
        grp: 1
    },
    {
        vb: "rentrer",
        rad: "rentr",
        grp: 1
    },
    {
        vb: "répéter",
        rad: "répét",
        grp: 1
    },
    {
        vb: "ressembler",
        rad: "ressembl",
        grp: 1
    },
    {
        vb: "rester",
        rad: "rest",
        grp: 1
    },
    {
        vb: "retourner",
        rad: "retourn",
        grp: 1
    },
    {
        vb: "retrouver",
        rad: "retrouv",
        grp: 1
    },
    {
        vb: "rêver",
        rad: "rêv",
        grp: 1
    },
    {
        vb: "rouler",
        rad: "roul",
        grp: 1
    },
    {
        vb: "sauver",
        rad: "sauv",
        grp: 1
    },
    {
        vb: "sembler",
        rad: "sembl",
        grp: 1
    },
    {
        vb: "tirer",
        rad: "tir",
        grp: 1
    },
    {
        vb: "tomber",
        rad: "tomb",
        grp: 1
    },
    {
        vb: "toucher",
        rad: "touch",
        grp: 1
    },
    {
        vb: "tourner",
        rad: "tourn",
        grp: 1
    },
    {
        vb: "travailler",
        rad: "travaill",
        grp: 1
    },
    {
        vb: "traverser",
        rad: "travers",
        grp: 1
    },
    {
        vb: "tromper",
        rad: "tromp",
        grp: 1
    },
    {
        vb: "trouver",
        rad: "trouv",
        grp: 1
    },
    {
        vb: "tuer",
        rad: "tu",
        grp: 1
    },
    {
        vb: "voler",
        rad: "vol",
        grp: 1
    },
    {
        vb: "voyager",
        rad: "voyag",
        grp: 1
    },
    {
        vb: "saisir",
        rad: "sais",
        grp: 2
    },
    {
        vb: "finir",
        rad: "fin",
        grp: 2
    },
    {
        vb: "grandir",
        rad: "grand",
        grp: 2
    },
    {
        vb: "agir",
        rad: "ag",
        grp: 2
    },
    {
        vb: "agrandir",
        rad: "agrand",
        grp: 2
    },
    {
        vb: "aplatir",
        rad: "aplat",
        grp: 2
    },
    {
        vb: "appauvrir",
        rad: "appauvr",
        grp: 2
    },
    {
        vb: "applaudir",
        rad: "applaud",
        grp: 2
    },
    {
        vb: "approfondir",
        rad: "approfond",
        grp: 2
    },
    {
        vb: "arrondir",
        rad: "arrond",
        grp: 2
    },
    {
        vb: "assortir",
        rad: "assort",
        grp: 2
    },
    {
        vb: "atterir",
        rad: "atter",
        grp: 2
    },
    {
        vb: "avertir",
        rad: "avert",
        grp: 2
    },
    {
        vb: "bannir",
        rad: "bann",
        grp: 2
    },
    {
        vb: "bâtir",
        rad: "bât",
        grp: 2
    },
    {
        vb: "bénir",
        rad: "bén",
        grp: 2
    },
    {
        vb: "choisir",
        rad: "chois",
        grp: 2
    },
    {
        vb: "convertir",
        rad: "convert",
        grp: 2
    },
    {
        vb: "définir",
        rad: "défin",
        grp: 2
    },
    {
        vb: "démolir",
        rad: "démol",
        grp: 2
    },
    {
        vb: "désobéir",
        rad: "désobé",
        grp: 2
    },
    {
        vb: "durcir",
        rad: "durc",
        grp: 2
    },
    {
        vb: "éclaircir",
        rad: "éclairc",
        grp: 2
    },
    {
        vb: "élargir",
        rad: "élarg",
        grp: 2
    },
    {
        vb: "embellir",
        rad: "embell",
        grp: 2
    },
    {
        vb: "enrichir",
        rad: "enrich",
        grp: 2
    },
    {
        vb: "envahir",
        rad: "envah",
        grp: 2
    },
    {
        vb: "épaissir",
        rad: "épaiss",
        grp: 2
    },
    {
        vb: "établir",
        rad: "établ",
        grp: 2
    },
    {
        vb: "fleurir",
        rad: "fleur",
        grp: 2
    },
    {
        vb: "fournir",
        rad: "fourn",
        grp: 2
    },
    {
        vb: "garantir",
        rad: "garant",
        grp: 2
    },
    {
        vb: "gémir",
        rad: "gém",
        grp: 2
    },
    {
        vb: "grossir",
        rad: "gross",
        grp: 2
    },
    {
        vb: "guérir",
        rad: "guér",
        grp: 2
    },
    {
        vb: "investir",
        rad: "invest",
        grp: 2
    },
    {
        vb: "jaillir",
        rad: "jaill",
        grp: 2
    },
    {
        vb: "jaunir",
        rad: "jaun",
        grp: 2
    },
    {
        vb: "maigrir",
        rad: "maigr",
        grp: 2
    },
    {
        vb: "mincir",
        rad: "minc",
        grp: 2
    },
    {
        vb: "moisir",
        rad: "mois",
        grp: 2
    },
    {
        vb: "mûrir",
        rad: "mûr",
        grp: 2
    },
    {
        vb: "noircir",
        rad: "noirc",
        grp: 2
    },
    {
        vb: "nourrir",
        rad: "nourr",
        grp: 2
    },
    {
        vb: "obéir",
        rad: "obé",
        grp: 2
    },
    {
        vb: "pourrir",
        rad: "pourr",
        grp: 2
    },
    {
        vb: "punir",
        rad: "pun",
        grp: 2
    },
    {
        vb: "raccourcir",
        rad: "raccourc",
        grp: 2
    },
    {
        vb: "rafraîchir",
        rad: "rafraîch",
        grp: 2
    },
    {
        vb: "rajeunir",
        rad: "rajeun",
        grp: 2
    },
    {
        vb: "ralentir",
        rad: "ralent",
        grp: 2
    },
    {
        vb: "ramollir",
        rad: "ramoll",
        grp: 2
    },
    {
        vb: "réagir",
        rad: "réag",
        grp: 2
    },
    {
        vb: "réfléchir",
        rad: "réfléch",
        grp: 2
    },
    {
        vb: "refroidir",
        rad: "refroid",
        grp: 2
    },
    {
        vb: "réjouir",
        rad: "réjou",
        grp: 2
    },
    {
        vb: "remplir",
        rad: "rempl",
        grp: 2
    },
    {
        vb: "réunir",
        rad: "réun",
        grp: 2
    },
    {
        vb: "réussir",
        rad: "réuss",
        grp: 2
    },
    {
        vb: "rôtir",
        rad: "rôt",
        grp: 2
    },
    {
        vb: "rougir",
        rad: "roug",
        grp: 2
    },
    {
        vb: "salir",
        rad: "sal",
        grp: 2
    },
    {
        vb: "subir",
        rad: "sub",
        grp: 2
    },
    {
        vb: "surgir",
        rad: "surg",
        grp: 2
    },
    {
        vb: "trahir",
        rad: "trah",
        grp: 2
    },
    {
        vb: "unir",
        rad: "un",
        grp: 2
    },
    {
        vb: "vieillir",
        rad: "vieill",
        grp: 2
    },
    {
        vb: "vomir",
        rad: "vom",
        grp: 2
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
    term = getTerminaison(tp,vb.grp,prsn)
    return vb.rad + term
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






