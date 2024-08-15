const square = document.querySelector(".square")
const wrapper = document.querySelector(".wrapper")
const teste = document.querySelector(".hiddenCalculate")

console.log(teste)

function calculateLayout(){
    wrapper.classList.add("hidden")
    teste.classList.add("showCalculate")
    teste.classList.remove("hiddenCalculate")
}