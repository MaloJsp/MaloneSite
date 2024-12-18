import * as Displayer from "./displayer.js"
import * as Irreg from "./irreguliers/irreg.js"

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
        grp: 1,
        pp : "accepté",
        pp_id : 2
    },
    {
        vb: "acheter",
        rad: "achet",
        grp: 1,
        pp : "acheté",
        pp_id : 2
    },
    {
        vb: "aider",
        rad: "aid",
        grp: 1,
        pp : "aidé",
        pp_id : 2
    },
    {
        vb: "aimer",
        rad: "aim",
        grp: 1,
        pp : "aimé",
        pp_id : 2
    },
    {
        vb: "ajouter",
        rad: "ajout",
        grp: 1,
        pp : "ajouté",
        pp_id : 2
    },
    {
        vb: "appeler",
        rad: "appel",
        grp: 1,
        pp : "appelé",
        pp_id : 2
    },
    {
        vb: "apporter",
        rad: "apport",
        grp: 1,
        pp : "apporté",
        pp_id : 2
    },
    {
        vb: "approcher",
        rad: "approch",
        grp: 1,
        pp : "approché",
        pp_id : 2
    },
    {
        vb: "appuyer",
        rad: "appuy",
        grp: 1,
        pp : "appuyé",
        pp_id : 2
    },
    {
        vb: "arrêter",
        rad: "arrêt",
        grp: 1,
        pp : "arrêté",
        pp_id : 2
    },
    {
        vb: "arriver",
        rad: "arriv",
        grp: 1,
        pp : "arrivé",
        pp_id : 1
    },
    {
        vb: "assurer",
        rad: "assur",
        grp: 1,
        pp : "assuré",
        pp_id : 2
    },
    {
        vb: "briller",
        rad: "brill",
        grp: 1,
        pp : "brillé",
        pp_id : 2
    },
    {
        vb: "brûler",
        rad: "brûl",
        grp: 1,
        pp : "brûlé",
        pp_id : 2
    },
    {
        vb: "cacher",
        rad: "cach",
        grp: 1,
        pp : "caché",
        pp_id : 1
    },
    {
        vb: "causer",
        rad: "caus",
        grp: 1,
        pp : "causé",
        pp_id : 2
    },
    {
        vb: "cesser",
        rad: "cess",
        grp: 1,
        pp : "cessé",
        pp_id : 2
    },
    {
        vb: "changer",
        rad: "chang",
        grp: 1,
        pp : "changé",
        pp_id : 2
    },
    {
        vb: "chanter",
        rad: "chant",
        grp: 1,
        pp : "chanté",
        pp_id : 2
    },
    {
        vb: "charger",
        rad: "charg",
        grp: 1,
        pp : "chargé",
        pp_id : 2
    },
    {
        vb: "chercher",
        rad: "cherch",
        grp: 1,
        pp : "cherché",
        pp_id : 2
    },
    {
        vb: "compter",
        rad: "compt",
        grp: 1,
        pp : "compté",
        pp_id : 2
    },
    {
        vb: "continuer",
        rad: "continu",
        grp: 1,
        pp : "continué",
        pp_id : 2
    },
    {
        vb: "coucher",
        rad: "couch",
        grp: 1,
        pp : "couché",
        pp_id : 1
    },
    {
        vb: "crier",
        rad: "cri",
        grp: 1,
        pp : "crié",
        pp_id : 2
    },
    {
        vb: "décider",
        rad: "décid",
        grp: 1,
        pp : "décidé",
        pp_id : 2
    },
    {
        vb: "demander",
        rad: "demand",
        grp: 1,
        pp : "demandé",
        pp_id : 2
    },
    {
        vb: "deviner",
        rad: "devin",
        grp: 1,
        pp : "deviné",
        pp_id : 2
    },
    {
        vb: "donner",
        rad: "donn",
        grp: 1,
        pp : "donné",
        pp_id : 2
    },
    {
        vb: "écouter",
        rad: "écout",
        grp: 1,
        pp : "écouté",
        pp_id : 2
    },
    {
        vb: "élever",
        rad: "élev",
        grp: 1,
        pp : "élevé",
        pp_id : 2
    },
    {
        vb: "embrasser",
        rad: "embrass",
        grp: 1,
        pp : "embrassé",
        pp_id : 2
    },
    {
        vb: "emporter",
        rad: "emport",
        grp: 1,
        pp : "emporté",
        pp_id : 2
    },
    {
        vb: "entrer",
        rad: "entr",
        grp: 1,
        pp : "entré",
        pp_id : 1
    },
    {
        vb: "envoyer",
        rad: "envoy",
        grp: 1,
        pp : "envoyé",
        pp_id : 2
    },
    {
        vb: "espérer",
        rad: "espér",
        grp: 1,
        pp : "espéré",
        pp_id : 2
    },
    {
        vb: "essayer",
        rad: "essay",
        grp: 1,
        pp : "essayé",
        pp_id : 2
    },
    {
        vb: "exister",
        rad: "exist",
        grp: 1,
        pp : "existé",
        pp_id : 2
    },
    {
        vb: "expliquer",
        rad: "expliqu",
        grp: 1,
        pp : "expliqué",
        pp_id : 2
    },
    {
        vb: "exprimer",
        rad: "exprim",
        grp: 1,
        pp : "exprimé",
        pp_id : 2
    },
    {
        vb: "fermer",
        rad: "ferm",
        grp: 1,
        pp : "fermé",
        pp_id : 2
    },
    {
        vb: "former",
        rad: "form",
        grp: 1,
        pp : "formé",
        pp_id : 2
    },
    {
        vb: "frapper",
        rad: "frapp",
        grp: 1,
        pp : "frappé",
        pp_id : 2
    },
    {
        vb: "gagner",
        rad: "gagn",
        grp: 1,
        pp : "gagné",
        pp_id : 2
    },
    {
        vb: "garder",
        rad: "gard",
        grp: 1,
        pp : "gardé",
        pp_id : 2
    },
    {
        vb: "glisser",
        rad: "gliss",
        grp: 1,
        pp : "glissé",
        pp_id : 2
    },
    {
        vb: "jeter",
        rad: "jet",
        grp: 1,
        pp : "jeté",
        pp_id : 2
    },
    {
        vb: "jouer",
        rad: "jou",
        grp: 1,
        pp : "joué",
        pp_id : 2
    },
    {
        vb: "juger",
        rad: "jug",
        grp: 1,
        pp : "jugé",
        pp_id : 2
    },
    {
        vb: "lever",
        rad: "lev",
        grp: 1,
        pp : "levé",
        pp_id : 1
    },
    {
        vb: "manger",
        rad: "mang",
        grp: 1,
        pp : "mangé",
        pp_id : 2
    },
    {
        vb: "manquer",
        rad: "manqu",
        grp: 1,
        pp : "manqué",
        pp_id : 2
    },
    {
        vb: "marcher",
        rad: "march",
        grp: 1,
        pp : "marché",
        pp_id : 2
    },
    {
        vb: "monter",
        rad: "mont",
        grp: 1,
        pp : "monté",
        pp_id : 1
    },
    {
        vb: "montrer",
        rad: "montr",
        grp: 1,
        pp : "montré",
        pp_id : 2
    },
    {
        vb: "nommer",
        rad: "nomm",
        grp: 1,
        pp : "nommé",
        pp_id : 1
    },
    {
        vb: "occuper",
        rad: "occup",
        grp: 1,
        pp : "occupé",
        pp_id : 1
    },
    {
        vb: "oublier",
        rad: "oubli",
        grp: 1,
        pp : "oublié",
        pp_id : 2
    },
    {
        vb: "parler",
        rad: "parl",
        grp: 1,
        pp : "parlé",
        pp_id : 2
    },
    {
        vb: "passer",
        rad: "pass",
        grp: 1,
        pp : "passé",
        pp_id : 1
    },
    {
        vb: "payer",
        rad: "pay",
        grp: 1,
        pp : "payé",
        pp_id : 2
    },
    {
        vb: "penser",
        rad: "pens",
        grp: 1,
        pp : "pensé",
        pp_id : 2
    },
    {
        vb: "pleurer",
        rad: "pleur",
        grp: 1,
        pp : "pleuré",
        pp_id : 2
    },
    {
        vb: "porter",
        rad: "port",
        grp: 1,
        pp : "porté",
        pp_id : 2
    },
    {
        vb: "poser",
        rad: "pos",
        grp: 1,
        pp : "posé",
        pp_id : 2
    },
    {
        vb: "posséder",
        rad: "posséd",
        grp: 1,
        pp : "possédé",
        pp_id : 2
    },
    {
        vb: "pousser",
        rad: "pouss",
        grp: 1,
        pp : "poussé",
        pp_id : 2
    },
    {
        vb: "préparer",
        rad: "prépar",
        grp: 1,
        pp : "préparé",
        pp_id : 2
    },
    {
        vb: "présenter",
        rad: "présent",
        grp: 1,
        pp : "présenté",
        pp_id : 2
    },
    {
        vb: "prier",
        rad: "pri",
        grp: 1,
        pp : "prié",
        pp_id : 2
    },
    {
        vb: "quitter",
        rad: "quitt",
        grp: 1,
        pp : "quitté",
        pp_id : 2
    },
    {
        vb: "raconter",
        rad: "racont",
        grp: 1,
        pp : "raconté",
        pp_id : 2
    },
    {
        vb: "rappeler",
        rad: "rappel",
        grp: 1,
        pp : "rappelé",
        pp_id : 2
    },
    {
        vb: "refuser",
        rad: "refus",
        grp: 1,
        pp : "refusé",
        pp_id : 2
    },
    {
        vb: "regarder",
        rad: "regard",
        grp: 1,
        pp : "regardé",
        pp_id : 2
    },
    {
        vb: "rencontrer",
        rad: "rencontr",
        grp: 1,
        pp : "rencontré",
        pp_id : 2
    },
    {
        vb: "rentrer",
        rad: "rentr",
        grp: 1,
        pp : "rentré",
        pp_id : 1
    },
    {
        vb: "répéter",
        rad: "répét",
        grp: 1,
        pp : "répété",
        pp_id : 2
    },
    {
        vb: "ressembler",
        rad: "ressembl",
        grp: 1,
        pp : "ressemblé",
        pp_id : 2
    },
    {
        vb: "rester",
        rad: "rest",
        grp: 1,
        pp : "resté",
        pp_id : 1
    },
    {
        vb: "retourner",
        rad: "retourn",
        grp: 1,
        pp : "retourné",
        pp_id : 2
    },
    {
        vb: "retrouver",
        rad: "retrouv",
        grp: 1,
        pp : "retrouvé",
        pp_id : 2
    },
    {
        vb: "rêver",
        rad: "rêv",
        grp: 1,
        pp : "rêvé",
        pp_id : 2
    },
    {
        vb: "rouler",
        rad: "roul",
        grp: 1,
        pp : "roulé",
        pp_id : 2
    },
    {
        vb: "sauver",
        rad: "sauv",
        grp: 1,
        pp : "sauvé",
        pp_id : 1
    },
    {
        vb: "sembler",
        rad: "sembl",
        grp: 1,
        pp : "semblé",
        pp_id : 2
    },
    {
        vb: "tirer",
        rad: "tir",
        grp: 1,
        pp : "tiré",
        pp_id : 2
    },
    {
        vb: "tomber",
        rad: "tomb",
        grp: 1,
        pp : "tombé",
        pp_id : 1
    },
    {
        vb: "toucher",
        rad: "touch",
        grp: 1,
        pp : "touché",
        pp_id : 2
    },
    {
        vb: "tourner",
        rad: "tourn",
        grp: 1,
        pp : "tourné",
        pp_id : 2
    },
    {
        vb: "travailler",
        rad: "travaill",
        grp: 1,
        pp : "travaillé",
        pp_id : 2
    },
    {
        vb: "traverser",
        rad: "travers",
        grp: 1,
        pp : "traversé",
        pp_id : 2
    },
    {
        vb: "tromper",
        rad: "tromp",
        grp: 1,
        pp : "trompé",
        pp_id : 2
    },
    {
        vb: "trouver",
        rad: "trouv",
        grp: 1,
        pp : "trouvé",
        pp_id : 2
    },
    {
        vb: "tuer",
        rad: "tu",
        grp: 1,
        pp : "tué",
        pp_id : 2
    },
    {
        vb: "voler",
        rad: "vol",
        grp: 1,
        pp : "volé",
        pp_id : 2
    },
    {
        vb: "voyager",
        rad: "voyag",
        grp: 1,
        pp : "voyagé",
        pp_id : 2
    },
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

