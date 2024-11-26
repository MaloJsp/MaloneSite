// on peux utiliser une fonction pas export dans une export pour eviter d'avoir toutes les fonctions exportées.
// function testeur(){
//     console.log("It works")
// }

// export function testeurnonexport(){
//     testeur()
// }

function getMainBal(){
    return document.getElementById("exo")
}

export function testdisp(){
    getMainBal().innerText = "IT WORKS!!!"
}
