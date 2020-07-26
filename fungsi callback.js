let readline=require('readline-sync');

function tambah(a,b){
    return a+b;
}

function kurang(a,b){
    return a-b;
}

function kali(a,b){
    return a*b;
}

function bagi(a,b){
    return a/b;
}

function hitung(a,b,callback){
    return callback(a,b);
}

let a=parseFloat(readline.question("Masukkan Nilai a: "));
let b=parseFloat(readline.question("Masukkan Nilai b: "));

console.log(`${a}+${b}= ${hitung(a,b,tambah)}`);
console.log(`${a}-${b}= ${hitung(a,b,tambah)}`);
console.log(`${a}*${b}= ${hitung(a,b,tambah)}`);
console.log(`${a}/${b}= ${hitung(a,b,tambah)}`);

