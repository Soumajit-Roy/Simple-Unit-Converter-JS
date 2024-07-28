const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const submitEl = document.getElementById("submit-btn")

function calLength() {
    let num = inputEl.value
    let feet = num*3.28084
    let meter = num*0.3048
    lengthEl.textContent = num + " Meters = " + feet.toFixed(3) + " Feet | "+ num +" Feet = " + meter.toFixed(3) + " Meters"
}

function calvolume() {
    let num = inputEl.value
    let gallons = num*0.264172
    let litres = num*3.785411
    volumeEl.textContent = num + " Litres = " + gallons.toFixed(3) + " Gallons | "+ num +" Gallons = " + litres.toFixed(3) + " Litres"
}

function calmass() {
    let num = inputEl.value
    let pounds = num*2.204622
    let kgs = num*0.453592
    massEl.textContent = num + " Kilograms = " + pounds.toFixed(3) + " Pounds | "+ num +" Pounds = " + kgs.toFixed(3) + " Kilograms"
}

//Function to store all the functions in it
function renderEl(){
    calLength()
    calvolume()
    calmass()
}

submitEl.addEventListener("click",renderEl)