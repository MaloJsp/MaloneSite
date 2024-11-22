let btnVerif = document.getElementById("verif")
let input1 = document.getElementById("rep1")
let input2 = document.getElementById("rep2")
let input3 = document.getElementById("rep3")
let input4 = document.getElementById("rep4")
let input5 = document.getElementById("rep5")
let input6 = document.getElementById("rep6")
let input7 = document.getElementById("rep7")
let input8 = document.getElementById("rep8")
let input9 = document.getElementById("rep9")
let input10 = document.getElementById("rep10")
let input11 = document.getElementById("rep11")
let input12 = document.getElementById("rep12")

btnVerif.onclick = function(){
    testQuestion("marchais",input1)
    testQuestion("approchiez",input2)
    testQuestion("incitaient",input3)
    testQuestion("nourrissais",input4)
    testQuestion("définissaient",input5)
    testQuestion("choisissait",input6)
    testQuestion("avait",input7)
    testQuestion("faisais",input8)
    testQuestion("croyions",input9)
    testQuestion("commençait",input10)
    testQuestion("étaient",input11)
    testQuestion("interrogeait",input12)
}

function testQuestion(rep,input){
  if (input.value == rep) {
      input.style.color = "green"
    }else{
      input.style.color = "red"
    }
}



input1.onclick = function(){
  input1.style.color = "white"
}

input2.onclick = function(){
  input2.style.color = "white"
}

input3.onclick = function(){
  input3.style.color = "white"
}

input4.onclick = function(){
  input4.style.color = "white"
}

input5.onclick = function(){
  input5.style.color = "white"
}

input6.onclick = function(){
  input6.style.color = "white"
}

input7.onclick = function(){
  input7.style.color = "white"
}

input8.onclick = function(){
  input8.style.color = "white"
}

input9.onclick = function(){
  input9.style.color = "white"
}

input10.onclick = function(){
  input10.style.color = "white"
}

input11.onclick = function(){
  input11.style.color = "white"
}

input12.onclick = function(){
  input12.style.color = "white"
}