const square = document.querySelector(".square")
const wrapper = document.querySelector(".wrapper")
const teste = document.querySelector(".hiddenCalculateSquare")

console.log(teste)

function calculateLayoutSquare(){
    wrapper.classList.add("hidden")
    teste.classList.add("showCalculateSquare")
    teste.classList.remove("hiddenCalculateSquare")
}