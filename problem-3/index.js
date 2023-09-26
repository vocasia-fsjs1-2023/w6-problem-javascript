let num = 3;

// Tulis code dibawah sini.
function generateTriangle(num) {
    let triangle = '';

    for (let i = 1; i <= num; i++) {
        // Membuat spasi kosong di awal baris dengan decrement. Semakin tinggi segitiga yang diingikan semakin banyak spasi di awal baris pertama.
        for (let j = num - i; j > 0; j--) {
            triangle += ' ';
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            if (k % 2 === 0) {
                triangle += 'o';
            } else {
                triangle += 'x';
            }
        }
        triangle += '\n';
    }

    return triangle;
}
// dan console log hasil
console.log(generateTriangle(num));