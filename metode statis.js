let readline=require('readline-sync');

class segitiga{
    // konstruktor
    constructor(a,t){
        // mendefinisikan properti
        this.alas=a;
        this.tinggi=t;
    }

    // daftar metode
    luas(){
        return this.alas*this.tinggii/2;
    }
    
    // metode statis
    static buatObjek(a,t){
        return new segitiga(a,t);
    }
}

// membaca data alas dan tinggi
let a=parseFloat(readline.question("Masukkan Nilai alas: "));
let t=parseFloat(readline.question("Masukkan Nilai tinggi: "));

//memanggil metode statis 
let obj=segitiga.buatObjek(a,t);

console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.alas()}`);