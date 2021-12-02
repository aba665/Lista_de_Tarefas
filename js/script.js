var small = document.querySelectorAll("div.encima")
var up1 = document.getElementById("up1")
var up2 = document.getElementById("up2")
var big = document.getElementById("meio")
var to_do = document.getElementById("fazer")
var to_doing = document.getElementById("fazendo")
var to_finished = document.getElementById("feito")

//Pega os itens armazenados

  const tarefas = JSON.parse(localStorage.getItem('list_tarefas'))
  const tarefas2 = JSON.parse(localStorage.getItem('list'))
  const tarefas3 = JSON.parse(localStorage.getItem('list3'))

window.addEventListener('resize', function(){

    if (window.innerWidth < 750) {
        big.style.height = `90vw`
        up1.style.height = `90vw`
        up2.style.height = `90vw`
    } else {
        big.style.height = `40vw`
            for(let i = 0; i < 2; i++){
                        small[i].style.height = `40vw` 
                    }
    }

})
// Aumenta o tamanho dos blocos de tarefas, poderia ser feito com css tb.

// function Aumentar(){
   
//     big.style.height = `40vw`
//     for(let i = 0; i < 2; i++){
//                 small[i].style.height = `40vw` 
//             }
    

// }

//Função para criar  e percorrer os items da tarefa criados no primeiro bloco 

function mostrarTarefas(){
    first.innerHTML = ''

    for(item of tarefas){
        var txt = document.createElement("li")
        var itemText = document.createTextNode(item)
        let imagem = document.createElement("img")
        imagem.setAttribute("id", "imginside")
        imagem.setAttribute("src", "image/delete.png")
        to_do.value = ''
        txt.style.background = `#6088c4fb`
        to_do.focus()
        txt.appendChild(itemText)
        txt.appendChild(imagem)
        first.appendChild(txt)

        const pos = tarefas.indexOf(item)
        imagem.setAttribute("onclick", `removeTarefa(${pos})`)
        }
}

//Mostrar os dados salvos ao carregar a página

mostrarTarefas()
mostrarTarefas2()
mostrarTarefas3()

// Criar o item da tarefa no primeiro bloco. 

function InserirDados(){
    const tarefa = to_do.value

    tarefas.push(tarefa)

   
    mostrarTarefas()
    saveLocal()
}

//Função para criar  e percorrer os items da tarefa criados no segundo bloco 

function mostrarTarefas2(){
    second.innerHTML = ''

    for(item2 of tarefas2){
        var txt2 = document.createElement("li")
        var itemText2 = document.createTextNode(item2)
        let imagem2 = document.createElement("img")
        imagem2.setAttribute("id", "imginside")
        imagem2.setAttribute("src", "image/delete.png")
        to_doing.value = ''
        txt2.style.background = `#6088c4fb`
        to_doing.focus()
        txt2.appendChild(itemText2)
        txt2.appendChild(imagem2)
        second.appendChild(txt2)

        const pos2 = tarefas2.indexOf(item2)
        imagem2.setAttribute("onclick", `removeTarefa2(${pos2})`)
        }
} 


// Criar o item da tarefa no segundo bloco.

function InserirDados2(){
    const tarefa2 = to_doing.value

    tarefas2.push(tarefa2)

   
    mostrarTarefas2()
    saveLocal()
}

//Função para criar  e percorrer os items da tarefa criados no terceiro bloco 

function mostrarTarefas3(){
    third.innerHTML = ''

    for(item3 of tarefas3){
        var txt3 = document.createElement("li")
        var itemText3 = document.createTextNode(item3)
        let imagem3 = document.createElement("img")
        imagem3.setAttribute("id", "imginside")
        imagem3.setAttribute("src", "image/delete.png")
        to_finished.value = ''
        txt3.style.background = `#6088c4fb`
        to_finished.focus()
        txt3.appendChild(itemText3)
        txt3.appendChild(imagem3)
        third.appendChild(txt3)

        const pos3 = tarefas3.indexOf(item3)
        imagem3.setAttribute("onclick", `removeTarefa3(${pos3})`)
        }
} 

// Criar o item da tarefa no terceiro bloco. 

function InserirDados3(){

    const tarefa3 = to_finished.value

    tarefas3.push(tarefa3)

   
    mostrarTarefas3()
    saveLocal()
}

//remove a tarefa(s) do primeiro bloco e do localstorage também

function removeTarefa(pos){
    tarefas.splice(pos, 1)
    mostrarTarefas()
    saveLocal()
} 

//remove a tarefa(s) do segundo bloco e do localstorage também

function removeTarefa2(pos2){
    tarefas2.splice(pos2, 1)
    mostrarTarefas2()
    saveLocal()
} 

//remove a tarefa(s) do terceiro bloco e do localstorage também

function removeTarefa3(pos3){
    tarefas3.splice(pos3, 1)
    mostrarTarefas3()
    saveLocal()
} 

//Armazenar os dados de cada bloco

function saveLocal(){
    localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
    localStorage.setItem('list', JSON.stringify(tarefas2))
    localStorage.setItem('list3', JSON.stringify(tarefas3))
}

