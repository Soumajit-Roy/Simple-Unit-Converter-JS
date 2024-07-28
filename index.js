const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")
const volumeEl = document.getElementById("volume-el")
const submitEl = document.getElementById("submit-btn")

function calLength() {
    let num = inputEl.value
    let feet = num*3.28084
    let meter = num*0.3048
    lengthEl.textContent = feet.toFixed(3) + " | " + meter.toFixed(3)
}


//Function to store all the functions in it
function renderEl(){
    calLength()
}

submitEl.addEventListener("click",renderEl)