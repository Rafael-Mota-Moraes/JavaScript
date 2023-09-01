let inputPeso = document.querySelector("#peso");
let inputAltura = document.querySelector("#altura");
const calcBtn = document.querySelector(".calcBtn");

calcBtn.addEventListener("click", () => {
  const altura = Number(inputAltura.value.replace(",", "."));
  const imc = (Number(inputPeso.value) / (altura * altura)).toFixed(2);

  const resultado = document.querySelector(".resultado");
  if (imc != "NaN" && imc) {
    resultado.innerHTML = `<h2>Seu imc é ${imc}</h2>`;
  } else {
    resultado.innerHTML = "<h2>Digite os dados corretamente</h2>";
  }
});
