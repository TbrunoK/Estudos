# forEach 
  Constantemente  vamos selecionar uma lista do dom. A Melhor forma para interagirmos e utilizando o método forEach

  const img = document.querrySelectorAll("img")

  img.forEach(function(item) {
    console.log(item)
  });

# Parâmetros do forEach
  O Primeiro Parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber 3 parâmetros:
  valorAtual, index, array;

  const imgs = document.querrySelectorAll("img");

  img.forEach(function(valorAtual, index, array) {
    console.log(item) // o item atual no loop
    console.log(index) // o número do index
    console.log(array) // a array completa
  })

# forEach e Array
  forEach é um método de array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array

  cons titulos = document.getElementsByClassName("titulo");
  const titulosArray = Array.from(titulos);

  titulosArray.forEach(function(item) {
    console.log(item)
  })

# Arrow Function
  Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs = document.querrySelectorAll("img");

imgs.forEach((item) => {
  console.log(item)
})

# Argumentos e Parênteses 

const imgs = document.querySelectorAll("img")

// argumento único precisa de parênteses 
imgs.forEach(item => {
  console.log(item)
})

// multiplos argumentos precisam de parênteses 
imgs.forEach((item, index) => {
  console.log(item, index);
})

// sem argumentos precisa dos parênteses, mesmos vazio

let i = 0
imgs.forEach(() => {
  console.log(i++)
})

# Return
  É possível omitir as chaves {} para função que retorna uma linha

  const imgs = document.querrySelecorAll("img");

  imgs.forEach(item =>
    console.log(item)
  );

  imgs.forEach(item => console.log(item))

  <!-- Não é permitido fechar a linha com ; -->

