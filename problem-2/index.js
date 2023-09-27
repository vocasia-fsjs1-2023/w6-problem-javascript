function ladder(word) {
    const Septi = [];
    const kereta = word.split('');
    for(let i = kereta.length; i > 0; i--){
        const mobil = [];
        for (let j = 0; j < i; j++){
            mobil.push(kereta[j]);
        }
        Septi.push(mobil);
    }
    return Septi;
}
  
console.log(ladder('vocasia'));
//   [
//     [ 'v', 'o', 'c', 'a', 's', 'i', 'a' ],
//     [ 'v', 'o', 'c', 'a', 's', 'i' ],
//     [ 'v', 'o', 'c', 'a', 's' ],
//     [ 'v', 'o', 'c', 'a' ],
//     [ 'v', 'o', 'c' ],
//     [ 'v', 'o' ],
//     [ 'v'],
//   ]