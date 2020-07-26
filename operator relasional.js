var a= 10, b=20;
console.log(`a \t:${a}`);
console.log(`a \t:${b}`);
console.log(`a==b \t:${(a==b)}`);
console.log(`a!b \t:${(a!=b)}`);
console.log(`a<b \t:${(a<b)}`);
console.log(`a>b \t:${(a>b)}`);
console.log(`a<=b \t:${(a<=b)}`);
console.log(`a>=b \t:${(a>=b)}`);

// operator relasional dalam blok pemilihan 
if (a<b) {
    console.log(`a lebih kecil dari pada b`);
}

// operator relasional dalam blok pengulangan
var i=a;
while(i<=b){
    process.stdout.write(`${i}`); // menggunakan data ke layar tanpa disertai karakter baris baru(new line)
    //console.log(s) --> process.stdout.write (s+`\n`)
}