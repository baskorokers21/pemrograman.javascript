var readline = require('readline-sync');
var kehadiran = parseInt(readline.question("Masukkan jumlah kehadiran "));

predikat = (kehadiran > 10) ? "naik" : "tidak naik";

console.log(predikat);