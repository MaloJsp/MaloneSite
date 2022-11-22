const PRONOM = ["Je","Tu","Il","Nous","Vous","Ils"]
const TEMPS = ["imparfait","passe simple","futur","conditionnel: Si [...],","subjonctif: Que"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let numPronom
  let numTemp
  let numVerbe
  let verbe 
  let questionnaire = document.getElementById("Questionnaire")
  let input
  let lib

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

let tabRep = Array(25)

fetch("https://malojsp.github.io/MaloneSite/lecon_fr/tests/questions.json")
.then((rep) => rep.json())
.then(function(data){

    for (let i = 0; i < 10; i++) {
        numPronom=getRandomInt(6)
        numTemp=2
        numVerbe=getRandomInt(data.length-1)
        verbe = data[numVerbe]
       //console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
       //console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
       lib = document.createElement("label")
        lib.innerHTML = PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
        lib.style.margin = "10px"
        questionnaire.appendChild(lib)
       input = document.createElement("input")
       input.style.margin = "10px"
       input.id = i
       tabRep[i] = {
        "temp": numTemp,
        "rep": getTemp(verbe,numTemp)[numPronom]
       }
       input.style.color = "black"
       questionnaire.appendChild(input)
    }
    for (let index = 0; index < 25; index++) {
        document.getElementById(index).onclick = function(){
            document.getElementById(index).style.color = "black"
        }
        
    }
})
let e
document.getElementById("valide").onclick = function(){
    let value
    e = document.getElementById("Resultats")
    var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    for (let index = 0; index < tabRep.length; index++) {
        value = document.getElementById(index).value
        console.log(value)
        console.log(tabRep[index])
        tabRep[index]["valide"] = value == tabRep[index].rep
        if(value == tabRep[index].rep){
            document.getElementById(index).style.color = "green"
        }else{
            document.getElementById(index).style.color = "red"
        }

    }
}