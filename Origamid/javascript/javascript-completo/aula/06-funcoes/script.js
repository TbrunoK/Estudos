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
