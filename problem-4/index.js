function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
<<<<<<< HEAD
    var currentYear = new Date().getFullYear(); // Mendapatkan tahun sekarang

    for (var i = 0; i < arr.length; i++) {
      var obj = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
      };
  
      if (arr[i][3] !== undefined && arr[i][3] <= currentYear) {
        obj.age = currentYear - arr[i][3];
      } else {
        obj.age = 'Invalid Birth Year';
      }
  
      console.log(`${i + 1}. ${obj.firstName} ${obj.lastName}:`);
      console.log(obj);
    }
    if (arr.length === 0) {
      console.log('""');
    }

=======
>>>>>>> 16f95399334a8eb943b7c5ef3ed42e61ae195207
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 38 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""