# Objetos

- Conjunto de variáveis e funções que são chamada de propriedades e métodos

var pessoa = {
nome: "Bruno",
idade: 28,
profissao: "Desenvolvedor",
}

pessoa.nome // "Bruno"
pessoa.idade // 28
pessoa.profissao // "Desenvolvedor"

pessoa.nome
// Propriedades e métodos consistem em nome (chave) e valor

# Metodos

- É uma propriedade que possui uma função no local do seu valor.

  var quadrado = {
  lado: 4,
  area: function(lado) {
  return lado _ lado
  },
  parametro: function(lado){
  return this.lados _ lado;
  },
  }

  quadrado.lados: //4
  quadrado.area(5): //25
  quadrado.perimetro(5): //20

- Abreviação de area: function() {} para area() {}, no ES6+

  var quadrado = {
  lados: 4,
  area(lado) {
  return lado _ lado
  },
  perimetro(lado)
  return this.lados _ lado
  }

# Organizar o Código

- Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; //3.14
math.random(); // Número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

- Math é um objeto nativo de JavaScript. Já Percebeu que console é um objeto e log() um método?

# Criar um Objeto

- Um objeto é criado utilizando as chaves {}

var carro = {}`
var pessoa = {}

console.log(typeof carro); // "Object"

# DoT Notation Set

- Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma

var menu = {
width: 800,
height: 50,
backgroundcColor: "#84E",
}

menu.backgroundColor = "#000"
console.log(menu.backgroundColor): // "#000"

# Adicionar Propriedades e Métodos

- Basta adicionar um novo nome e definir o valor

var menu = {
width: 800,
}

menu.height = 50
menu.position = "fixed"

# Palavra-chave this

this irá fazer uma referência ao próprio objeto

var height = 120;
var menu = {
width: 800,
height: 50,
metadeHeight() {
return this.height /2
}
}

menu.metadeHeight() // 25
// sem o this seria 60

# Protótipo de Herança

- O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
width: 800,
}

menu.hasOwnProperty("width") // true
menu.hasOwnProperty("height") // false

// hasOwnProperty é um método de object
