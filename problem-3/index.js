let num = 6;

// Tulis code dibawah sini.
let isi = "";
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num - i; j++) {
    isi += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k % 2 === 0) {
      isi += "x";
    } else {
      isi += "o";
    }
  }
  isi += "\n";
}
console.log(isi);
// dan console log hasil
