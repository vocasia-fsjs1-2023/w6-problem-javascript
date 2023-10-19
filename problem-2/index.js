function ladder(word) {
//your code here
var result = [];
    
    for (var i = 0; i < word.length; i++) {
      var temp = [];
      for (var j = 0; j < word.length - i; j++) {
        temp.push(word[j]);
      }
      result.push(temp);
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
