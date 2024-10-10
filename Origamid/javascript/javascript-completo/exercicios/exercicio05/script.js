//Crie uma função para verificar se um valor é truthy
var verificarTruthy = ""

function truthy() {
  if (verificarTruthy) {
    console.log("É Truthy")
  } else {
    console.log("Não é Truthy")
  }
}

truthy()

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
  return 10 * lado
}

var lado = 4
var perimetro = perimetroQuadrado(lado)
console.log("O perímetro do quadrado é: " + perimetro)
