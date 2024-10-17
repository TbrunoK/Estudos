var videoGames = ["Switch", "Ps4", "Xbox"]

videoGames[0]

console.log(videoGames[1])

//  ++ = numero = numero + 1
for (var numero = 0; numero <= 10; numero++) {
  console.log(numero)
}

// praticando
function numeroContador(numeros) {
  if (numeros <= 10) {
    return console.log("É menor ou igual a dez")
  } else {
    return console.log("e maior que dez")
  }
}

numeroContador(5)
