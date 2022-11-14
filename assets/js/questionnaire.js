const IPADRESS = 'http://localhost:3000/'



httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        let rep = httpRequest.response;
        console.log(rep);
    } else {
        console.log("ALERTE")
}
};

function init() {
    sendRequest('users');

}


function sendRequest(route) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', IPADRESS & route, true);
    httpRequest.responseType = 'json';
    httpRequest.send();
}