const botao = document.querySelector(".botao")

function mostrar() {
  const texto = document.querySelector(".texto")
  texto.classList.toggle("ativar")
}

botao.addEventListener("click", mostrar)
