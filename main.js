const square = document.querySelector(".square")
const wrapper = document.querySelector(".wrapper")
const teste = document.querySelector(".hiddenCalculateSquare")
const back = document.querySelector(".backToMenu")
let base = document.querySelector(".inputBase")
let altura = document.querySelector(".inputAltura")
let alturaValue = document.querySelector(".heightSquare")
let baseValue = document.querySelector(".baseSquare")


function calculateLayoutSquare(){
    wrapper.classList.add("hidden")
    teste.classList.add("showCalculateSquare")
    teste.classList.remove("hiddenCalculateSquare")
}

function mainLayout(){
    wrapper.classList.remove("hidden")
    wrapper.classList.add("wrapper")
    teste.classList.add("hiddenCalculateSquare")
    teste.classList.remove("showCalculateSquare")
}


function calcSquare(){
    let isNumberHeight = altura.value
    let isNumberBase = base.value


    function checkIsNumber(){
        return !isNaN(isNumberHeight) && !isNaN(isNumberBase)
    }

    if(altura.value == '' || base.value == ''){
        return alert("Preencha todos os campos")
    } else if(checkIsNumber){
        return alert("Digite apenas números")
    }

    numberCheck = altura.value.split('')
    if(numberCheck.length > 8){
        return alert("Digite um valor com no máximo 8 digitos")
    }
    
    if(alturaValue.innerHTML == 'Altura:'){
    alturaValue.innerHTML = heightSquareNumber
} else {
    alturaValue.innerHTML = ''
    alturaValue.innerHTML = heightSquareNumber
    }
}

if(baseValue.innerHTML == 'Base:'){
    baseValue.innerHTML = baseSquareNumber
} else {
    baseValue.innerHTML = ''
    baseValue.innerHTML = baseSquareNumber
}