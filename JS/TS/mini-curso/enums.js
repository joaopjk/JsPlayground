"use strict";
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Preto"] = 2] = "Preto";
    Cor[Cor["Verde"] = 3] = "Verde";
    Cor[Cor["Rosa"] = 4] = "Rosa";
    Cor[Cor["Roxo"] = 5] = "Roxo";
    Cor[Cor["Laranja"] = 200] = "Laranja";
    Cor[Cor["VerdeClaro"] = 201] = "VerdeClaro"; //201
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
console.log(minhaCor);
