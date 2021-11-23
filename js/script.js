var small = document.querySelectorAll("div.encima")
var big = document.getElementById("meio")
var to_do = document.getElementById("fazer")
var to_doing = document.getElementById("fazendo")
var to_finished = document.getElementById("feito")
var arr = []

// Aumenta o tamanho dos blocos de tarefas, poderia ser feito com css tb.

function Aumentar(){
    
    big.style.height = `40vw`
    for(let i = 0; i < 2; i++){
                small[i].style.height = `40vw` 
            }

}

// Criar o item da tarefa no primeiro bloco. 

function InserirDados(){
   
    var txt = document.createElement("li")
    let imagem = document.createElement("img")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "image/delete.png")
    first.appendChild(txt)
    txt.innerHTML += `${to_do.value}`
    arr.push(txt)
    txt.style.background = `#6088c4fb`
    to_do.value= ""
    to_do.focus()
    txt.appendChild(imagem)

//Aqui eu percorro todos os itens e removo ao escolher 1. busca o indice do item para a remoção.

    const close = document.querySelectorAll('#imginside')
    for(let i = 0; i <  close.length; i++){
        close[i].addEventListener('click', () =>{
            close[i].parentElement.remove()
        })
}   
}

// Criar o item da tarefa no segundo bloco.

function InserirDados2(){

    var txt2 = document.createElement("li")
    let imagem = document.createElement("img")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "image/delete.png")
    txt2.innerHTML = " "
    second.appendChild(txt2)
    txt2.innerHTML += `${to_doing.value}`
    txt2.style.background = `#6088c4fb`
    to_doing.value= ""
    txt2.style.textShadow = `2px 1px 2px black`
    to_doing.focus()
    txt2.appendChild(imagem)

    //Aqui eu percorro todos os itens e removo ao escolher 1. busca o indice do item para a remoção.

    const close = document.querySelectorAll('#imginside')
    for(let i = 0; i <  close.length; i++){

        close[i].addEventListener('click', () =>{

            close[i].parentElement.remove()

        })
    }
}

//Criar o item da tarefa no terceiro bloco.

function InserirDados3(){

    var txt3 = document.createElement("li")
    let imagem = document.createElement("img")
    imagem.setAttribute("id", "imginside")
    imagem.setAttribute("src", "image/delete.png")
    txt3.innerHTML = " "
    third.appendChild(txt3)
    txt3.innerHTML += `${to_finished.value}`
    txt3.style.background = `#6088c4fb`
    to_finished.value= ""
    to_finished.focus()
    txt3.appendChild(imagem)

    //Aqui eu percorro todos os itens e removo ao escolher 1. busca o indice do item para a remoção.

    const close = document.querySelectorAll('#imginside')
    for(let i = 0; i <  close.length; i++){
        close[i].addEventListener('click', () =>{

            close[i].parentElement.remove()

        })
    }
}

//Aqui dou um valor vazio para o primeiro bloco no delete 

function DeleteBlocoFirst(){

    let blocoFirst = document.getElementById('first')
    blocoFirst.innerHTML = ""

}

//Aqui dou um valor vazio para o segundo bloco no delete 

function DeleteBlocoSecond(){

     let blocoSecond = document.getElementById('second')
     blocoSecond.innerHTML = ""

}

//Aqui dou um valor vazio para o terceiro bloco no delete 

function DeleteBlocoThird(){

    let blocoThird = document.getElementById('third')
    blocoThird.innerHTML = ""

}