let auxiliaires = {
    "être": [
        ["suis","es","est","sommes","êtes","sont"],
        ["étais","étais","était","étions","étiez","étaient"]
    ],
    "avoir": [
        ["ai","as","a","avons","avez","ont"],
        ["avais","avais","avait","avions","aviez","avaient"]
    ]
}

const tempslist = ["present","imparfait","futur","passe","conditionnel","imperatif","pc","pqp"]

window.onload = () => {
    // if (localStorage.getItem("test")){
    //     document.getElementById("btnP").addEventListener('click', () => {
    //         modal.style.display = 'block';
    //     });
    //     testPopup()
    // }
    localStorage.setItem("temps",document.getElementById("exo").classList[0])
    if (document.getElementById("exo").classList[1] != undefined) {
        localStorage.setItem("isFinal",true)
    }else{
        localStorage.setItem("isFinal",false)
    }
    let a = genTest()
    Displayer.displayExo(a)
    localStorage.setItem("reponses",[])
    
    
    // Displayer.stylizerQuest()
    // Irreg.getVbRep("futur",5)
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
    
    if (tp == "imparfait" && vb.grp == 2) {
        term = getTerminaison(tp,vb.grp,prsn)
        conj = vb.rad_imp + term
    }else if (tp == "pc" || tp == "pqp") {
        conj = getAux(vb.pp_id,prsn,tp) + " " + vb.pp 
        if(prsn>=3 && vb.pp_id == 1){conj += "s"}
        console.log(conj, "  ",prsn,"  ",vb.pp_id)
    }
    else{
        term = getTerminaison(tp,vb.grp,prsn)
        conj = vb.rad + term 
    }
    return conj
}

