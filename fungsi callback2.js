var readline=require('readline-sync');

function hitung(a,b,callback){
    return callback(a,b);
}

let a=parseFloat(readline.question("Masukkan Nilai a: "));
let b=parseFloat(readline.question("Masukkan Nilai b: "));

console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));