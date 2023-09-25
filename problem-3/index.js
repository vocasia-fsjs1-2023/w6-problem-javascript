// let num = 3;

// Tulis code dibawah sini.
function createTriangle(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";

    // Menambahkan spasi sebelum karakter "x"
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }

    // Menambahkan karakter "x"
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j % 2 === 1) {
        row += "x";
      } else {
        row += "o";
      }
    }

    console.log(row);
  }
}

let num = 3;
createTriangle(num);

num = 6;
createTriangle(num);
