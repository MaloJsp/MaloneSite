const APIADRESS = "http://localhost:3000/"
// // console.log("OK")
// document.getElementById("save").onclick = ()=>{
//     let lib = document.getElementById("lib").value
//     let rep = document.getElementById("rep").value

// }

// const IPADRESS = 'http://localhost:3000/'
// let httpRequest = new XMLHttpRequest();

// const instance = axios.create({
//     baseURL: APIADRESS,
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });


// axios.get('users')
// .then(function(rep){
//     console.log(rep.data)
// })
// console.log("ok")



let btnSave = document.getElementById("save")
let input = document.getElementById("rep")
input.onclick = function(){
    console.log("truc")
    input.style.color = "white"
}

function testQuestion(rep,input){
    if (input.value == rep) {
        input.style.color = "green"
      }else{
        input.style.color = "red"
      }
}


btnSave.onclick = function(){
  
    let input1 = document.getElementById("rep")
    testQuestion("TEST",input1)
//   if (input.value == "TEST") {
//     input.style.color = "green"
//   }else{
//     input.style.color = "red"
//   }
  
}