let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros[0]);

const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro, segundo, resto);
