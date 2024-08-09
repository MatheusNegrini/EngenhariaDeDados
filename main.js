


/* Parte onde se refere à circulo.html */

function calcularRaio() {
    let raio = document.getElementById("raio").value;
    let area = 3.14 * (raio * raio);

    document.getElementById("resultado_raio").innerHTML = `Á área do Círculo é: ${area} cm` 
}

function calcularDiametro(){
    let raio = document.getElementById("raio").value;
    let diametro = raio * 2;
    document.getElementById("resultado_diametro").innerHTML = `O diâmetro do Círculo é: ${diametro} cm`
}