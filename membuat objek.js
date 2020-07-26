let readline=require('readline-sync');

class segitiga{
    // kontruktor
    constructor(a,t){
        // mendefinisikan properti
        this.alas =a;
        this.tinggi =t;


    }
    // daftar metode
    luas(){
        return this.alas*this.tinggii/2;
    }
}

// membaca data alas dan tinggi
 let a=parseFloat(readline.question("Masukkan Nilai alas: "));
 let t=parseFloat(readline.question("Masukkan nilai tinggi: "));

//  membuat objek dari kelas segitiga
let obj=new segitiga(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.alas()}`);