function deepSum(arr) {
  // Code disini
  let tampung = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(arr[i][j]);
      // console.log(temp);
      for (let k = 0; k < temp.length; k++) {
        // console.log(temp[k]);
        let temp2 = temp[k];
        for (let l = 0; l < temp2.length; l++) {
          tampung += temp2[l];
        }
      }
    }
  }
  return tampung === 0 ? "No Number" : tampung;
}

//TEST CASE
console.log(
  deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3],
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90],
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10],
    ],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number
