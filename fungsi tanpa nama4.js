let readline=require('readline-sync');

let tambah=function(a,b){
    return a+b;
}

let a=parseFloat(readline.question('Masukkan nilai A: '));
let b=parseFloat(readline.question('Masukkan nilai B: '));

let hasil=tambah(a,b);
console.log(`${a}+${b}=${hasil}`);