import {Modal} from "/js/modal.js"
import {AlertError} from "/js/alert-error.js"
import {notANumber} from "/js/utils.js"
import {IMC} from "/js/utils.js"

// ou >> import {IMC, notANumber} from "/js/utils.js"


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')






form.onsubmit = function(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value
   
    const showAlertError = notANumber(weight) || notANumber(height)
    
    if (showAlertError) {
        AlertError.open()
        return;
    }

   form.oninput = function(event) {
    AlertError.close()
   }
    

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

