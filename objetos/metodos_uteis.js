const produto = { nome: "Produto", preco: 1.8 };

// const outraCoisa = { ...produto, estoque: 10 };
const caneca = Object.assign({}, produto, {
  nome: "Caneca",
  material: "Porcelana",
});

produto.nome = "Lápis";

console.log(produto);
console.log(caneca);

console.log();

console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(Object.values(produto));
console.log(Object.keys(produto));
