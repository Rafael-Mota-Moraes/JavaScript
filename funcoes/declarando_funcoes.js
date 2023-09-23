// declaracao de função (function  hoisting)
function falaOi() {
  console.log("Oi");
}
falaOi();

// First class objects (Objetos de primeira classe)
const falaOi2 = function () {
  console.log("Oi 2");
};

falaOi2();

function executaFuncao(funcao) {
  console.log("Executando a funcao");
  funcao();
}

executaFuncao(falaOi);

// Arrow function
const funcaoArrow = () => {
  console.log("Arrow function");
};

funcaoArrow();
