class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico("Smartphone");
// d1.ligar();
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends Smartphone {
  constructor(nome, temWifi, cor, modelo) {
    super(nome, cor, modelo);
    this.temWifi = temWifi;
  }
}

const s1 = new Smartphone("Samsung", "preto", "Galaxy s10");
s1.ligar();
s1.ligar();
console.log(s1);

const t1 = new Tablet("iPad", true, "preto", "s20");
console.log(t1);
t1.ligar();
t1.ligar();
