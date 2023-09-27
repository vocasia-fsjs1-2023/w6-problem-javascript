function ladder(word) {
  let newArray = [];
    for (let i = 0; i < word.length; i++) {
      let arrayChar = [];
      for (let j = 0; j < word.length - i; j++) {
        arrayChar.push(word[j]);
      }
      newArray.push(arrayChar);
    }
    return newArray;
}

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
