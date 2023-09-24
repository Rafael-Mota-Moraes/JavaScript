// const nomes = ["Eduardo", "Maria", "Joana"];
const nomes = new Array("Eduardo", "Maria", "Joana");
nomes[2] = "João";
delete nomes[2];
console.log(nomes);

const novo = nomes;
novo.pop(); // remove o último elemento do array
console.log(nomes);

const novo2 = [...nomes];
novo2[2] = "Rafael";
console.log(nomes, novo2);
novo2.shift(); // remove o primeiro elemento do array

console.log(novo2);

nomes.push("João");
nomes.unshift("Wallace");
console.log(nomes);

const novo3 = nomes.slice(1, -1);
console.log(novo3);

const nome = "Rafel Mota Moraes";
const nomes2 = nome.split(" ");
console.log(nomes2);
