function cariMedian(arr) {
    // code disini
    arr.sort((a, b) => a - b);
    if (arr.length % 2 === 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        const midIndex = arr.length / 2;
        return (arr[midIndex - 1] + arr[midIndex]) / 2;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5