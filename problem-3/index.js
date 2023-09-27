let num = 6;
let text = '';

// Tulis code dibawah sini.
for (let i = 0; i < num; i++) {
    let box = ' ';

    for (let j = 0; j < num - i - 1; j++) {
        box += ' ';

    }

    for (let k = 0; k < (i * 2) + 1; k++){
        if(k % 2 ==0 ){
            box += 'x';
        }else{
            box += 'o';
        }
    }
    console.log(box);
}
// dan console log hasil
