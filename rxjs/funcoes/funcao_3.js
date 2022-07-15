const felizNatal = () => console.log('Feliz Natal');
felizNatal()

const saudacao = nome => `Fala ${nome}, seu gostoso`
console.log(saudacao('João'))

const somar = (...numeros) => {
  let total = 0
  if (Array.isArray(numeros)) {
    for (let n of numeros) {
      if (typeof n === 'number')
        total += n
    }
  }
  return total
}
console.log(somar(1, 2, 3, 4, 5, 5, 6))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(8))

//this
Array.prototype.log = function () {
  console.log(this)
}
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1])
}
const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()