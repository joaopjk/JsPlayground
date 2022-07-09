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
console.log(p(3)(4))

//somar
const somar = (a) => (b) => a + b
const multiplicar = (a) => (b) => a * b
const subtrair = (a) => (b) => a - b
const dividir = (a) => (b) => a / b
console.log(somar(3)(4))

const calcular = (a) => (b) => (fn) => fn(a)(b)

console.log(calcular(3)(4)(somar))
console.log(calcular(3)(4)(multiplicar))
console.log(calcular(3)(4)(dividir))
console.log(calcular(3)(4)(subtrair))