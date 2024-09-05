const square = document.querySelector(".square");
const wrapper = document.querySelector(".wrapper");
const testeSquare = document.querySelector(".hiddenCalculateSquare");
const back = document.querySelector(".backToMenu");
let base = document.querySelector(".inputBase");
let altura = document.querySelector(".inputAltura");
let alturaValue = document.querySelector(".heightSquare");
let baseValue = document.querySelector(".baseSquare");

function calculateLayoutSquare() {
    wrapper.classList.add("hidden");
    testeSquare.classList.add("showCalculateSquare");
    testeSquare.classList.remove("hiddenCalculateSquare");
}

function mainLayout() {
    wrapper.classList.remove("hidden");
    wrapper.classList.add("wrapper");
    testeSquare.classList.add("hiddenCalculateSquare");
    testeSquare.classList.remove("showCalculateSquare");
}

function calcSquare() {
    let isNumberHeight = altura.value;
    let isNumberBase = base.value;

    function checkIsNumber() {
        return !isNaN(isNumberHeight) && !isNaN(isNumberBase);
    }

    if (altura.value === '' || base.value === '') {
        return alert("Preencha todos os campos");
    } else if (!checkIsNumber()) {
        return alert("Digite apenas números");
    }

    let numberCheck = altura.value.split('');
    if (numberCheck.length > 8) {
        return alert("Digite um valor com no máximo 8 dígitos");
    }

    alturaValue.innerHTML = `Altura: ${altura.value}`;
    baseValue.innerHTML = `Base: ${base.value}`;

    let area = altura.value * base.value;
    document.querySelector(".areaSquare").innerHTML = `Área: ${area}`;
}
