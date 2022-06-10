/*
&& -> false && true -> false "o valor mesmo"
|| -> 
FALSY
*false
0
'' "" ``
null | undefined
NaN
*/

console.log("João Cícero" && 0);//0
console.log("João Cícero Vicente Sousa" && NaN);
console.log("João" && "Maria"); // Maria, pois é o último valor que será avaliado como verdadeiro
console.log("João" && "" && "Maria");//"", pois esse valor é avaliado como falso
console.log("João" && undefined && "Maria");//undefined, pois esse valor é avaliado como falso

const falaOi = () => {
    return 'oi';
}

const naoVaiExecutar = false;
const vaiExecutar = true;

console.log(naoVaiExecutar && falaOi());
console.log(naoVaiExecutar || falaOi()); // Vai retornar o valor true, na ultima possição
console.log(vaiExecutar && falaOi());

const corUsuario = "";
const corPadrao = corUsuario || 'black';

console.log(0 || null || 'false' || false || NaN); // Irá retornar 'false', pois é o primeiro valor a ser validdo como true.
console.log(0 || null || false || false || NaN); // Irá retornar NaN, pois é o último valor a ser validado como false.