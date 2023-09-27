function ladder(word) {
    const result = [];
    const wordArray = word.split(''); // Membuat array dari kata input
    for (let i = 0; i < wordArray.length; i++) {
      const subArray = [];
      for (let j = 0; j < wordArray.length - i; j++) {
        subArray.push(wordArray[j]);
      }
      result.push(subArray);
    }
  
    return result;
}  
// Test dengan contoh input 'vocasia' 
  
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