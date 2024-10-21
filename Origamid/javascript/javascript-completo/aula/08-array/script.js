var videoGames = ["Switch", "Ps4", "Xbox"]

videoGames[0]

console.log(videoGames[1])

//  ++ = numero = numero + 1
for (var numero = 0; numero <= 10; numero++) {
  console.log(numero)
}

var i = 0
while (i < 10) {
  console.log(i) // retorna de 0 a 9 no console
  i++
}
// # Array e loops
var videoGames = ["Switch", "Ps4", "Xbox", "3Ds"]
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i])
}
// # Break
// O loop irá para caso encontre a palavra break
var videoGames = ["Switch", "Ps4", "Xbox", "3Ds"]
for (var i = 0; i < videoGames.lenght; i++) {
  console.log(videoGames[i])
  if (videoGames[i] === "Ps4") {
    break
  }
}

