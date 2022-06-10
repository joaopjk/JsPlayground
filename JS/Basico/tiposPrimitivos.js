//String, number, undefined, symbol
const nome = 'João'; // String: Aspas simples, dupla ou crases
const num = 1;
const num1 = 10.52;
let aluno;//Undefined = não aponta para local nenhum da memória.
let nome = null; // Null = não aponta para local nenhum da memória.
const boleanos = true; // Boolean = true ou false.

const a = [1,2];
const b = a;
b.push(3);
console.log(a,b); // Array são usados por referência. Dados primitivos não são passados por referência.
