"use strict";
function ola(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
var joao = {
    nome: 'João Cícero Vicente Sousa',
    saudar: function (sobrenome) {
        console.log(sobrenome);
    }
};
ola(joao);
joao.saudar("Cicero");
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.nome = '';
        this.data = new Date();
    }
    Cliente.prototype.saudar = function (sobrenome) {
        console.log(this.nome + sobrenome);
    };
    return Cliente;
}());
var meuCliente = new Cliente();
var potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
