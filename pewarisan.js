let readline=require('readline-sync');
class segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }

    luas(){
        return this.alas*this.tinggii/2;
    }
    
    cetakpropert(){
        console.log(`alas\t:${this.a}`);
        console.log(`tinggi\t:${this.tinggi}`);
    }
}

class SegitigaWarna extends segitiga{
    constructor(a,t,w){
        // super(a,t);memanggil konstruktor kelas segitiga
        // mendefinisikan properti baru
        this.warna=w;
    }

    cetakpropert(){
        // memanggil segitiga.cetakPropert
        super.cetakpropert();
        console.log(`warna\t:${this.warna}`);
    }
}
// membaca alas dan tinggi
let a=parseFloat(readline.question("Masukkan Nilai alas: "));
let t=parseFloat(readline.question("Masukkan Nilai tinggi: "))
// membuat objek dari kelas SegitigaWarna
let obj=new SegitigaWarna(a,t,'merah');
obj.cetakpropert;

// memanggil metode luas
console.log(`luas\t:${obj.luas()}`);