let num = 3

function triangleNum(num) {
    for (let i = 0; i < num; i++) {   
        let row = " ";
       for (let j = 0; j < num - i; j++) {
        row += " ";
       }
       for (let k = 1; k <= i * 2 + 1; k++) {
        if (k % 2 === 1) {
          row += "x";
        } else {
          row += "o";
        }
      }

    console.log(row);
    }
}

    console.log("Contoh 1")
    let num1 = 3;
    triangleNum(num1);
  
    console.log("Contoh 2")
    let num2 = 6;
    triangleNum(num2);

// Tulis code dibawah sini.
// dan console log hasil
