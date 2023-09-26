function ladder(word) {
  let arr = [];
  for (let i = word.length; i > 0; i--) {
    let tampung = [];
    for (let j = 0; j < i; j++) {
      tampung.push(word[j]);
    }
    arr.push(tampung);
  }
  return arr;
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
