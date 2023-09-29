let num1 = 3;
let num2 = 6;

// Tulis code dibawah sini.
// dan console log hasil
function generateTriangle(num) {
    let result = '';

    for (let i = 0; i < num; i++) {
        let row = '';
        for (let j = 0; j < num - i - 1; j++) {
          row += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
          if (k % 2 === 0) {
            row += 'x';
          } else {
            row += 'o';
          }
        }
        result += row + '\n';
      }
      return result;
    }
console.log("Contoh 1:");
console.log(generateTriangle(num1));
console.log("Contoh 2:");
console.log(generateTriangle(num2));