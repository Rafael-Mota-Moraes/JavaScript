/*

&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar verdadeiro

FALSY
0
""
[]
{}
null
undefined
NaN

TRUE = Todos os outros
*/

console.log("Rafael" && 0 && "Maria");
console.log("Rafael" && true && NaN);

function falaOi() {
  return "Oi";
}

const vaiExecutar = true;

console.log(vaiExecutar && falaOi());
console.log(0 || false || null || "Rafael" || true);

const corUsuario = null;
const corPadrao = corUsuario || "preto";
console.log(corPadrao);
