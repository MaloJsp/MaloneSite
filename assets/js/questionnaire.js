const cpt_question = 0

fetch("https://malojsp.github.io/MaloneSite/lecon_fr/tests/questions.json")
.then((rep) => rep.json())
.then(function(data){
    data.forEach(element => {
        console.log(element)
    });
})






