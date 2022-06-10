let num1 = 10;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof (num1));
console.log(typeof (num2));

// num1 = num1.toString();
// console.log(typeof(num1));
console.log(num1.toString(2)); //Binário
console.log(num1.toFixed(2));

console.log(Number.isInteger(num1));//True
console.log(Number.isInteger(num2));//False

let tempo = num1 * 'Olá';
console.log(tempo); //NaN
console.log(Number.isNaN(tempo));// True: Não é um número

tempo = num1 * '5';
console.log(tempo);
console.log(Number.isNaN(tempo)); // False: É um número

let num3 = 0.7;
let num4 = 0.1;
console.log(num3 + num4); // IEEE 754-2008 - Não tem precisão 

num3 += num4;
num3 += num4;
num3 += num4;
console.log(Number.isInteger(num3));//false

num3 = num3.toFixed(2);
console.log(Number.isInteger(num3));//true