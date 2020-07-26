let readline=require('readline-sync');

let a= parseFloat(readline.question('Masukkan Nilai A:'));
let b=parseFloat(readline.question('Masukkan Nilai B'));
let c;

if(b==0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);