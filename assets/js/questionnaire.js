const cpt_question = 0
const PRONOM = ["Je","Tu","Il","Nous","Vous","Ils"]
const TEMPS = ["imparfait","passe-simple","futur","conditionnel: Si [...],","subjonctif: Que"]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getTemp(verbe, numTemp){
    switch (numTemp) {
        case 0:
            return verbe["imparfait"]
            break;

        case 1:
            return verbe["passe_simple"]
            break;

    
        case 2:
            return verbe["futur"]
            break;

        case 3:
            return verbe["conditionnel"]
            break;

        case 4:
            return verbe["subjonctif"]
            break;

    }
}



let numPronom
let numTemp
let numVerbe
let verbe 
let questionnaire = document.getElementById("Questionnaire")
let input
let lib
let tabRep = Array(25)

fetch("https://malojsp.github.io/MaloneSite/lecon_fr/tests/questions.json")
.then((rep) => rep.json())
.then(function(data){

    for (let i = 0; i < 25; i++) {
        if(i<5){
            numPronom=getRandomInt(6)
            numTemp=0
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
            lib = document.createElement("label")
            lib.innerHTML = TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.id = i
           tabRep[i] = {
            "temp": numTemp,
            "rep": getTemp(verbe,numTemp)[numPronom]
           }
           input.style.color = "black"
           questionnaire.appendChild(input)

        }
        if(i>=5 && i<10){
            numPronom=getRandomInt(6)
            numTemp=1
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
           lib = document.createElement("label")
            lib.innerHTML = TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.id = i
           tabRep[i] = {
            "temp": numTemp,
            "rep": getTemp(verbe,numTemp)[numPronom]
           }
           input.style.color = "black"
           questionnaire.appendChild(input)
        }
        if(i>=10 && i<15){
            numPronom=getRandomInt(6)
            numTemp=2
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
           lib = document.createElement("label")
            lib.innerHTML = TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.id = i
           tabRep[i] = {
            "temp": numTemp,
            "rep": getTemp(verbe,numTemp)[numPronom]
           }
           input.style.color = "black"
           questionnaire.appendChild(input)
        }
        if(i>=15 && i<20){
            numPronom=getRandomInt(6)
            numTemp=3
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
           lib = document.createElement("label")
            lib.innerHTML = TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.id = i
           tabRep[i] = {
            "temp": numTemp,
            "rep": getTemp(verbe,numTemp)[numPronom]
           }
           input.style.color = "black"
           questionnaire.appendChild(input)
        }
        if(i>=20 && i<=24){
            numPronom=getRandomInt(6)
            numTemp=4
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
           lib = document.createElement("label")
            lib.innerHTML = TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.id = i
           tabRep[i] = {
            "temp": numTemp,
            "rep": getTemp(verbe,numTemp)[numPronom]
           }
           input.style.color = "black"
           questionnaire.appendChild(input)
        }
        
    }
    
})

document.getElementById("valide").onclick = function(){
    let value
    for (let index = 0; index < tabRep.length; index++) {
        value = document.getElementById(index).value

        tabRep[index]["valide"] = value == tabRep[index].rep
        

    }
}

//let numPronom=getRandomInt(6)
//let numTemp=getRandomInt(5)
//let numVerbe=getRandomInt(data.length-1)
//let verbe = data[numVerbe]
//console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
//console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])






