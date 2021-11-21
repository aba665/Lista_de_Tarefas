var small = document.querySelectorAll("div.encima")
var big = document.getElementById("meio")
var to_do = document.getElementById("fazer")
var to_doing = document.getElementById("fazendo")
var to_finished = document.getElementById("feito")
var arr = []
var arr2 = []

function Aumentar(){

    big.style.height = `40vw`
    for(let i = 0; i < 2; i++){
                small[i].style.height = `40vw` 
            }

}
function InserirDados(){
    arr.push(to_do.value)
    var txt = document.createElement("li")
    let imagem = document.createElement("img")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "/image/delete.png")
    first.appendChild(txt)
    txt.innerHTML += `${to_do.value}`
    txt.style.background = `#6088c4fb`
    to_do.value= ""
    to_do.focus()
    txt.appendChild(imagem)

    
}
function InserirDados2(){
    var txt2 = document.createElement("li")
    let imagem = document.createElement("img")
    txt2.setAttribute("class", "oi")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "/image/delete.png")
    imagem.setAttribute("onclick", "trash()")
    txt2.innerHTML = " "
    second.appendChild(txt2)
    txt2.innerHTML += `${to_doing.value}`
    txt2.style.background = `#6088c4fb`
    to_doing.value= ""
    txt2.style.textShadow = `2px 1px 2px black`
    to_doing.focus()
    txt2.appendChild(imagem)
}
function InserirDados3(){
    var txt3 = document.createElement("li")
    let imagem = document.createElement("img")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "/image/delete.png")
    txt3.innerHTML = " "
    third.appendChild(txt3)
    txt3.innerHTML += `${to_finished.value}`
    txt3.style.background = `#6088c4fb`
    to_finished.value= ""
    to_finished.focus()
    txt3.appendChild(imagem)
}

function DeleteBlocoFirst(){

    let blocoFirst = document.getElementById('first')
    blocoFirst.innerHTML = ""

}

function DeleteBlocoSecond(){

     let blocoSecond = document.getElementById('second')
     blocoSecond.innerHTML = ""

}

function DeleteBlocoThird(){

    let blocoThird = document.getElementById('third')
    blocoThird.innerHTML = ""

}
console.log(arr)