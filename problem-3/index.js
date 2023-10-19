let num = 6

// Tulis code dibawah sini.
// dan console log hasil
function generateTriangle(num) {
    for (var i = 1; i <= num; i++) {
      var row = '';
      for (var j = 1; j <= num - i; j++) {
        row += ' ';
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
        if (k % 2 === 0) {
          row += 'o';
        } else {
          row += 'x';
        }
      }
      console.log(row);
    }
  }

  generateTriangle(num);