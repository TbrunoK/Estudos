# Operadores de atribuição

Podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x _= y; // x = x _ y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

# Operador Ternário

Abreviação de condicionais como if e else

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'

// Condição ? true : false

Geralmente utilizado quando precisamos atribuir um valor para variável dependendo de uma condição

# If Abreviado

Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true
if(possuiFaculdade) console.log("Possui faculdade")
else console.log("Não Possui faculdade")

// Ou
if(possuifaculdade)
console.log("Possui Faculdade")
else
console.log("Não possui faculdade)

// eu Particularmente prefiro a segunda opção aqui.
