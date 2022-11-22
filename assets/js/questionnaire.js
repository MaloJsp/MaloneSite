const cpt_question = 0
const PRONOM = ["Je","Tu","Il","Nous","Vous","Ils"]
const TEMPS = ["imparfait","passe_simple","futur","conditionnel: Si [...],","subjonctif: Que"]

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

fetch("https://malojsp.github.io/MaloneSite/lecon_fr/tests/questions.json")
.then((rep) => rep.json())
.then(function(data){
    console.log(data)

    for (let i = 0; i < 25; i++) {
        console.log(i)
        if(i<5){
            numPronom=getRandomInt(6)
            numTemp=0
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
        }
        if(i>=5 && i<10){
            numPronom=getRandomInt(6)
            numTemp=1
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
        }
        if(i>=10 && i<15){
            numPronom=getRandomInt(6)
            numTemp=2
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
        }
        if(i>=15 && i<20){
            numPronom=getRandomInt(6)
            numTemp=3
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
        }
        if(i>=20 && i<=24){
            numPronom=getRandomInt(6)
            numTemp=4
            numVerbe=getRandomInt(data.length-1)
            verbe = data[numVerbe]
           console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
           console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])
        }
        
    }

})

//let numPronom=getRandomInt(6)
//let numTemp=getRandomInt(5)
//let numVerbe=getRandomInt(data.length-1)
//let verbe = data[numVerbe]
//console.log(TEMPS[numTemp]+ " " +PRONOM[numPronom] + " ("+ verbe["infinitif"] + ")" )
//console.log("Réponse: " + getTemp(verbe,numTemp)[numPronom])






