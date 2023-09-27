let num = 3;

// Tulis code dibawah sini.
//let num = 6;
let hasil = "";
for (let i = 1; i <= num; i++) {
    for (let j = 0; j < num - i; j++) {
        hasil +=" "; //spasi awal 
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
        if (k % 2===0 ) {
            hasil +="o";
        }else{
            hasil += "x";
        }
    }   
    // Menambahkan baris baru
    hasil += "\n";
}

// dan console log hasil
console.log(hasil);