function ladder(word) {
//your code here
<<<<<<< HEAD
let result = [];
  let wordArray = word.split('');
  let currentRow = [];

  for (let i = 0; i < wordArray.length; i++) {
    currentRow.push(wordArray[i]);
    result.push([...currentRow]);
  }

  return result;

=======
>>>>>>> 16f95399334a8eb943b7c5ef3ed42e61ae195207
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