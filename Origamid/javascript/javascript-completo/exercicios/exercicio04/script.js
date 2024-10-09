var nome = "Bruno"
var idade = "28"
var possuiDoutorado = false
var empregoFuturo
var dinheiroNaConta = 0
console.log()

var nomeParente = "Breno"
var idadeParente = 5

if (idade > idadeParente) {
  console.log("A idade de " + nome + " é maior que a idade de " + nomeParente)
} else if (idade == idadeParente) {
  console.log("A idade de " + nome + " é igual a idade de " + nomeParente)
} else if (idade < idadeParente) {
  console.log("A idade de " + nome + " é menor do que a idade de" + nomeParente)
}

var expressao = 5 - 2 && 5 - " " && 5 - 2

if (nome) {
  console.log("nome é Truthy")
} else {
  console.log("nome é Falsy")
}

if (idade) {
  console.log("idade é Truthy")
} else {
  console.log("idade é Falsy")
}

if (possuiDoutorado) {
  console.log("possuiDoutorado é Truthy")
} else {
  console.log("possuiDoutorado é Falsy")
}

if (empregoFuturo) {
  console.log("empregoFuturo é Truthy")
} else {
  console.log("empregoFuturo é Falsy")
}

if (dinheiroNaConta) {
  console.log("dinheiroNaConta é Truthy")
} else {
  console.log("dinheiroNaConta é Falsy")
}

if (brasil > china) {
  console.log("O Brasil tem mais habitantes que a China.")
} else if (brasil < china) {
  console.log("A China tem mais habitantes que o Brasil.")
} else {
  console.log("O Brasil e a China têm o mesmo número de habitantes.")
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro")
} else {
  console.log("Falso")
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão")
} else {
  console.log("Falso")
}
