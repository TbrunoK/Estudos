Declaração e Atribuição
Quando você declara uma variável com const, você deve atribuir um valor a ela imediatamente. Se você tentar declarar uma variável com const sem atribuir um valor, ocorrerá um erro.

const text = "JavaScript"
const frase = "Isso é o meu 'jogo'"
console.log(text)

---

Imutabilidade da Referência
O valor de uma variável declarada com const não pode ser reatribuído. Isso significa que você não pode fazer algo assim:

const nome = "João";
nome = "Maria"; // Isso causará um erro

---

Objetos e Arrays
Embora const impeça a reatribuição da variável, ele não torna o valor imutável. Se a variável for um objeto ou um array, as propriedades do objeto ou os elementos do array ainda podem ser modificados.

const pessoa = {
nome: "Ana",
idade: 25
};

// Isso é permitido
pessoa.idade = 26;
console.log(pessoa.idade); // 26

// Isso causará um erro
pessoa = { nome: "Carlos", idade: 30 };

---

Escopo
Variáveis declaradas com const têm escopo de bloco. Isso significa que elas estão disponíveis apenas dentro do bloco onde foram definidas.

if (true) {
const mensagem = "Olá, Mundo!";
console.log(mensagem); // "Olá, Mundo!"
}
// Isso causará um erro
console.log(mensagem);

---

const é usado para declarar variáveis cujos valores não podem ser reatribuídos.
Deve ser inicializado no momento da declaração.
Funciona para tipos primitivos como números e strings, prevenindo reatribuição.
Para objetos e arrays, const previne a reatribuição da referência, mas permite a modificação dos valores internos.
Possui escopo de bloco, limitando sua acessibilidade ao bloco onde foi declarado.

---
