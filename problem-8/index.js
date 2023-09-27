function cariMedian(arr) {
  // Mengurutkan array
  arr.sort(function(a, b) {
    return a - b;
  });

  // Menghitung panjang array
  var len = arr.length;

  // Mengecek apakah panjang array ganjil atau genap
  if (len % 2 === 1) {
    // Jika panjang array ganjil, maka median adalah nilai tengah
    return arr[Math.floor(len / 2)];
  } else {
    // Jika panjang array genap, maka median adalah rata-rata dua nilai tengah
    var mid1 = arr[len / 2 - 1];
    var mid2 = arr[len / 2];
    return (mid1 + mid2) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
