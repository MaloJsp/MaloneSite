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
    testQuestion("jouions",input1)
    testQuestion("intéressiez",input2)
    testQuestion("ramène",input3)
    testQuestion("aboutisse",input4)
    testQuestion("agissions",input5)
    testQuestion("subissent",input6)
    testQuestion("doives",input7)
    testQuestion("viennent",input8)
    testQuestion("puisses",input9)
    testQuestion("soyez",input10)
    testQuestion("ait",input11)
    testQuestion("réunisse",input12)
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