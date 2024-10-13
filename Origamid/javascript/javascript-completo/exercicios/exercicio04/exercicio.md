# Informações do exercício - Aula Boolean e condicionais 2 - 0204

(X) Verifique se a sua idade é maior do que a de algum parente
(X) Dependendo do resultado coloque no console "E maior", "É igual" ou "E menor"

(X) qual o valor e retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - " ") && (5 - 2)

# resultado = 3

(X) Verifique se as seguinte variáveis são trusthy ou falsy

var nome = "Bruno"
var idade = "28"
var possuiDoutorado = false
var empregoFuturo;
var dinheiroNaConta = 0;

#

if (nome) {
console.log("nome é Truthy");
} else {
console.log("nome é Falsy");
}

if (idade) {
console.log("idade é Truthy");
} else {
console.log("idade é Falsy");
}

if (possuiDoutorado) {
console.log("possuiDoutorado é Truthy");
} else {
console.log("possuiDoutorado é Falsy");
}

if (empregoFuturo) {
console.log("empregoFuturo é Truthy");
} else {
console.log("empregoFuturo é Falsy");
}

if (dinheiroNaConta) {
console.log("dinheiroNaConta é Truthy");
} else {
console.log("dinheiroNaConta é Falsy");
}

(X) compare o total de habitantes do Brasil com a china (valor em milhões)
var brasil = 213
var china = 1412

#

if (brasil > china) {
console.log("O Brasil tem mais habitantes que a China.");
} else if (brasil < china) {
console.log("A China tem mais habitantes que o Brasil.");
} else {
console.log("O Brasil e a China têm o mesmo número de habitantes.");
}

#

(x) o que ira aparecer no console
if(("Gato" === "gato") && (5 > 2) ) {
console.log("Verdadeiro)
} else {
console.log("falso")
}

# resultado falso

(x) O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
console.log('Gato' && 'Cão');
} else {
console.log('Falso');
}

# Resultado cão
