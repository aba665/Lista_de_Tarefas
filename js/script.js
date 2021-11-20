var small = document.querySelectorAll("div.encima")
var big = document.getElementById("meio")
var to_do = document.getElementById("fazer")
var to_doing = document.getElementById("fazendo")
var to_finished = document.getElementById("feito") 

function Diminuir(){

    for(let i = 0; i < 2; i++){
        small[i].style.height = `30vw` 
    }

}
function leave(){

    for(let i = 0; i < 2; i++){
        small[i].style.height = `40vw` 
    }

 }

function Aumentar(){

    big.style.height = `40vw`
    console.log("oi")

}
function MediumSmall(){

    big.style.height = `32vw`
    console.log("oi")


}
function InserirDados(){
    let txt = document.createElement("p")
    txt.innerHTML = " "
    first.appendChild(txt)
    txt.innerHTML += `${to_do.value}`
    txt.style.background = `white`
    to_do.value= ""
    to_do.focus()
}
function InserirDados2(){
    let txt2 = document.createElement("p")
    txt2.innerHTML = " "
    second.appendChild(txt2)
    txt2.innerHTML += `${to_doing.value}`
    txt2.style.background = `white`
    to_doing.value= ""
    to_doing.focus()
}
function InserirDados3(){
    let txt3 = document.createElement("p")
    txt3.innerHTML = " "
    third.appendChild(txt3)
    txt3.innerHTML += `${to_finished.value}`
    txt3.style.background = `white`
    to_finished.value= ""
    to_finished.focus()

}