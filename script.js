function additionReset() {
    document.getElementById("addNum1").value = 0
    document.getElementById("addNum2").value = 0
    document.getElementById("sum").textContent = 0
}

function substractionReset() {
    document.getElementById("subNum1").value = 0
    document.getElementById("subNum2").value = 0
    document.getElementById("difference").textContent = 0
}

function resetOperations() {
    additionReset()
    substractionReset()
}



function addition() {
    let num1 = +document.getElementById("addNum1").value
    let num2 = +document.getElementById("addNum2").value
    let sum = +num1+num2
    document.getElementById("sum").textContent = sum
    console.log(typeof(num1))
}

function substraction() {
    let num1 = +document.getElementById("subNum1").value
    let num2 = +document.getElementById("subNum2").value
    let difference = +num1-+num2
    document.getElementById("difference").textContent = difference
    console.log(num1)
}

window.onload = resetOperations()

