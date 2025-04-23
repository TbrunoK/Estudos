const menu = document.querySelector(".menu")
// Adiciona a classe "ativo"
menu.classList.add("ativo") 

// Remove a classe "ativo"
menu.classList.remove("ativo") 

// Adiciona a classe "ativo" se não existir, remove se existir
menu.classList.toggle("ativo", "azul") 

// Verifica se a classe "azul" existe
if (menu.classList.contains("azul"))  {
  menu.classList.add("possui-azul")
}


