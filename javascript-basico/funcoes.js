function saudacao(nome) {
  return `Bom dia, ${nome}`;
}

// console.log(saudacao("João"));

const variavel = saudacao("Luiz");
// console.log(variavel);

function soma(x, y) {
  const resultado = x + y;
  return resultado;

  console.log("Isso não será executado...");
}

// console.log(resultado); resultado está definido apenas no contexto da função

console.log(soma(2, 2));

const cinco = soma(3, 2);

console.log(cinco);

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
