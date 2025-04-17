// (X) Mostre no console cada Parágrado do site
const verificarParagrafo = document.querySelectorAll("p")
console.log(verificarParagrafo)

// (X) Mostre o texto dos parágrafos no console
verificarParagrafo.forEach((item) => {
  console.log(item.innerText)
})

// (X) Como corrigir os erros abaixo;
// const imgs = document.querySelectorAll("img")

// imgs.forEach(item, index => {
// console.log(item, index)
// })

// let i = 0;
// img.forEach( => {
// console.log(i++)
// })

// imgs.forEach(() => i++)

const imgs = document.querySelectorAll("img")

imgs.forEach((item, index) => {
  console.log(item, index)
})

let i = 0
imgs.forEach(() => {
  console.log(i++)
})

imgs.forEach(() => i++)
console.log(i)
