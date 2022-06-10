const joao = {
    nome: "João",
    sobrenome: "Sousa",
    birthYear: 1994,
    job: "Desenvolvedor Pleno",
    hasDriverLicense: true,

    calcAge: function () {
       this.age =  new Date().getFullYear() - this.birthYear
    }
}

console.log(joao)
console.log(joao['nome'])

const nameKey = 'nome'
console.log(joao[nameKey])

joao.location = "Brazil"
joao['Instagram'] = 'joao.cicero'
console.log(joao)

//object methods
//console.log(joao.calcAge())
//console.log(joao['calcAge']())
console.log(joao.age)