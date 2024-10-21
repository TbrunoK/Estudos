var videoGames = ["Switch", "Ps4", "Xbox", "3Ds"]

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item])
  if (videoGames[item] === "Ps4") {
    break
  }
}
var frutas = ["Banana", "Pera", "Abacaxi", "Uva"]

frutas.forEach(function (fruta, index) {
  frutas.pop()
  console.log(fruta, index, frutas)
})



var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero)
  numero++;
}