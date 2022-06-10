//:?
const pontuacao = 999;
const nivelUsuario = pontuacao <= 1000 ? "Usuário Comun" : "Usuário Vip";
console.log(pontuacao <= 1000 ? "Usuário Comun" : "Usuário Vip");
console.log(nivelUsuario);

const corUsuario = nivelUsuario || "If ternário com Or";