let num = 3;
// Tulis code dibawah sini.
function segitiga(num) {
  for (let i = 1; i <= num; i++) {
    let hasil = "";
    for (let j = 1; j <= num - i; j++) {
      hasil += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k % 2 === 1) {
        hasil += "x";
      } else {
        hasil += "o";
      }
    }
    console.log(hasil);
  }
}
// dan console log hasil
// Hasil 3 baris
console.log("Hasil 3 baris:");
let num1 = 3;
segitiga(num1);

// Hasil 6 baris
console.log("\nHasil 6 baris:");
let num2 = 6;
segitiga(num2);
