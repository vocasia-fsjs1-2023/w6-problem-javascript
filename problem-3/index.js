let num = 3;
let output = "";

for (let i = 1; i <= num; i++) {
  // Tambahkan spasi sebelum karakter "x"
  for (let j = 1; j <= num - i; j++) {
    output += " ";
  }
  
  // Tambahkan karakter "x" dan "o" secara bergantian
  for (let k = 1; k <= i * 2 - 1; k++) {
    if (k % 2 === 1) {
      output += "x";
    } else {
      output += "o";
    }
  }
  
  // Pindah ke baris berikutnya
  output += "\n";
}

console.log(output);
