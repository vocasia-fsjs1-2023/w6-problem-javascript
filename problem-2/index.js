function ladder(word) {
//your code here
  const result = [];
  
  for (let i = 0; i < word.length; i++) {
    const row = [];
    for (let j = 0; j < word.length - i; j++) {
      row.push(word[j]);
    }
    result.push(row);
  }

  return result;
}
  
console.log(ladder('vocasia'));
