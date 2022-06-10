let num1 = 9.5678;
let num2 = Math.floor(num1); // Arredonda para baixo
num2 = Math.ceil(num1); // Arredonda para cima
num2 = Math.round(num1); // Arrendodamento correto
console.log(num2);

console.log(Math.max(1, 2, 3, 4, 5, 6, 100, -1, 1000, -289.1));
console.log(Math.min(1, 2, 3, 4, 5, 6, 100, -1, 1000, -289.1));

console.log(Math.random());
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

console.log(Math.PI);

console.log(Math.pow(2, 10));
console.log(2 ** 10);

console.log(9 ** (1 / 2));
console.log(Math.sqrt(9));

console.log(100 / 0); // Infinity