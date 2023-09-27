let num = 3
function piramid(num){
    for (let i = 1; i <= num; i++){
        let fix = '';
        for (let j = 1; j <= num - i; j++){
            fix += ' ';
        }
        for (let k = 1; k <= 2 * i -1; k++){
            if (k % 2 === 1){
                fix += "x";
            }else {
                fix += "o";
            }
        }
        console.log(fix);
    }
}
piramid(num);