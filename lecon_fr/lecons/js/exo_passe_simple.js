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

fetch("https://malojsp.github.io/MaloneSite/lecon_fr/tests/questions.json")
.then((rep) => rep.json())
.then(function(data){

    for (let i = 0; i < 10; i++) {
            numPronom=getRandomInt(6)
            numTemp=1
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]

            lib = document.createElement("label")
            lib.innerHTML = PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")"
            questionnaire.appendChild(lib)
           input = document.createElement("input")
           input.value = getTemp(verbe,numTemp)[numPronom]
           input.style.color = "black"
           questionnaire.appendChild(input)
        }
})