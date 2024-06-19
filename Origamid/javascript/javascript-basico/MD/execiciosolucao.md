function livro() {
const nome = "O Senhor dos Anéis".toUpperCase()
const ano = "1954"
const diferencaAno = 2024 + ano
const autor = "J. R. R. Tolkien".toUpperCase()

const frase = nome + " POR " + autor

return {
nome,
ano,
diferencaAno,
autor,
frase,
}
}

const livroRetorno = livro("O Senhor dos Anéis, 1954,J. R. R. Tolkien")

console.log(livroRetorno.frase)
