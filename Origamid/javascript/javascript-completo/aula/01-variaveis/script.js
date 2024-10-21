// Referência ao elemento onde as mensagens serão mostradas
const consoleElement = document.getElementById("console")

// Armazena a referência original da função console.log
const originalConsoleLog = console.log

// Sobrescreve console.log para mostrar no console e na página
console.log = function () {
  originalConsoleLog.apply(console, arguments) // Chama o console.log original
  consoleElement.innerHTML += Array.from(arguments).join(" ") + "\n" // Mostra no elemento HTML
}

// Código da aula 
var nome = "Bruno"
var idade = 28
console.log(nome, idade)

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco

console.log(totalPreco)

var sobrenome = "Breno",
  cidade = "Rio"

console.log(sobrenome, cidade)
