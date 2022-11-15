const IPADRESS = 'http://localhost:3000/'
let httpRequest = new XMLHttpRequest();



fetch(IPADRESS + "questions")
.then(function(rep){
    return rep.json()
})
.then(function(blob){
    console.log(blob)
})

console.log("OK")



