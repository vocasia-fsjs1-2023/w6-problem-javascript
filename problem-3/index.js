let num = 3

// Tulis code dibawah sini.
// dan console log hasil
function generateTriangle(num) {
    let triangle = '';
    for (let i = 0; i < num; i++) {
      let row = '';
      for (let j = 0; j < num - i - 1; j++) {
        row += ' ';
      }
      for (let k = 0; k < i * 2 + 1; k++) {
        if (k % 2 === 0) {
          row += 'x';
        } else {
          row += 'o';
        }
      }
      triangle += row + '\n';
    }
    return triangle;
  }
  console.log(generateTriangle(num));