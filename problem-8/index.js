function cariMedian(arr) {
    // code disini
    if (arr.length % 2 === 0) {
      const middle = (arr.length / 2) - 1;
      return (arr[middle] + arr[middle + 1]) / 2;
    } else {
      const middle = (arr.length / 2) - 0.5;
      return arr[middle];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5