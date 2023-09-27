
function ladder(word) {
    //your code here
    for (let i = 0; i < word.length; i++) {
        let box = [];
        for (let j = 0; j <  word.length - i; j++) {
            box.push(word[j]);
        }
        console.log(box);
    }
}

ladder('vocasia');
//   [
//     [ 'v', 'o', 'c', 'a', 's', 'i', 'a' ],
//     [ 'v', 'o', 'c', 'a', 's', 'i' ],
//     [ 'v', 'o', 'c', 'a', 's' ],
//     [ 'v', 'o', 'c', 'a' ],
//     [ 'v', 'o', 'c' ],
//     [ 'v', 'o' ],
//     [ 'v'],
//   ]