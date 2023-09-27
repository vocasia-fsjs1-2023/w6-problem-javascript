function ladder(word) {
    let hasil=[];
    for(let i=0; i<word.length; i++){
        //menampilkan huruf pertama hingga huruf terakhir pada setiap perulangan akan hilang satu per satu
        let pisah=word.slice(0, word.length-i);
        //memasukkan data dan memisahnya setiap huruf 
        hasil.push([...pisah]);
        
    }
    return hasil
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
