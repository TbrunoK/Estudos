# classList
  Retorna uma lista com as classes do elemento. Permite adicionar remover e verificar se contém.

const menu = document.querySelector(".menu")
// Adiciona a classe "ativo"
menu.classList.add("ativo")

// Remove a classe "ativo"
menu.classList.remove("ativo")

// Adiciona a classe "ativo" se não existir, remove se existir
menu.classList.toggle("ativo", "azul")

// Verifica se a classe "azul" existe
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul")
} else {
  menu.classList.add("nao-possui-azul")
}

// Abreviação 
// menu.classList += " vermelho"
menu.classList = menu.classList + " vermelho"

console.log(menu.className)

# Atributos 

Retorna uma array-like com os atributos do elemento

