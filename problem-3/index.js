let num = 3

// Tulis code dibawah sini.
for (let i = 1; i <= num; i++) {
    let row = '';
    for (let j = 1; j <= num - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 0) {
            row += 'o';
          } else {
            row += 'x';
          }
}
// dan console log hasil
console.log(row);
}