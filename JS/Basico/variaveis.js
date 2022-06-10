/*Variáveis precisam de ter nomes significativos
Não pode começar o nome de uma variável com um número
Não podem conter espaços ou tracos
Utilizamos camelCase
Não podemos redeclarar variáveis com o let
Não utilizer var, utilize Let
*/

let nome = 'João';
//var nome = 'João';

console.log(`${nome} nasceu em 1984`);
console.log(`Em 2000 ${nome} conheceu Maria.`);
console.log(`${nome} casou-se com Maria em 2012`);
console.log(`Maria teve 1 filho com ${nome} em 2015`);
console.log(`O filho de ${nome} chama Eduardo`);
console.log("O filho de", nome, "chama Eduardo");

/*
Constantes
Não pode alterar valor 

*/
const nomeConst = 'João';
console.log(`${nomeConst} nasceu em 1984`);
console.log(`Em 2000 ${nomeConst} conheceu Maria.`);
console.log(`${nomeConst} casou-se com Maria em 2012`);
console.log(`Maria teve 1 filho com ${nomeConst} em 2015`);
console.log(`O filho de ${nomeConst} chama Eduardo`);
console.log("O filho de", nomeConst, "chama Eduardo");

const primeiroNumero = 5;
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
console.log(conta);
console.log(typeof primeiroNumero);
console.log(typeof nome);
