let val;


// number to string
val = String(123);
val = String([1,2,3,4,5]);
val = String([5 + 5]);

// kalau pingin merubah menjadi string (toString)
val = (4).toString();

// String to number
val = Number('51.30');
val = Number('1,2,34');


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

