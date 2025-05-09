menubar.className += " vermelho"

console.log(menubar.className)

const animais = document.querySelector(".animais")

console.log(animais.attributes["data-texto"])

const img = document.querySelector("img")

const srcImg = img.getAttribute("alt")

img.setAttribute("alt", "é uma raposa")
const possuiAlt = img.hasAttribute("alt")
console.log(possuiAlt)

console.log(srcImg)
