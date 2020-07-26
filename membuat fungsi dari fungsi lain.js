let readline=require('readline-sync');

function hipoteunsa(a,b){
    // fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    // memanggil fungsi lokal
    return c =math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('menghitung Sisi miring Segitiga Siku-siku');
let a=parseFloat(readline.question("Masukkan Nilai alas: "));
let b=parseFloat(readline.question("Masukkan Nilai tinggi: "));

var c=hipotenusa(a,b);

console.log(`sisi Miring = ${c}`);