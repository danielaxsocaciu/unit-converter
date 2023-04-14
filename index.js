/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
let inputEl = document.getElementById("input-el")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass =  document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    lengthInFeet = inputEl.value * 3.281
    lengthInMeters = inputEl.value/ 3.281
    
    volumeInGallons = inputEl.value * 0.264
    volumeInLiters = inputEl.value/0.264
    
    massInPounds = inputEl.value * 2.204
    massInKilograms = inputEl.value/2.204
    
    length.textContent = 
    `${inputEl.value} meters = ${lengthInFeet.toFixed(3)} feet | ${inputEl.value} feet = ${lengthInMeters.toFixed(3)} meters`
    
    volume.textContent = 
    `${inputEl.value} liters = ${volumeInGallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${volumeInLiters.toFixed(3)} liters`
    
    mass.textContent = 
    `${inputEl.value} kilos = ${massInPounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${massInKilograms.toFixed(3)} kilos`
})

resetBtn.addEventListener("click", function(){
    inputEl.value = ""
    length.innerHTML = ` 0 meters = 0 feet | 0 feet = 0 meter`
    volume.innerHTML = ` 0 litres = 0 gallons | 0 gallons = 0 litres`
    mass.innerHTML = ` 0 kilos = 0 pounds | 0 pounds = 0 kilos`
})

