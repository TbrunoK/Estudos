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

# getAttribute e setAttribute

Método que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector("img")

img.getAttribute("src"); // valor do src
img.setAtrribute("alt", "texto alternativo") // muda o alt
img.hasAttribute("id") // true / false
img.removeAttribute("alt") // remove o alt

img.hasAttribute() // true / false se tem algum atributo

# Read Only vs writable

Existem propriedades que não permitem mudanças de seus valores, essas são consideradas Read Only, ou seja apenas leitura

animais.className; // string com o nome das classes
animais.className; = "azul" // substitui completamente a String
animais.className += " vermelho" // adiciona a classe vermelho

animais.attribute = "class-ativo" // não funciona, read-only

*Lembrando que podemos modificar o valor de uma propriedade objeto.propriedade = ""