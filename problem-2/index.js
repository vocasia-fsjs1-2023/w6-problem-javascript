function ladder(word) {
    const finalArray = [];
    const  wordArray = word.split('');
    for (let i = wordArray.length; i > 0; i--){
        const fix = [];
        for (let j = 0; j < i; j++){
            fix.push(wordArray[j]);
        }
        finalArray.push(fix);
    }
    return finalArray;
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