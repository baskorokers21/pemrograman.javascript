var a = 10;
console.log("Nilai a:"+a);
var b = 4;
console.log("Nilai b:"+b);
function pembagianBulat(a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}

console.log(`${a}/${b}=${pembagianBulat(a,b)}`);