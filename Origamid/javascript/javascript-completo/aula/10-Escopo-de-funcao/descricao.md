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

# Escopo de bloco

Variáveis com var, vazam o bloco, com isso com a introdução do ES6 a melhor forma de declarar uma variável e com const e let, pois estas respeitam o escopo do bloco

if(true) {
var carro = "fusca"
console.log(carro)
}

console.log(carro) // carro

# var vaza o bloco

Mesmo com a condicional falsa, a variável ainda sera declarada utilizando o hoisting e o valor ficará como undefined

if(false) {
var carro = "fusca"
console.log(carro)
}

console.log(carro) // undefined

# const e let no lugar de var

a partir de agora vamos utilizar apenas const e let para declararmos variáveis

if(true) {
const carro = "fusca"
console.log(carro)
}

console.log(carro) //erro, carro is not defined

# {} cria um bloco

Chaves {} criam um escopo de bloco, não confundir com a criação de um objeto
= {}

{
var carro = "Fusca"
const ano = "2018"
}

console.log(carro) //carro
console.log(ano) // erro ano is not defined

# For loop

ao utilizar var dentro de um for loop, que é um bloco, o valor da variável e utilizada e irá vazar e existir fora do loop

for(var i = 0 i <10; i++) {
console.log(`numero ${i}`)
}

console.log(i) //10

# Const

Mantém o escopo no bloco, impede a redeclaração e modificação do valor da variável, evitando bugs no código

const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
dia: 28,
mes: "dezembro",
ano: 2018,
}

data.dia = 29; // funciona
data = "Janeiro"; // erro

variáveis com valores constantes

# Let

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano;
ano = 2018;
ano++
console.log(ano); //2019

let ano = 2020; //erro, redeclarou a variável

geralmente vamos utilizar o const.