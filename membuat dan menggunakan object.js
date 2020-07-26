// membuat tipe objek
function segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}

segitiga.prototype.luas=function(){
    return this.alas*tinggi/2;
}

// membuat objek dari tipe segitigas
let obj=new segitiga(4,5);

console.log("Sebelum nilai properti diubah");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas}`);

// mengubah nilai properti alas dan tinggi
obj.alas=10;
obj.tinggi=12;

console.log("setelah nilai properti diubah: ");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);