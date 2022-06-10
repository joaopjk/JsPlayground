interface Pessoa {
    nome: string
    idade?: number

    [prop: string]: any//dinamico
    saudar(sobrenome: string): void
}


function ola(pessoa: Pessoa) {
    console.log('Olá ' + pessoa.nome)
}

const joao: Pessoa = {
    nome: 'João Cícero Vicente Sousa',
    saudar(sobrenome: string) {
        console.log(sobrenome)
    }
}

ola(joao)
joao.saudar("Cicero")


class Cliente implements Pessoa {
    nome: string = ''
    data: Date = new Date()

    saudar(sobrenome: string) {
        console.log(this.nome + sobrenome)
    }
}

const meuCliente = new Cliente()

// Interface Funçao

interface funcaoCalculo {
    (a: number, b: number): number
}

let potencia: funcaoCalculo

potencia = function (base, exp): number {
    return Math.pow(base, exp)
}