const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "dezembro",
  ano: 2018,
}

data.dia = 29; // funciona
data = "Janeiro"; // erro