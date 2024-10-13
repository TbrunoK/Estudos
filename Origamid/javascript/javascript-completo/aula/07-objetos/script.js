function areaQuadrado(lado) {
  return lado * lado
}

console.log(areaQuadrado(10)) // 16

function pi() {
  return 3.14
}
var total = 5 * pi() //15.7

function imc(peso, altura) {
  const imc = peso / altura ** 2
  return imc
}

console.log(imc(80, 18))
imc(60, 170)

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu"
  } else if (cor === "verde") {
    return "você gosta de mato"
  } else {
    return "você não gosta de nada"
  }
}
corFavorita() //Retorna "você não gosta de nada"

addEventListener("click", function () {
  console.log("clicou")
})

function imc2(peso, altura) {
  const imc = peso / altura ** 2
  console.log(imc)
}

imc2(20, 1.8) // retorna o imc
console.log(imc(80, 1.8)) // retorna o imc e undefined

// Valores retornados
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!"
  } else if (idade >= 60) {
    return true
  } else {
    return false
  }
}

// Escopo
var totalPaises = 139 //Para corrigir necessita apenas remover a variável que esta dentro do bloco {}
function precisoVisitar(paisesVisitados) {
  return "ainda faltam ${totalPaises - paisesVisitados} países"
}

console.log(totalPaises) // retorna totalPaises is not defined

// Escopo Léxico
var profissao = "Developer"

function dados() {
  var nome = "Bruno"
  var idade = 29
  function outrosDados() {
    var cidade = "Campos novos"
    var endereco = "Santa catarina"
    return `${nome}, ${idade}, ${cidade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}

console.log(dados()) // retorna "Bruno, 29, campos novos, santa catarina, Developer"

// Hoinsting
imc(80, 1.8) // imc aparece no console

function imc(peso, altura) {
  const imc = peso / altura ** 2
  console.log(imc)
}
