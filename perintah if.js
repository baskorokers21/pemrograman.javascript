var readline  = require('readline-sync');

var x = parseFloat(readline.question('masukkan nilai x: '));
var y = parseFloat(readline.question('masukkan nilai y: '));

if (y==0) {
    console.log('kesalahan Nilai y tidak boleh nol');
    process.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);