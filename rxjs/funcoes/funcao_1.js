//Func Declaration
function bomDia() {
  console.log('Bom dia!')
}
bomDia()

//Function Expression
const boaTarde = function () {
  console.log('Boa tarde!')
}
boaTarde()

const boaNoite = () => console.log('Boa noite!')
boaNoite()

function somar(a = 0, b = 0) {
  return a + b
}
console.log(somar(1, 3))
console.log(somar(1))