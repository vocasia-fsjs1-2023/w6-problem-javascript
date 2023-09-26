function ladder(word) {
    const ladderArray = [];
    const wordArray = word.split('');
    for (let i = wordArray.length; i > 0; i--) {
        const final = [];
        for (let j = 0; j < i; j++) {
            final.push(wordArray[j]);
        }
        ladderArray.push(final);
    }
    return ladderArray;
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