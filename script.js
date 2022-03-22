const text = document.getElementById('text')

let torres = document.getElementById("torres")
function createLine (torre){
    let temp
    temp = torre+""
torre = document.createElement("div")
torres.appendChild(torre)
torre.setAttribute("class",temp)
return torre
}
let começo 
let meio
let fim
começo = createLine("começo")
meio = createLine("meio")
fim = createLine ("fim")

function criarDisco(num){
let disco
let temp = "disco"+num
disco = document.createElement("div")
começo.appendChild(disco)
disco.setAttribute("class",temp)
return disco
}
let disco1
let disco2
let disco3
let disco4
let disco5
disco5 = criarDisco("5")
disco4 = criarDisco("4")
disco3 = criarDisco("3")
disco2 = criarDisco("2")
disco1 = criarDisco("1")
let hide = document.getElementById("hide")
hide.appendChild(disco5)

let jogadas = document.getElementById("jogadas")
let numeroJogadas = 0
jogadas.textContent=numeroJogadas
//criar function para o event
let seleçao = document.getElementById("selection")


começo.addEventListener('click', function moverDisco(){  
    let temp
    let temp2
    let tamanhoSeleçao
    let tamanhoUltimoDisco
    
    if (seleçao.childElementCount===0){
        temp = começo.lastElementChild
        seleçao.appendChild(temp)}
    else if (seleçao.childElementCount > 0){
        temp = seleçao.lastElementChild
        tamanhoSeleçao = temp.clientWidth
        if (começo.childElementCount > 0){
            console.log(começo.childElementCount)
        temp2 =começo.lastElementChild
        tamanhoUltimoDisco = temp2.clientWidth
        console.log(tamanhoUltimoDisco)
            if (tamanhoSeleçao>tamanhoUltimoDisco){return}
        }
        começo.appendChild(temp)
        numeroJogadas++
        jogadas.textContent=numeroJogadas
    }
})
meio.addEventListener('click', function moverDisco2(){  
    let temp    
    let temp2
    let tamanhoSeleçao
    let tamanhoUltimoDisco
    if (seleçao.childElementCount===0){
        temp = meio.lastElementChild
        seleçao.appendChild(temp)}
    else if (seleçao.childElementCount > 0){
        temp = seleçao.lastElementChild
        tamanhoSeleçao = temp.clientWidth
        if (meio.childElementCount > 0){
        temp2 = meio.lastElementChild
        tamanhoUltimoDisco = temp2.clientWidth
            if (tamanhoSeleçao>tamanhoUltimoDisco){return}
        }
        meio.appendChild(temp)
        numeroJogadas++
        jogadas.textContent=numeroJogadas
    
}})
fim.addEventListener('click', function moverDisco3(){  
    let temp = fim.lastElementChild
   
    if (seleçao.childElementCount===0){
        temp = fim.lastElementChild
        seleçao.appendChild(temp)}
    else if (seleçao.childElementCount > 0){
        temp = seleçao.lastElementChild
        tamanhoSeleçao = temp.clientWidth
        if (fim.childElementCount > 0){
        temp2 = fim.lastElementChild
        tamanhoUltimoDisco = temp2.clientWidth
            if (tamanhoSeleçao>tamanhoUltimoDisco){return}
        }
        fim.appendChild(temp)
        numeroJogadas++
        jogadas.textContent=numeroJogadas
    
}
// condição de vitoria
let numeroFora = hide.childElementCount
if(fim.childElementCount === 5 && numeroFora===0 ){
    text.style.display = 'block' 
    
}
if(fim.childElementCount === 4 && numeroFora === 1){
    text.style.display = 'block' 
    
}
if(fim.childElementCount === 3 && numeroFora ===2 ){
    text.style.display = 'block' 
    
}



})

let movimento = document.getElementById('text')

let reset = document.getElementById("reset")
reset.addEventListener("click",function resetGame(){
hide.appendChild(disco5)
começo.appendChild(disco4)
começo.appendChild(disco3)
começo.appendChild(disco2)
começo.appendChild(disco1)
numeroJogadas = 0
        jogadas.textContent=numeroJogadas
        text.style.display = 'none' 
return
})

let facil = document.getElementById("facil")
facil.addEventListener("click", function modoFacil(){
    hide.appendChild(disco5)
    hide.appendChild(disco4)
    começo.appendChild(disco3)
    começo.appendChild(disco2)
    começo.appendChild(disco1)
    numeroJogadas = 0
    jogadas.textContent=numeroJogadas
    text.style.display = 'none' 

})
let medio = document.getElementById("medio")
medio.addEventListener("click",function modoMedio(){
começo.appendChild(disco4)
começo.appendChild(disco3)
começo.appendChild(disco2)
começo.appendChild(disco1)
hide.appendChild(disco5)
numeroJogadas = 0
        jogadas.textContent=numeroJogadas
        text.style.display = 'none' 
return
})
let dificil = document.getElementById("dificil")
dificil.addEventListener("click",function modoDificil(){
começo.appendChild(disco5)
começo.appendChild(disco4)
começo.appendChild(disco3)
começo.appendChild(disco2)
começo.appendChild(disco1)
numeroJogadas = 0
        jogadas.textContent=numeroJogadas
        text.style.display = 'none' 
return
})


  
