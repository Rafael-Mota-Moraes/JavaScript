class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume += 2;
  }

  static trocaPilha() {
    console.log("Trocando pilha do controle...");
  }
}

const c1 = new ControleRemoto("LG");
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
console.log(c1);

ControleRemoto.trocaPilha();
