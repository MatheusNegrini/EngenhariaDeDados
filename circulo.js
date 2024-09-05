const circle = document.querySelector(".circle");
const testeCircle = document.querySelector(".hiddenCalculateCircle");
let raio = document.querySelector(".inputRaio");
let raioValue = document.querySelector(".radiusCircle");

function calculateLayoutCircle() {
    wrapper.classList.add("hidden");
    testeCircle.classList.add("showCalculateCircle");
    testeCircle.classList.remove("hiddenCalculateCircle");
}

function calcCircle() {
    let isNumberRadius = raio.value;

    function checkIsNumber() {
        return !isNaN(isNumberRadius);
    }

    if (raio.value === '') {
        return alert("Preencha todos os campos");
    } else if (!checkIsNumber()) {
        return alert("Digite apenas números");
    }

    let numberCheck = raio.value.split('');
    if (numberCheck.length > 8) {
        return alert("Digite um valor com no máximo 8 dígitos");
    }

    raioValue.innerHTML = `Raio: ${raio.value}`;

    let area = Math.PI * Math.pow(raio.value, 2);
    document.querySelector(".areaCircle").innerHTML = `Área: ${area.toFixed(2)}`;
}
