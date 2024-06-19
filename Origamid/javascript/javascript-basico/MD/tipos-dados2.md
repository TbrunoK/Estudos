exemplos.

const text = "JavaScript"
const frase = "Isso é o meu "jogo"

console.log(text + " " + frase)

let total = 0
const compras = 30
const imposto = 10
total = compras + imposto
console.log(total)

let total = 0
const compras = 30
const imposto = 10

total = compras + imposto

const dobro = total \* 2
const dividir = total / 2
const desconto = total - 30

// Modo errado "strings são para letras então ele devera juntar 20+20 ficando 2020 ao invés de 40"
const strings = "20" + "20"

// Modo Correto
const numbers = 20 + 20

// Transformar string para ser entendida como números
const transformar = Number("20") + 20

console.log(transformar)
