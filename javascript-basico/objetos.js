const pessoa = {
  nome: "Rafael",
  sobrenome: "Moreira",
  idade: 18,
  exbirNome() {
    return `${this.nome} ${this.sobrenome}`;
  },
  mudaIdade(idade) {
    this.idade = idade;
  },
};

console.log(pessoa.exbirNome());
console.log(pessoa.mudaIdade(20));
console.log(pessoa);
