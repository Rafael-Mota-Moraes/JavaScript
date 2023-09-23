function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

function funcao3(a = 0, b = 0) {
  console.log(a + b);
}

funcao3(2);

function funcao4(...nums) {
  let acumulador = 0;

  for (let num of nums) {
    acumulador += num;
  }

  console.log(acumulador);
}

funcao4(1, 2, 3, 4);
