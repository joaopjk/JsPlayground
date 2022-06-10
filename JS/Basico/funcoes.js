function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}

function bomdia(nome) {
    return `Bom dia ${nome}`
}

function soma(x, y) {
    return x + y;
}

const subtracao = (x, y) => {
    return x - y;
}

const raiz = function (numero) {
    return numero ** 0.5;
}

const quadrado = (n) => {
    return n * n;
}

const quadrado2 = n => n * n;

saudacao('João')
saudacao('Cicero')
saudacao('Vicente')
saudacao('Sousa')

const algo = bomdia()
console.log(algo)
console.log(soma(10, 5))
console.log(subtracao(16, 5))
console.log(raiz(16))
console.log(quadrado(4))
console.log(quadrado2(2))