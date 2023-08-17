// Arrays

//                  0        1       2
const alunos = ["Rafael", "João", "Pedro"];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos[0] = "Alexandre";
alunos[3] = "Luiza";
alunos[10] = "Maria";
alunos.push("Otávio");
alunos.unshift("Luiz");
alunos.pop();
alunos.shift();

delete alunos[1];

console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(typeof alunos);
console.log(alunos.length);
