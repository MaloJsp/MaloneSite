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

function displayQuest(vb,rep,id){
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

// nb question exo classiques: 10
//                       Test: 20
// [
// {rep:[vb,prsn]}
// ]
export function displayExo(lsvb){
    let count = 0
    Object.entries(lsvb).forEach(([rep, verb]) => {
        console.log(verb[0].vb)
        count++;
        displayQuest(verb[0], rep, count);
    });
}


