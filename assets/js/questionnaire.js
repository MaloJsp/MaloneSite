const IPADRESS = 'http://localhost:3000/'
let httpRequest = new XMLHttpRequest();
//sendRequest("users");
init()
// httpRequest.open('GET', IPADRESS + "users", true);
// console.log(IPADRESS + "users")
// httpRequest.responseType = 'json';
// httpRequest.send();


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