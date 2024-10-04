var possuiGraduacao = true
var possuiDoutorado = true

if (possuiGraduacao) {
  console.log("É verdadeiro")
} else if (possuiDoutorado) {
  console.log("PossuiDoutorado")
} else {
  console.log("Não possui nada")
}

var nome = "10kg" / 10

if (nome) {
  console.log(nome)
} else {
  console.log("Nome não existe")
}

if (!possuiGraduacao) console.log("Não possui graduação")

// # Operadores de comparação " > Maior, < Menor, <= Menor ou igual, >= Maior ou igual "

var a = 10 > 5 // true
var aa = 5 > 10 // false
var b = 20 < 10 // false
var bb = 10 <= 10 // true
var c = 10 >= 11 // false

// Operadores de comparação = "  == Igualdade, === Estritamente igual, != Diferente, !== Estritamente diferente

10 == "10" // true
10 == 10 // true
10 === "10" // false
10 === 10 // true
10 != 15 // true
10 != "10" // false
10 !== "10" //true

//  Operadores Lógicos &&
var condicional = 5 - 5 && 5 + 5
if (condicional) {
  console.log("Verdadeiro")
} else {
  console.log("(5 - 5 = 0) Falso")
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2
console.log(condicional2)
