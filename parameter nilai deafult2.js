function cetak(s, n=3){
    for (let i=0;i<n;i++){
        console.log(s);
    }
}

function cetak(s, n=3, newLine=true){
    for ( let i=0;i<n;i++){
        process.stdout.write(s);
        if(newLine)Process.stdout.write('\n');
    }
}

// memanggil fungsi cetak() dengan satu parameter
console.log('memanggil fungsi dengan satu parameter: ');
cetak('RPL');

// memanggil fungsi cetak() dengan dua parameter
console.log('\n memanggil Fungsi dengan 2 parameter: ');
cetak('RPL',2);
// memanggil fungsi cetak dengan dua paramater
console.log("memanggil fungsi dengan 3 parameter: ");
cetak('RPL',1,true);
cetak('TKJ',1,false);