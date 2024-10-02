# Boolean

Existem dois valores booeanos "false" ou "true"
var possuiGraduacao = true
var possuiDoutarado = false

# Condicionais if e else

Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

      var possuiGraduacao = true

      if (possuiGraduacao) {
      console.log("Possui graduação")

      } else {
      console.log("Não Possui graduação)
      }

// Retorna Possui graduação e não execulta o else

O valor dentro dos Parênteses sempre será avaliado em false ou true

# Condicionais else if

Se o if não for verdadeiro, ele testa o else if

        var possuiGraduacao = true
        var possuiDoutorado = false

        if (possuiGraduacao) {
              console.log("Possui graduação e doutorado")
        } else if (possuiGraduacao) {
              console.log("Possui graduação, mas não possui doutorado")
        } else {
              console.log("Não possui graduação")
        }

// Retorna possui Graduação, mas não possui doutorado

# Trusthy e falsy

      # falsy

Existem valores que retornam true e outros que retornam false quando verificados em uma empressão booleana

      //falsy
      if(false)
      if(0)
      if(NaN)
      if(null)
      if(undefined)
      if("") // ou '' ou ``

Todo o resto e truthy

# truthy

      //Truthy
      if(true)
      if(1)
      if("")
      if("nome")
      if(-5)
      if({})

# Operador Lógico de Negação !

O operador ! nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) //false
if(!1) // false
if(!"") //true
if(!undefined) //true
if(!!" ") //true
if(!!"") //false

Dica, você pode utilizar o !! para verificar se uma expressão e truthy of falsy

# Operadores de comparação " > Maior, < Menor, <= Menor ou igual, >= Maior ou igual "

Vão sempre retornar um valor booleano

10 > 5 // True
5 > 10 // false
20 < 10 // false
10 <= 10 //true
10 >= 11 //false

# Operadores de comparação = "  == Igualdade, === Estritamente igual, != Diferente, !== Estritamente diferente 

O == fez uma comparação não tão estrita e o === faz uma comparação estrita, ou seja o tipo de dado deve ser o mesmo quando usamos ===

10 == "10" // true
10 == 10 // true
10 === "10" // false
10 === 10 // true
10 != 15 // true
10 != "10" // false
10 !== "10" true
