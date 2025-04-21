# classList
  Retorna uma lista com as classes do elemento. Permite adicionar remover e verificar se contém.

 const menu = document.querrySelector(".menu")

menu.className // string
menu.classList // lista de classes
menu.classList.add("ativo") // adiciona a classe ativo
menu.classList.add("ativo", "mobile") // duas classes
menu.classList.remove("ativo") // remove a classe ativo
menu.classList.toggle("ativo") // adiciona ou remove a classe ativo
menu.classList.contains("ativo") // true ou false
menu.classList.replace("ativo", "inativo") // troca a classe ativo por inativo