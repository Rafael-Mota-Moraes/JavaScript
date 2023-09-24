const pessoa = {
  nome: "Rafael",
  sobrenome: "Moreira",
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

console.log();

const chaves = ["nome", "sobrenome"];
console.log(pessoa[chaves[0]]);
console.log(pessoa[chaves[1]]);

console.log();

const pessoa1 = new Object();
pessoa1.nome = "João";
pessoa1.sobrenome = "Da Silva";
delete pessoa1.sobrenome;
console.log(pessoa1);

pessoa.idade = 30;
pessoa.falarNome = function () {
  console.log(`${this.nome} está falando seu nom`);
};

pessoa.getDataNascimento = function () {
  const dataAtual = new Date();
  console.log(dataAtual.getFullYear() - this.idade);
};

pessoa.getDataNascimento();

console.log();

for (let chave in pessoa) {
  console.log(pessoa[chave]);
}

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p2 = new Pessoa("Rafael", "Moreira");
console.log(p2);
