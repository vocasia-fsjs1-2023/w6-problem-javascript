let num = 3

// Tulis code dibawah sini.
function printTriangle(num) {
    for (let i = 0; i < num; i++) {
        let row = '';
     
       for (let j = 0; j < num - i - 1; j++) {
        row += ' ';
       }
   
   for (let k = 0; k <= i * 2; k++) {
       if (k % 2 === 0) {
         row += 'x';
         } else {
         row += 'o';
         }
       }
     
       console.log(row);
       }
     }
     
     console.log("Contoh 1:");
     printTriangle(num);
     
     num = 6;
     
// dan console log hasil
console.log("Contoh 2:");
printTriangle(num);