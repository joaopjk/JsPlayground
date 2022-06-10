const pessoa1 = {
    nome: "João",
    idade: 26,
    dataNascimento: "02/09/1994",

    meuNomeE() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos.`)
    }

}

const criaPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade
    }
}


console.log(pessoa1)
pessoa1.meuNomeE()
console.log(criaPessoa("Francina", "Sousa", 30))