# Escopo de função

Variáveis declaradas dentro de uma função não são acessadas fora das mesmas

function mostrarCarro() {
var carro = "fusca";
console.log(carro)
}

mostrarCarro() //Fusca no console
console.log(carro) //Erro, carro is not defined

// Escopo evita o conflito entre nomes.

# Variável Global(Erro)

Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode se acessar em qualquer escopo (global) isso é um erro

function mostrarCarro() {
carro = "fusca"
console.log(carro)
}

mostrarCarro() // fusca
console.log(carro) //fusca

# Escopo de função (Pai)

Variáveis declaradas pelo escopo pai da função, conseguem ser acessadas pela função

var carro = "fusca"

function mostrarCarro() {
var frase = "Meu carro e um ${carro}"
console.log(frase)
}

mostrarCarro() // Meu carro é um fusca
console.log(carro) // Fusca
