const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick(event) {
    event.preventDefault() //não faça o padrão


    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
    
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
        
   
    }

    inputNumber.value = "" //zera
    xAttempts++

    
}

//Events

const btnTry = document.querySelector ("#btnTry")
const btnAgain = document.querySelector ("#btnAgain")


//Função callback

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', function (){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

})

