# Array

É um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável

var videoGames = ["Switch", "PS4", XBox"];

videoGames[0] // Switch
videGames[2] //XBox

// Acesse um elemento de array utilizando [n]

# Métodos e Propriedades de um Array

var videoGames.pop() // Remove o último item e retorna ele
var videoGames.push("3DS") // Adiciona ao final da array
videoGames.length // 3

// Existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais à frente

# For Loop

Fazem algo repetidamente até que uma condição sej atingida

for (var numero = 0; numero < 10; numero++) {
console.log(numero)
}
// Retorna de 0 a 9 no console

O for loop possui 3 partes,
início, condição e incremento

# While Loop
var i = 0
while (i <10) {
  console.log(i)
  i++
}

//retorna de 0 a 9 no console

O for loop é o mais comum


# Array e loops
var videoGames = ["Switch", Ps4", "Xbox", "3Ds"];
for (var i = 0 <videoGames.length; i++) {
  console.log(videoGames[i])
}
// for loop é o mais simples


# Break
O loop irá para caso encontre a palavra break

var videoGames = ["Switch", "Ps4", "Xbox", "3Ds"]
for (var i = 0; i < videoGames.lenght; i++) {
  console.log(videoGames[i])
  if (videoGames[i] === "Ps4") {
    break
  }
}

# forEach
forEach é um método que executa uma função para cada item Array. E uma forma mais simples de utilizarmos um loop com array (ou array-like)

var videoGames = ["Switch", "Ps4", "Xbox", "3Ds"];
videoGames.forEach(function(item) {
  console.log(item)
}) // O argumento item será atribuído dinamicamente

podemos passar os seguintes parametros item, index e array 