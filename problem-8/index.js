function cariMedian(angka) {
    // code disini
  angka.sort(function(a, b) {
    return a - b;
  });
  var panjang = angka.length;
  // Jika panjang array ganjil, maka median adalah data tengah
  if (panjang % 2 !== 0) {
      return angka[Math.floor(panjang / 2)];
  }
  // Jika panjang array genap, maka median adalah rata-rata dua data tengah
  else {
      var mid1 = angka[panjang / 2 - 1];
      var mid2 = angka[panjang / 2];
      return (mid1 + mid2) / 2;
  } 
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5