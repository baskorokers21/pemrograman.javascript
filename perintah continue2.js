var readline= require('readline-sync');

while(true){
    let nama = readline.question('Nama');
    let kelas =readline.question('kelas');
    if (nama !=='rpl' || kelas !=='5'){
        console.log('nama/kelas salah \n');
        continue;
    }

    console.log(`\n Selamat Datang Siswa XI RPL 5`);
    break;
}