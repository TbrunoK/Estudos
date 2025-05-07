(X) Adicione a classe ativo a todos os itens do menu

<!-- const itensMenu = document.querySelectorAll(".menu, a")

itensMenu.forEach((item) => {
  item.classList.add("ativo")
})
 -->

(X) Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro

<!-- itensMenu.forEach((item) => {
  item.classList.remove("ativo")
})
itensMenu(0).classList.add("ativo")
 -->

(X) Verifique se as imagens possuem o atributo alt

<!--
const imagens = document.querySelectorAll("img")

imagens.forEach((img) => {
  posssuiAtributoAlt = img.hasAttribute("alt")

  console.log(img, posssuiAtributoAlt)
})
 -->

(X) Modifique o href do link externo no menu

<!--
const link = document
  .querySelector("a[href^='http']")
  .setAttribute("href", "https://www.google.com/")

 -->
