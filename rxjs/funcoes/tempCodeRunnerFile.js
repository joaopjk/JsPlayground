function bomDia() {
  console.log('Bom dia!')
}

function boaTarde() {
  console.log('Boa tarde!')
}

const executarQualquerCoisa = (fn) => {
  if (typeof fn === 'function') fn()
}

executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//Retornando funções
const potencia = (base) => function (expoente) {
  return Math.pow(base, expoente)
}

const p = (base) => (expoente) => Math.pow(base, expoente)

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const potencia3 = p(2)
console.log(potencia3(8))