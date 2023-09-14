const tresHoras = 1000 * 60 * 60 * 3;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data);
console.log(data.toString());

console.log();

const data2 = new Date(2023, 8, 13, 9, 38, 50);
console.log(data2.toString());

console.log();

const data3 = new Date("2019-04-20 20:20:59");
console.log(data3);

console.log("Dia:", data.getDate());
console.log("Hora:", data.getHours());
