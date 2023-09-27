let num = 3;

// Tulis code dibawah sini.
function printPattern(num) {
  let pattern = '';
  
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      pattern += ' ';
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
      if (k % 2 === 1) {
        pattern += 'x';
      } else {
        pattern += 'o';
      }
    }

    if (i < num) {
      pattern += '\n';
    }
  }

  return pattern;
}
// dan console log hasil
console.log(printPattern(6));
