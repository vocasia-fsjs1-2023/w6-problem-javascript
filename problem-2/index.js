function ladder(word) {
  //your code here
  const result = [];
  const wordArray = word.split("");

  for (let i = 0; i < wordArray.length; i++) {
    const row = [];
    for (let j = 0; j < wordArray.length - i; j++) {
      row.push(wordArray[j]);
    }
    result.push(row);
  }

  return result;
}

// DRIVER CODE
console.log(ladder("vocasia"));
//   [
//     [ 'v', 'o', 'c', 'a', 's', 'i', 'a' ],
//     [ 'v', 'o', 'c', 'a', 's', 'i' ],
//     [ 'v', 'o', 'c', 'a', 's' ],
//     [ 'v', 'o', 'c', 'a' ],
//     [ 'v', 'o', 'c' ],
//     [ 'v', 'o' ],
//     [ 'v'],
//   ]
