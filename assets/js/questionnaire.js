const IPADRESS = 'http://localhost:3000/'
let httpRequest = new XMLHttpRequest();
// localStorage.setItem("name","BOB")
init()

// document.getElementById("SelectEleves").onchange = (val)=>{
//     setNameLocalStorage(val)
// }

function setNameLocalStorage(name) {
    console.log(name)
    localStorage.setItem("name",name)
}

document.getElementById("SelectEleves").addEventListener("onchange")

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        let rep = httpRequest.response;
        console.log(rep);
        let select = document.getElementById("SelectEleves")
        for (let index = 0; index < rep.length; index++) {
            opt = document.createElement("option")
            opt.text = rep[index].name
            opt.value = rep[index].id
                
            select.add(opt,null)            
        }
        
    } else {
        console.log("ALERTE")
}
};

function init() {
    sendRequest('users');

}


function sendRequest(route) {

    httpRequest.open('GET', IPADRESS + route, true);
    httpRequest.responseType = 'json';
    httpRequest.send();
    
}
