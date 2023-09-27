function cariMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const middleValues = [sortedArr[middleIndex - 1], sortedArr[middleIndex]];
    return (middleValues[0] + middleValues[1]) / 2;
  } else {
    return sortedArr[middleIndex];
  }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5