1 - Crie um botão com nome de "Adicionar"
2 - Adicione uma função (Somar) ao clique desse botão
3 - Só adicione a função se o botão existir na tela.
4 - crie uma div com o texto 0 dentro dela <div>0</div>
5 - Na função do botão, pegue o total que estiver na div e adicione +1
6 - Mude o valor da div para um novo total.
7 - Mude o valor se o resultado for menor do que 10
8 - Quando não for mais possível adicionar, mostre uma mensagem no console.

---

const botao = document.querySelector("button")

function somar() {
const div = document.querySelector("div")
const total = Number(div.innerText) + 1
if (total < 10) {
div.innerText = total
} else {
console.log("Não é possivel adicionar mais!")
}
}
if (botao) {
botao.addEventListener("click", somar)
}
