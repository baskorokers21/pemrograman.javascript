function increment(s){
    a.x +=1;
}

// membuat objek
let obj = new Object();
// mendefinisikan properti x pada objek yang telah dibuat
obj.x=10;

// menampilkan nilai obj.x sebelum dinaikkan
console.log('sebelum dinaikkan nilainya: ');
console.log(`obj,x: ${obj.x}`);

// memanggil fungsi increment
increment(obj);

// menampilkan nilai obj.x setelah dinaikkan
console.log("\n setelah dinaikkan nilainya");
console.log(`obj.x: ${obj.x}`)