//Objetos
// Conjunto de variáveis e funções que são chamada de propriedades e métodos

var pessoa = {
  nome: "Bruno",
  idade: 28,
  profissao: "Desenvolvedor",
}

console.log(pessoa)

pessoa.nome // "Bruno"
pessoa.idade // 28
pessoa.profissao // "Desenvolvedor"

// Metodos
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado
  },
  perimetro: function (lado) {
    return this.lados * lado
    // return lado + lado + lado + lado
  },
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

// Organizar o Código
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI //3.14
Math.random() // Número aleatório

var pi = Math.PI
console.log(pi) // 3.14

//  Criar um Objeto
// Um objeto é criado utilizando as chaves {}

var carro = {}
var pessoa = {}

console.log(typeof carro) // "Object"

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#843e",
}

menu.backgroundColor = "#000000"
menu.color = "blue"

menu.esconder = function() {
  console.log("Escondi")
}


var bg = menu.backgroundColor
