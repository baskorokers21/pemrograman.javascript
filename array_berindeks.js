let readline=Require('readline-sync');
let n=parseInt(readline.question("Masukkan Jumlah Data: "));
let a=new Array();//array kosong
let total=0.0;
for(let i=0;i<n;i++){
    a[i]=parseFloat(readline.question( `Data ke-${i+1}: `))
    total +=a[i];
}

let rata=total/a.length;

console.log(`\n Isi Array a: [${a}]`);
console.log(`\n Total Data: [${total}]`);
console.log(`\n Rata-rata: [${rata}]`);
