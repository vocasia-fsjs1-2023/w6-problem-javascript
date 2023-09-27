function ladder(word) {
//your code here
let result = [];
  let wordArray = word.split('');
  let currentRow = [];

  for (let i = 0; i < wordArray.length; i++) {
    currentRow.push(wordArray[i]);
    result.push([...currentRow]);
  }

  return result;

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