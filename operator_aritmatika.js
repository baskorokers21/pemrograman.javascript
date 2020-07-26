var readline = require ('readline-sync');

var a = parseInt(readline.question("masukkan Nilai a\n"));
var b =parseInt(readline.question("Masukkan Nilai b\n"));

console.log(`$(a)+$(b)=${a+b}`);
console.log(`$(a)-$(b)=${a-b}`);
console.log(`$(a)*$(b)=${a*b}`);
console.log(`$(a)/$(b)=${a/b}`);
console.log(`$(a)%$(b)=${a%b}`);
console.log(`$(a)**$(b)=${a**b}`);
