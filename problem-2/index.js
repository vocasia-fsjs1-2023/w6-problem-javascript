function ladder(word) {
  const result = [];
  
  for (let i = 0; i < word.length; i++) {
    const box = [];
    for (let j = 0; j < word.length - i; j++) {
      box.push(word[j]);
    }
    result.push(box);
  }
  
  return result;
}
      
      // Driver Code

  
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