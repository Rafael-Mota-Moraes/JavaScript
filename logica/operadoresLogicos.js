/*
Operadores lógicos

&& -> and
|| -> or
! -> not
*/

// AND
console.log(true && true && true && true);
console.log(true && true && true && false);

// OR
console.log(true || false);
console.log(true || true);
console.log(false || false);

const usuario = "Rafael";
const senha = "123";

const vaiLogar = usuario === "Rafael" && senha === "123";
console.log("Vai logar?", vaiLogar);

// not

console.log(!true);
console.log(!false);
