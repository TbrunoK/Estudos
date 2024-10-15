# Números

      var idade = 28
      var gols = 1000
      var pi 3.14           // Ponto para decimal
      var exp = 2e10  // 20000000000 o numero que vier depois do "e" sera a quantidade de zeros

      precisão para até 15 dígitos

## Operadores Aritméticos

      var soma = 100 + 50 // 150
      var subtração = 100 - 50 // 50
      var multiplicação = 1000 * 2 // 200
      var divisão = 100 / 2 //50
      var expoente = 2 ** 4 // 16
      var modulo = 14 % 5 // 4

       Lembrando que + em string serve para conectar

### Operadores aritméticos (String)

      var soma = "100" + 50 // 10050
      var subtracao = "100" - 50 // 50
      var multiplicacao = "100" * "2" // 200
      var divisao = "comprei 10" /2 // NoN (Not a Number)

      É possível verificar se uma variável é NaN ou não com função inNaN()

# NaN = Not a Number

      var numero = 80
      var unidade = "kg"
      var peso = numero + unidade // 80kg
      var peso = pesoPorDois = peso /2 //NaN (Not a Number)

# A ordem importa

## Começa por multiplicação e divisão, depois por soma e subtração

      var total1 = 20 + 5 * 2 //30
      var total2 = (20 + 5) * 2 //50
      var total3 = 20 / 2 * 5 //50
      var total4 = 10 + 10 * 2 + 20 / 2 // 40

      Parênteses para priorizar uma expressão

### Operadores Aritméticos Unários

   # 
      var incremento = 5
      console.log(incremento++) // 5
      console.log(incremento) //6

      var incremento2 = 5
      console.log(++incremento2) // 6
      console.log(incremento) //6

      mesma coisa para o decremento
      --x

  ## O  + e - tenta transformar o valor seguinte em número 

      var frase = "isso é um teste"
      +frase / NaN
      -frase / NaN

      var idade = "28"
      +idade // 28 (Número)
      -dade // -28(Número)
      console.log(+idade + 5) // 33

      var possuiFaculdade = true
      console.log(+possuiFaculdade) //1

      O - antes de um número torna ele negativo
