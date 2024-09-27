# Tipos de Dados

Todos são primitivos exceto os objetos.

    var nome = "Bruno" // string " "

    var idade = 28 // Number
    var idadeString = "28" // string " "
    var possuiFaculdade = false // boolean: true or false

    var time; // undefined
    var comida = null; //null
    var simbolo = Symbol() // Symbol
    var novoObjeto = {} // objeto

## Verificar tipo de Dado

Fazer uma verificação do tipo de dado

    var nome = "Bruno"
    console.log(typeof nome)
    <!-- Retorna string -->

### String

Você pode somar números com strings, o resultado final é sempre uma string.

var gol = 1000
var frase = "Romário fez" + gols + "gols"

# Template String

    var gols = 1000
    var frase1 = 'Romario fez ' + gols + ' gols'
    var frase2 = `Romario fez ${gols} gols` // Utilizando Template String

Você deve passar expressões / variáveis dentro de ${}

### Aspas Duplas, Simples e Template String

    'Javascript é "super" fácil'
    "Javascript é 'super' fácil"
    "Javascript é \"super\" fácil"
    `Javascript é "super" fácil"`
    "Javascript é "super" facil" <!-- Invalido -->

    Não necessariamente precisamos atribuir valores a uma variável
