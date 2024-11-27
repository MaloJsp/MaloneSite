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

export function displayQuest(vb,rep,id){
    let mBal = getMainBal()
    mBal.innerHTML += `
        <div id="${rep+vb.rad}">
            <label for="${rep}">
               je ${vb.vb} 
            </label>
            <input type="text" name="${vb.vb}" id="${id}">
        </div>
    `
}



