// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img")
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensImagem = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(imagensImagem)

//