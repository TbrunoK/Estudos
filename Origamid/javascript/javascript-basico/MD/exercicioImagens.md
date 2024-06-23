1 - Lista de imagens (li img) e a imagem principal.
1.1 Como selecionar uma lista de itens?
1.2 Como selecionar um item?

2 - Clique em um dos itens da lista.
2.1 Como adicionar um evento de click a uma lista de itens?

3 - Precisamos do url do item clicado.
3.1 Como pegar o url de um elemento?

4 - Precisamos alterar o url da imagem principal.
4.1 Como alterar o url de um elemento?

---

html

<body>
    <div class="image-group">
      <div>
        <img src="./assets/nimbus1.jpg" alt="Nimbus 1" class="clickable" />
      </div>
      <div>
        <img src="./assets/nimbus2.jpg" alt="Nimbus 2" class="clickable" />
      </div>
      <div>
        <img src="./assets/nimbus3.jpg" alt="Nimbus 3" class="clickable" />
      </div>
    </div>

    <!-- Modal para exibir a imagem ampliada -->
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01" />
      <div id="caption"></div>
    </div>
    <script src="./script.js"></script>

  </body>

---

Css
/_ Estilos básicos para a grid de imagens _/
.image-group {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
}

.image-group img {
width: 100%;
height: auto;
max-height: 200px;
object-fit: inherit;
cursor: pointer;
}

/_ Estilos para o modal _/
.modal {
display: none;
position: fixed;
z-index: 1;
padding-top: 100px;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
margin: auto;
display: block;
max-width: 90%;
max-height: 90%;
}

#caption {
text-align: center;
color: #fff;
margin-top: 10px;
}

.close {
position: absolute;
top: 15px;
right: 35px;
color: #fff;
font-size: 30px;
cursor: pointer;
}

.close:hover,
.close:focus {
color: #bbb;
text-decoration: none;
}

---

Javascript
// Seleciona o modal
var modal = document.getElementById("myModal")

// Seleciona a imagem dentro do modal
var modalImg = document.getElementById("img01")
var captionText = document.getElementById("caption")

// Seleciona todas as imagens clicáveis
var images = document.querySelectorAll(".clickable")

// Adiciona evento de clique para cada imagem
images.forEach(function (img) {
img.addEventListener("click", function () {
modal.style.display = "block"
modalImg.src = this.src
captionText.innerHTML = this.alt
})
})

// Seleciona o elemento de fechar
var span = document.getElementsByClassName("close")[0]

// Fecha o modal quando o botão de fechar for clicado
span.onclick = function () {
modal.style.display = "none"
}
