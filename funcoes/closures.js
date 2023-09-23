function retornaFuncao() {
  const nome = "Rafael";

  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
const nome = funcao();
console.log(nome);
