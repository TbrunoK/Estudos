# Document object model (DOM)

É uma interface que representa documentos HTML e XML através de objetos.
Com ela e possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

ao inspecionar o elemento com o chrome, você esta vendo a representação oficial do DOM

# Node

Toda Tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades
Element é um tipo de objeto node.

// const titulo - document.querrySeletor('h1')

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click", callback)
// ativa a função callback ao click no titulo
