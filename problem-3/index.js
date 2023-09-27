let num = 3

// Tulis code dibawah sini.
function segitiga(num) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      
      for (let j = 1; j <= num - i; j++) {
        row += ' ';
      }
      
      for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 1) {
          row += 'x';
        } else {
          row += 'o';
        }
      }
      
      console.log(row);
    }
  }
  
  // Contoh 1 let num = 3
  console.log("Contoh 1:");
  segitiga(3);
  
  // Contoh 2 let num = 6
  console.log("\nContoh 2:");
  segitiga(6);
  