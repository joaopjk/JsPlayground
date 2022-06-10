const alunos = ['Luiz', 'João', 'Maria', 'Leandro'];
console.log(alunos);
console.log(alunos[0]);
console.log(typeof (alunos));
console.log(Array.isArray(alunos));
alunos[0] = 'Eduardo';
console.log(alunos);
alunos[4] = 'Luiza';
console.log(alunos);
alunos.push('Pedro');
console.log(alunos);
console.log(alunos.length);
alunos[alunos.length] = 'Jucemie';
console.log(alunos);
alunos.unshift('Francini'); // Adicionando no começo
console.log(alunos);
const removido = alunos.pop(); // Removendo o ultimo
console.log(alunos);
//delete alunos[1]; // Vai deixar o indice null
console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));
alunos.map(x => {
    console.log(`Aluno: ${x}`)
})
console.log("====================")
alunos.filter(x => x.length > 4).map(x => {
    console.log(`Aluno: ${x}`)
})