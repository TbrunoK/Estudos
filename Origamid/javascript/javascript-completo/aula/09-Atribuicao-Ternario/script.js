var numero = 20
var numero2 = 10

numero *= numero2 // numero = numero + 10
console.log(numero)

var idade = 20
var naoPossuiDiabetes = true

var podeBeber
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode Beber" : "Não Pode Beber"

console.log(podeBeber)

// # If Abreviado
var possuiFaculdade = true
if (possuiFaculdade) console.log("possuiFaculdade")
else console.log("Não possui faculdade")

// ou
if (possuiFaculdade) console.log("Possui faculdade")
else console.log("Não Possui faculdade")
