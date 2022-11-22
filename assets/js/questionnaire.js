const cpt_question = 0

fetch("questions.json")
.then((rep) => rep.json())
.then((data) => console.log(data))




function setQuestion(){
    console.log("OK")
}
