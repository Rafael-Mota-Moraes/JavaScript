function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}.`;
    },
    altura: undefined,
    peso: undefined,
    setAlturaEPeso(altura, peso) {
      this.altura = altura;
      this.peso = peso;
    },
    calculaIMC() {
      return this.peso / (this.altura * this.altura);
    },
  };
}

const p1 = criaPessoa("Rafael", "Moreira");
const p2 = criaPessoa("João", "Silva");

console.log(p1.fala("Programação"));
console.log(p2.fala("Front-End"));

p1.setAlturaEPeso(1.65, 93);
console.log(p1.calculaIMC());
