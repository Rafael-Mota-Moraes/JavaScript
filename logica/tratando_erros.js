const pessoa = { nome: "Rafael" };
try {
  console.log(pessoa.toUpperCase());
} catch (error) {
  console.log("Ocorreu um erro:", error);
} finally {
  console.log("Aqui sempre executa");
}