// genere une liste pour les tests (pour l'instant que 2 pour tester)
function genTest(){
    let tb={}
    let conj
    let vb
    let tp = localStorage.getItem("temps")
    let p
    let irreg
    if (tp != "all"){
        for (let index = 0; index < 10; index++) {
            if (tp=="imperatif") {
                p = Displayer.getRandomInt(1,3)
            }else{
                p = Displayer.getRandomInt(1,6)
            }
            if (Displayer.getRandomInt(1,3)<3) {
                vb = getRandVb()
                conj = getConj(vb,localStorage.getItem("temps"),p)
            }else{
                irreg = Irreg.getVbRep(tp,p)
                vb = irreg[1]
                conj = irreg[0]
            }
            
            tb[conj]=[vb,tp,p]
            
        }
    }else{
        tempslist.forEach(tpE => {
            
            localStorage.setItem("tpTpf",tpE)
            
            for (let index = 0; index < 4; index++) {
                if (tpE=="imperatif") {
                    p = Displayer.getRandomInt(1,3)
                }else{
                    p = Displayer.getRandomInt(1,6)
                }
                if (index<2) {
                    vb = getRandVb()
                    conj = getConj(vb,localStorage.tpTpf,p)
                }else{
                    irreg = Irreg.getVbRep(localStorage.tpTpf,p)
                    vb = irreg[1]
                    conj = irreg[0]
                }
                
                tb[conj]=[vb,localStorage.tpTpf,p]
                
                
                
            }
        });
    }
    
    localStorage.setItem("corr",JSON.stringify(tb))
    return tb
}



function getAux(aux_id,prsn,tp){
    let aux
    if(aux_id == 1){
        if (tp == "pc") {
            aux = auxiliaires["être"][0][prsn-1]   
        }else{
            aux = auxiliaires["être"][1][prsn-1]
        }
        
    }else{
        if (tp == "pc") {
            aux = auxiliaires["avoir"][0][prsn-1]   
        }else{
            aux = auxiliaires["avoir"][1][prsn-1]
        }
    }

    return aux
}




