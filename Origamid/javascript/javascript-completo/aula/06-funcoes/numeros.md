# Funções

- Bloco de código que pode ser executado e reutilizado. valores podem ser passados por uma função e a mesma retorna outro valor.

#### calcular area quadrada

      function areaQuadrado(lado) {
            return lado * lado
      }

      areaQuadrado(4) // 16
      areaQuadrado(5) // 25
      areaQuadrado(2) // 4

// Chamado de function declaretion

####

#### calcular pi

      function pi() {
            return 3.14
      }
      var total = 5 * pi() //15.7

####

#### Parâmetros e Argumentos

- Ao criar uma função você pode definir parâmetros.
  Ao executar uma função, você pode passar argumentos.

// peso e altura são parâmetros
function imc(peso, altura) {
const imc = peso / (altura \*\* 2)
return imc
}

      imc(80, 1.80) // 80 e 1.80 são os argumentos
      imc(60, 1.70) // 60 e 1.70 são os argumentos

// Separar por vírgula cada parâmetro. você pode definir mais de um parâmetro ou nenhum também

####

#### Parênteses executa a função

      function corFavorita(cor) {
            if (cor === "azul") {
                  return "você gosta do céu"
            } else if (cor === "verde")
                  return "você gosta de mato"
      } else {
            return "você não gosta de nada"
      }

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

####

#### Argumentos podem ser funções

- Chamadas de Callback, geralmente são funcções que ocorrem após algum evento.

addEventListener("click", function() {
console.log("clicou")
})

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como  function() ou () => {}