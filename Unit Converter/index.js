let valueBox = document.getElementById("unit-value")
let convLength = document.getElementById("conv-length")
let convVolume = document.getElementById("conv-volume")
let convMass = document.getElementById("conv-mass")
let convertBtn = document.getElementById("convert-btn")

let input = valueBox.value

function converted() {
        convLength.innerHTML = 
        `${valueBox.value} meters = ${(valueBox.value * 3.281).toFixed(2)} feet | 
        ${valueBox.value} feet = ${(valueBox.value * 0.305).toFixed(2)} meters`
        
        convVolume.innerHTML = 
        `${valueBox.value} liters = ${(valueBox.value * 0.264).toFixed(2)} gallons | 
        ${valueBox.value} gallons = ${(valueBox.value * 3.788).toFixed(2)} liters`
        convMass.innerHTML = 
        `${valueBox.value} kilos = ${(valueBox.value * 2.204).toFixed(2)} pounds | 
        ${valueBox.value} pounds = ${(valueBox.value * 0.454).toFixed(2)} kilos`
}
