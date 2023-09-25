// Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.digaOi = () => "Oi";
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa("Rafael", "Moreira");
const pessoa2 = new Pessoa("Luiz", "Otávio");

console.log(pessoa1);
console.log(pessoa2);

console.log(Pessoa.prototype);
console.log(pessoa1.digaOi());
console.log(pessoa1.nomeCompleto());
