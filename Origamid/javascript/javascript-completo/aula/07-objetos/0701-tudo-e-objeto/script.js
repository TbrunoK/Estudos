var nome = "Bruno"

var nomeMinusculo = nome.toLowerCase()

var altura = 1.8

altura.toString()

// # Elementos do DOM

var btn = document.querySelector(".btn")

btn.classList.add("azul") // adiciona a classe azul
btn.innerText // "Clique"
btn.addEventListener("click", function () {
  console.log("Clicou")
})
