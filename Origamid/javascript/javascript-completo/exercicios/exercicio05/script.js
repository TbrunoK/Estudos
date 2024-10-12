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

// Crie uma função que retorne o seu nome completo
function coletarNome() {
  const nome = "Bruno"
  const sobreNome = "Chagas"

  return nome + " " + sobreNome
}

const nomeCompleto = coletarNome()
console.log(nomeCompleto)

// Crie uma função que verifica se um número e par
function ePar(numeros) {
  return numeros % 2 === 0
}

console.log(ePar(4))

// Crie uma função que retorne o tipo de dado do argumento passado pela (typeof)
function tipoDeDado(argumento) {
  return typeof argumento
}
console.log(tipoDeDado(42)) //retorna "number"
console.log(tipoDeDado("Hello World")) //retorna string
