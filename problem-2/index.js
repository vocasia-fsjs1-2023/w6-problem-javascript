function ladder(word) {
    const result = [];
    
    for (let a = 0; a < word.length; a++) {
      const box = [];
      for (let b = 0; b < word.length - a; b++) {
        box.push(word[b]);
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